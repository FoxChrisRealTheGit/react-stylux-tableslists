import React, { Component } from 'react';
import '../css/reset.css';
import '../css/animations.css';

export default class Table1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            columns: props.columns || 3,
            rows: props.rows || 3,
            head: props.head,
            body: props.body,
            tableid: props.tableId,
            mainid: props.mainId,
            mainClassName: props.mainClassName,
            tableClassName: props.tableClassName,
        }
    }
    componentDidMount() {
        let tempHead = []
        let tempBody = []
        let childs = []
        let rows = this.state.rows
        let HEADROW, HEAD, BODY
        let BODYROW = []
        const CHILDS = React.Children.count(this.props.children) === 0 ? '' : React.Children.toArray(this.props.children.split('\\'))
        if (CHILDS !== '') {
            childs = CHILDS.map((x, i, arr) => x);
            for (var b = 1; b <= this.state.columns; b += 1) {
                tempHead.push(childs[b - 1])
            }
            childs.splice(0, this.state.columns)
            //need to divide by this.state.columns and make rows here
            tempBody = childs.map((x, i, arr) => x);
            while (rows > 0) {
                if (rows === this.state.rows) {
                    HEAD = tempHead.map((x, i, arr) => {
                        return (
                            <th key={i}>
                                {x}
                            </th>
                        )
                    })
                    HEADROW = <tr>{HEAD}</tr>
                } else {
                    var temperBody = tempBody.splice(0, this.state.columns);
                    BODY = temperBody.map((x, i, arr) => {
                        return (
                            <td key={i}>
                                {x}
                            </td>
                        )
                    })
                    BODYROW.push(<tr key={rows}>{BODY}</tr>)
                }
                rows -= 1
            }
            this.setState({ head: HEADROW, body: BODYROW })
        }
    }
    componentWillReceiveProps(newProps) {
        let tempHead = []
        let tempBody = []
        let childs = []
        let rows = this.state.rows
        let HEADROW, HEAD, BODY
        let BODYROW = []
        const CHILDS = React.Children.count(newProps.children) === 0 ? '' : React.Children.toArray(newProps.children.split('\\'))
        if (CHILDS !== '') {
            childs = CHILDS.map((x, i, arr) => x);
            for (var b = 1; b <= this.state.columns; b += 1) {
                tempHead.push(childs[b - 1])
            }
            childs.splice(0, this.state.columns)
            //need to divide by this.state.columns and make rows here
            tempBody = childs.map((x, i, arr) => x);
            while (rows > 0) {
                if (rows === this.state.rows) {
                    HEAD = tempHead.map((x, i, arr) => {
                        return (
                            <th key={i}>
                                {x}
                            </th>
                        )
                    })
                    HEADROW = <tr>{HEAD}</tr>
                } else {
                    var temperBody = tempBody.splice(0, this.state.columns);
                    BODY = temperBody.map((x, i, arr) => {
                        return (
                            <td key={i}>
                                {x}
                            </td>
                        )
                    })
                    BODYROW.push(<tr key={rows}>{BODY}</tr>)
                }
                rows -= 1
            }
            this.setState({ head: HEADROW, body: BODYROW })
        }
    }
    render() {
        const TABLESTYLE = {

        }

        return (
            <div id={this.state.mainId} className={this.state.mainClassName}>
                <table style={TABLESTYLE} id={this.state.tableId} className={`${this.state.tableClassName}`}>
                    <thead>
                        {this.state.head}
                    </thead>
                    <tbody>
                        {this.state.body}
                    </tbody>
                </table>
            </div>
        )
    }
}