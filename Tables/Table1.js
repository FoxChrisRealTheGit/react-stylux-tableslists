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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Table1 = function (_Component) {
    _inherits(Table1, _Component);

    function Table1(props) {
        _classCallCheck(this, Table1);

        var _this = _possibleConstructorReturn(this, (Table1.__proto__ || Object.getPrototypeOf(Table1)).call(this, props));

        _this.state = {
            columns: props.columns || 3,
            rows: props.rows || 3,
            head: props.head,
            body: props.body,
            tableid: props.tableId,
            mainid: props.mainId,
            mainClassName: props.mainClassName,
            tableClassName: props.tableClassName
        };
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
            var CHILDS = _react2.default.Children.count(this.props.children) === 0 ? '' : _react2.default.Children.toArray(this.props.children.split('\\'));
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
                                { key: i },
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
                                { key: i },
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
            var CHILDS = _react2.default.Children.count(newProps.children) === 0 ? '' : _react2.default.Children.toArray(newProps.children.split('\\'));
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
                                { key: i },
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
                                { key: i },
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
            var TABLESTYLE = {};

            return _react2.default.createElement(
                'div',
                { id: this.state.mainId, className: this.state.mainClassName },
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