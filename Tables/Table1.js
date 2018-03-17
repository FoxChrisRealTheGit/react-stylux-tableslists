'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('../css/reset.css');

require('../css/animations.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Table1 = function (_Component) {
    _inherits(Table1, _Component);

    function Table1(props) {
        var _this$state;

        _classCallCheck(this, Table1);

        var _this = _possibleConstructorReturn(this, (Table1.__proto__ || Object.getPrototypeOf(Table1)).call(this, props));

        _this.state = (_this$state = {
            columns: props.columns || 3,
            rows: props.rows || 3,
            head: props.head,
            body: props.body,
            tableid: props.tableId,
            mainid: props.mainId,
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
            headBorderTop: props.hbordertop,
            headBorderRight: props.hborderRight,
            headBorderBottom: props.hborderBottom,
            headBorderLeft: props.hborderLeft,
            headBorder: props.hborder || '1px solid black',
            headVertical: props.hvertical || 'center',
            headWidth: props.headWidth,
            headHeight: props.headHeight,
            headMargin: props.headMargin,
            headPadding: props.headPadding || '5px',
            dBorderTop: props.dbordertop,
            dBorderRight: props.dborderRight,
            dBorderBottom: props.dborderBottom,
            dBorderLeft: props.dborderLeft,
            dBorder: props.dborder || '1px solid black'
        }, _defineProperty(_this$state, 'headVertical', props.headVertical || 'center'), _defineProperty(_this$state, 'dwidth', props.dwidth), _defineProperty(_this$state, 'dheight', props.dheight), _defineProperty(_this$state, 'dmargin', props.dmargin), _defineProperty(_this$state, 'dpadding', props.dpadding || '5px'), _defineProperty(_this$state, 'tableBorderTop', props.tbordertop), _defineProperty(_this$state, 'tableBorderRight', props.tborderRight), _defineProperty(_this$state, 'tableBorderBottom', props.tborderBottom), _defineProperty(_this$state, 'tableBorderLeft', props.tborderLeft), _defineProperty(_this$state, 'tableBorder', props.tborder || '1px solid black'), _defineProperty(_this$state, 'tableMargin', props.tmargin), _defineProperty(_this$state, 'tablePadding', props.tpadding), _defineProperty(_this$state, 'tableWidth', props.tableWidth), _defineProperty(_this$state, 'tableHeight', props.tableHeight), _defineProperty(_this$state, 'tableBorderCollapse', props.borderCollaspe || 'collapse'), _this$state);
        return _this;
    }

    _createClass(Table1, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var tempHead = [];
            var tempBody = [];
            var childs = [];
            var rows = this.state.rows;
            var HEADROW = void 0,
                HEAD = void 0,
                BODY = void 0;
            var BODYROW = [];

            var TABLEHEAD = {
                borderTop: this.state.headBorderTop,
                borderRight: this.state.headBorderRight,
                borderBottom: this.state.headBorderBottom,
                borderLeft: this.state.headBorderLeft,
                border: this.state.headBorder,
                margin: this.state.headMargin,
                padding: this.state.headPadding,
                textAlign: 'center',
                width: this.state.headWidth,
                height: this.state.headHeight

            };

            var TABLEBODY = {
                borderTop: this.state.dBorderTop,
                borderRight: this.state.dBorderRight,
                borderBottom: this.state.dBorderBottom,
                borderLeft: this.state.dBorderLeft,
                border: this.state.dBorder,
                margin: this.state.dMargin,
                padding: this.state.dPadding,
                textAlign: 'center',
                width: this.state.dWidth,
                height: this.state.dHeight

            };

            var CHILDS = _react2.default.Children.count(this.props.children) === 0 ? '' : _react2.default.Children.toArray(this.props.children);
            if (CHILDS !== '') {
                childs = CHILDS.map(function (x, i, arr) {
                    return x;
                });
                for (var b = 1; b <= this.state.columns; b += 1) {
                    tempHead.push(childs[b - 1]);
                }
                childs.splice(0, this.state.columns);
                //need to divide by this.state.columns and make rows here
                tempBody = childs.map(function (x, i, arr) {
                    return x;
                });
                while (rows > 0) {
                    if (rows === this.state.rows) {
                        HEAD = tempHead.map(function (x, i, arr) {
                            return _react2.default.createElement(
                                'th',
                                { key: i, style: TABLEHEAD },
                                x
                            );
                        });
                        HEADROW = _react2.default.createElement(
                            'tr',
                            null,
                            HEAD
                        );
                    } else {
                        var temperBody = tempBody.splice(0, this.state.columns);
                        BODY = temperBody.map(function (x, i, arr) {
                            return _react2.default.createElement(
                                'td',
                                { key: i, style: TABLEBODY },
                                x
                            );
                        });
                        BODYROW.push(_react2.default.createElement(
                            'tr',
                            { key: rows },
                            BODY
                        ));
                    }
                    rows -= 1;
                }
                this.setState({ head: HEADROW, body: BODYROW });
            }
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(newProps) {
            var tempHead = [];
            var tempBody = [];
            var childs = [];
            var rows = this.state.rows;
            var HEADROW = void 0,
                HEAD = void 0,
                BODY = void 0;
            var BODYROW = [];
            var TABLEHEAD = {
                borderTop: this.state.headBorderTop,
                borderRight: this.state.headBorderRight,
                borderBottom: this.state.headBorderBottom,
                borderLeft: this.state.headBorderLeft,
                border: this.state.headBorder,
                margin: this.state.headMargin,
                padding: this.state.headPadding,
                textAlign: 'center',
                width: this.state.headWidth,
                height: this.state.headHeight

            };

            var TABLEBODY = {
                borderTop: this.state.dBorderTop,
                borderRight: this.state.dBorderRight,
                borderBottom: this.state.dBorderBottom,
                borderLeft: this.state.dBorderLeft,
                border: this.state.dBorder,
                margin: this.state.dMargin,
                padding: this.state.dPadding,
                textAlign: 'center',
                width: this.state.dWidth,
                height: this.state.dHeight

            };
            var CHILDS = _react2.default.Children.count(newProps.children) === 0 ? '' : _react2.default.Children.toArray(newProps.children);
            if (CHILDS !== '') {
                childs = CHILDS.map(function (x, i, arr) {
                    return x;
                });
                for (var b = 1; b <= this.state.columns; b += 1) {
                    tempHead.push(childs[b - 1]);
                }
                childs.splice(0, this.state.columns);
                //need to divide by this.state.columns and make rows here
                tempBody = childs.map(function (x, i, arr) {
                    return x;
                });
                while (rows > 0) {
                    if (rows === this.state.rows) {
                        HEAD = tempHead.map(function (x, i, arr) {
                            return _react2.default.createElement(
                                'th',
                                { key: i, style: TABLEHEAD },
                                x
                            );
                        });
                        HEADROW = _react2.default.createElement(
                            'tr',
                            null,
                            HEAD
                        );
                    } else {
                        var temperBody = tempBody.splice(0, this.state.columns);
                        BODY = temperBody.map(function (x, i, arr) {
                            return _react2.default.createElement(
                                'td',
                                { key: i, style: TABLEBODY },
                                x
                            );
                        });
                        BODYROW.push(_react2.default.createElement(
                            'tr',
                            { key: rows },
                            BODY
                        ));
                    }
                    rows -= 1;
                }
                this.setState({ head: HEADROW, body: BODYROW });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var TABLESTYLE = {
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
                cursor: 'default'
            };

            var TABLERES = {
                overflowX: 'auto'
            };

            return _react2.default.createElement(
                'div',
                { style: TABLERES, id: this.state.mainId, className: this.state.mainClassName },
                _react2.default.createElement(
                    'table',
                    { style: TABLESTYLE, id: this.state.tableId, className: '' + this.state.tableClassName },
                    _react2.default.createElement(
                        'thead',
                        null,
                        this.state.head
                    ),
                    _react2.default.createElement(
                        'tbody',
                        null,
                        this.state.body
                    )
                )
            );
        }
    }]);

    return Table1;
}(_react.Component);

exports.default = Table1;