import React, {Component} from 'react';
import '../css/reset.css';
import '../css/animations.css';

export default class Table2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            columns: props.columns || 3,
            rows: props.rows || 3,
            body: props.body,
            tableId: props.tableId,
            mainId: props.mainId,
            mainClassName: props.mainClassName,
            tableClassName: props.tableClassName,

        }
    }
    componentDidMount() {
        let tempBody = []
        let rows = this.state.rows
        let  HEAD, BODY
        let BODYROW = []
        const CHILDS = React.Children.count(this.props.children) === 0 ? '' : React.Children.toArray(this.props.children.split('\\'));
        if (CHILDS !== '') {
            tempBody = CHILDS.map((x, i, arr) => x);

            while (rows > 0) {
                var temperBody = tempBody.splice(0, this.state.columns);
                BODY = temperBody.map((x, i, arr) => {
                    return (
                        <td key={i}>
                            {x}
                        </td>
                    )
                })
                BODYROW.push(<tr key={rows}>{BODY}</tr>)

                rows -= 1
            }
            this.setState({ body: BODYROW })
        }
    }
    componentWillReceiveProps(newProps) {
        let tempBody = []
        let rows = this.state.rows
        let HEAD, BODY
        let BODYROW = []
        const CHILDS = React.Children.count(newProps.children) === 0 ? '' : React.Children.toArray(newProps.children.split('\\'));
        if (CHILDS !== '') {
            tempBody = CHILDS.map((x, i, arr) => x);

            while (rows > 0) {
                var temperBody = tempBody.splice(0, this.state.columns);
                BODY = temperBody.map((x, i, arr) => {
                    return (
                        <td key={i}>
                            {x}
                        </td>
                    )
                })
                BODYROW.push(<tr key={rows}>{BODY}</tr>)

                rows -= 1
            }
            this.setState({ body: BODYROW })
        }
    }
    render() {
        const TABLESTYLE = {

        }
        return (
            <div id={this.state.mainId} className={this.state.mainClassName}>
                <table style={TABLESTYLE} id={this.state.tableId} className={` ${this.state.tableClassName}`}>
                    <tbody>
                        {this.state.body}
                    </tbody>
                </table>
            </div>
        )
    }
}