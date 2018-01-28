import React, {Component} from 'react';

export default class NumberList3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listItem: [],
            color: props.color || 'black',
            fontFamily: props.font || 'serif',
            fontSize: props.size || '1.333em',
            lineHeight: props.lineHeight || '1.5em',
            fontWeight: props.weight || '400',
            paddingLeft: props.paddingLeft,
            listStyleType: props.listStyleType || 'upper-roman',
            listStyleImage: props.listStyleImage || 'none',
            listStylePosition: props.listStylePosition || 'inside',
            id: props.id,
            className: props.className,
        }
    }
    componentDidMount() {
        let listItems = []
        const CHILDS = React.Children.toArray(this.props.children.split('\\'))
        listItems = CHILDS.map((x) => x)
        this.setState({ listItem: listItems })
    }
    componentWillReceiveProps(newProps) {
        let listItems = []
        const CHILDS = React.Children.toArray(newProps.children.split('\\'))
        listItems = CHILDS.map((x) => x)
        this.setState({ listItem: listItems })
    }

    render() {
        const LISTSTYLE = {
            color: this.state.color,
            fontFamily: this.state.fontFamily,
            fontSize: this.state.fontSize,
            lineHeight: this.state.lineHeight,
            fontWeight: this.state.fontWeight,
            paddingLeft: this.state.paddingLeft,
            listStyleType: this.state.listStyleType,
            listStyleImage: this.state.listStyleImage,
            listStylePosition: this.state.listStylePosition,

        }
        const LISTITEMSTYLE = {
            paddingLeft: this.state.itemPadding,
            backgroundImage: this.state.itemBGImage,
            backgroundPosition: this.state.itemBGPosition,
            backgroundSize: this.state.itemBGSize,
            backgroundRepeat: 'no-repeat',
        }
        const LIST = this.state.listItem.map((x, i) => {
            return (
                <li key={i} style={LISTITEMSTYLE}>{x}</li>
            )
        })
        return (
            <ol style={LISTSTYLE} id={this.state.id} className={this.state.className}>
                {LIST}
            </ol>
        )
    }
}