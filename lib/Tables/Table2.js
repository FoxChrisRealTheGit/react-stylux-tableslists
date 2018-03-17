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
            smdis: props.smDis || 'flex',
            mddis: props.mdDis || 'flex',
            animationIterationCount: props.aniCount,
            animationTimingFunction: props.aniTime,
            animationName: props.aniName,
            animationDuration: props.aniDur,
            transformOrigin: props.transformOrigin,
            animationFillMode: props.aniFillMode,
            // headBorderTop: props.hbordertop,
            // headBorderRight: props.hborderRight,
            // headBorderBottom: props.hborderBottom,
            // headBorderLeft: props.hborderLeft,
            // headBorder: props.hborder || '1px solid black',
            // headVertical: props.hvertical || 'center',
            // headWidth: props.headWidth,
            // headHeight: props.headHeight,
            // headMargin: props.headMargin,
            // headPadding: props.headPadding || '5px',
            dBorderTop: props.dbordertop,
            dBorderRight: props.dborderRight,
            dBorderBottom: props.dborderBottom,
            dBorderLeft: props.dborderLeft,
            dBorder: props.dborder || '1px solid black',
            headVertical: props.headVertical || 'center',
            dwidth: props.dwidth,
            dheight: props.dheight,
            dmargin: props.dmargin,
            dpadding: props.dpadding || '5px',
            tableBorderTop: props.tbordertop,
            tableBorderRight: props.tborderRight,
            tableBorderBottom: props.tborderBottom,
            tableBorderLeft: props.tborderLeft,
            tableBorder: props.tborder || '1px solid black',
            tableMargin: props.tmargin,
            tablePadding: props.tpadding,
            tableWidth: props.tableWidth,
            tableHeight: props.tableHeight,
            tableBorderCollapse: props.borderCollaspe || 'collapse',
        }
    }
    componentDidMount() {
        let tempBody = []
        let rows = this.state.rows
        let HEAD, BODY
        let BODYROW = []
        // const TABLEHEAD={
        //     borderTop: this.state.headBorderTop,
        //     borderRight: this.state.headBorderRight,
        //     borderBottom: this.state.headBorderBottom,
        //     borderLeft: this.state.headBorderLeft,
        //     border: this.state.headBorder,
        //     margin: this.state.headMargin,
        //     padding: this.state.headPadding,
        //     textAlign: 'center',
        //     width: this.state.headWidth,
        //     height: this.state.headHeight,
        
        // }

        const TABLEBODY={
            borderTop: this.state.dBorderTop,
            borderRight: this.state.dBorderRight,
            borderBottom: this.state.dBorderBottom,
            borderLeft: this.state.dBorderLeft,
            border: this.state.dBorder,
            margin: this.state.dMargin,
            padding: this.state.dPadding,
            textAlign: 'center',
            width: this.state.dWidth,
            height: this.state.dHeight,
            
        }
        const CHILDS = React.Children.count(this.props.children) === 0 ? '' : React.Children.toArray(this.props.children);
        if (CHILDS !== '') {
            tempBody = CHILDS.map((x, i, arr) => x);

            while (rows > 0) {
                var temperBody = tempBody.splice(0, this.state.columns);
                BODY = temperBody.map((x, i, arr) => {
                    return (
                        <td key={i} style={TABLEBODY}>
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
        // const TABLEHEAD={
        //     borderTop: this.state.headBorderTop,
        //     borderRight: this.state.headBorderRight,
        //     borderBottom: this.state.headBorderBottom,
        //     borderLeft: this.state.headBorderLeft,
        //     border: this.state.headBorder,
        //     margin: this.state.headMargin,
        //     padding: this.state.headPadding,
        //     textAlign: 'center',
        //     width: this.state.headWidth,
        //     height: this.state.headHeight,
        
        // }

        const TABLEBODY={
            borderTop: this.state.dBorderTop,
            borderRight: this.state.dBorderRight,
            borderBottom: this.state.dBorderBottom,
            borderLeft: this.state.dBorderLeft,
            border: this.state.dBorder,
            margin: this.state.dMargin,
            padding: this.state.dPadding,
            textAlign: 'center',
            width: this.state.dWidth,
            height: this.state.dHeight,
            
        }
        const CHILDS = React.Children.count(newProps.children) === 0 ? '' : React.Children.toArray(newProps.children);
        if (CHILDS !== '') {
            tempBody = CHILDS.map((x, i, arr) => x);

            while (rows > 0) {
                var temperBody = tempBody.splice(0, this.state.columns);
                BODY = temperBody.map((x, i, arr) => {
                    return (
                        <td key={i} style={TABLEBODY}>
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
            borderTop: this.state.tableBorderTop,
            borderRight: this.state.tableBorderRight,
            borderBottom: this.state.tableBorderBottom,
            borderLeft: this.state.tableBorderLeft,
            border: this.state.tableBorder,
            margin: this.state.tableMargin,
            padding: this.state.tablePadding,
            textAlign: 'center',
            width: this.state.tableWidth,
            height: this.state.tableHeight,
            borderCollapse: this.state.tableBorderCollapse,
            cursor: 'default',
        }

        const TABLERES={
            overflowX: 'auto',
        }
        return (
            <div style={TABLERES} id={this.state.mainId} className={this.state.mainClassName}>
                <table style={TABLESTYLE} id={this.state.tableId} className={` ${this.state.tableClassName}`}>
                    <tbody>
                        {this.state.body}
                    </tbody>
                </table>
            </div>
        )
    }
}