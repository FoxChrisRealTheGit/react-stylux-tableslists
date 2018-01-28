import React, {Component} from 'react';
import '../../css/SuperStyleSheet.css';

export default class NumberList2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listAmount: props.listAmount || '1',
            listItem: [],
            id: props.id,
            className: props.className,

        }
    }
    componentDidMount() {
        let listItems = []
        let nestedItems = []
        const CHILDS = React.Children.toArray(this.props.children)
        let tempItems = CHILDS.map((x) => x)
        for (var q = 0; q < CHILDS.length; q += +this.state.listAmount) {
            for (var w = 0; w < +this.state.listAmount; w += 1) {
                nestedItems.push(tempItems[w])
            }
            listItems.push(nestedItems)
            nestedItems = []
            tempItems.splice(0, this.state.listAmount)
        }
        this.setState({ listItem: listItems })
    }
    componentWillReceiveProps(newProps) {
        let listItems = []
        let nestedItems = []
        const CHILDS = React.Children.toArray(newProps.children)
        let tempItems = CHILDS.map((x) => x)
        for (var q = 0; q < CHILDS.length; q += +this.state.listAmount) {
            for (var w = 0; w < +this.state.listAmount; w += 1) {
                nestedItems.push(tempItems[w])
            }
            listItems.push(nestedItems)
            nestedItems = []
            tempItems.splice(0, this.state.listAmount)
        }
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
            position: 'relative'

        }
        const LISTITEMSTYLE = {
            paddingLeft: '70px',
            counterIncrement: 'aCounter',

        }
        const LIST = this.state.listItem.map((x, i) => {
            return (

                <li key={i} style={LISTITEMSTYLE}>{x}</li>

            )
        })
        return (
            <ol style={LISTSTYLE} id={this.state.id} className={`bigList ${this.state.className}`}>
                {LIST}
            </ol>
        )
    }
}