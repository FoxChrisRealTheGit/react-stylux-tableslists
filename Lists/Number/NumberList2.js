'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('../../css/SuperStyleSheet.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NumberList2 = function (_Component) {
    _inherits(NumberList2, _Component);

    function NumberList2(props) {
        _classCallCheck(this, NumberList2);

        var _this = _possibleConstructorReturn(this, (NumberList2.__proto__ || Object.getPrototypeOf(NumberList2)).call(this, props));

        _this.state = {
            listAmount: props.listAmount || '1',
            listItem: [],
            id: props.id,
            className: props.className

        };
        return _this;
    }

    _createClass(NumberList2, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var listItems = [];
            var nestedItems = [];
            var CHILDS = _react2.default.Children.toArray(this.props.children);
            var tempItems = CHILDS.map(function (x) {
                return x;
            });
            for (var q = 0; q < CHILDS.length; q += +this.state.listAmount) {
                for (var w = 0; w < +this.state.listAmount; w += 1) {
                    nestedItems.push(tempItems[w]);
                }
                listItems.push(nestedItems);
                nestedItems = [];
                tempItems.splice(0, this.state.listAmount);
            }
            this.setState({ listItem: listItems });
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(newProps) {
            var listItems = [];
            var nestedItems = [];
            var CHILDS = _react2.default.Children.toArray(newProps.children);
            var tempItems = CHILDS.map(function (x) {
                return x;
            });
            for (var q = 0; q < CHILDS.length; q += +this.state.listAmount) {
                for (var w = 0; w < +this.state.listAmount; w += 1) {
                    nestedItems.push(tempItems[w]);
                }
                listItems.push(nestedItems);
                nestedItems = [];
                tempItems.splice(0, this.state.listAmount);
            }
            this.setState({ listItem: listItems });
        }
    }, {
        key: 'render',
        value: function render() {
            var LISTSTYLE = {
                color: this.state.color,
                fontFamily: this.state.fontFamily,
                fontSize: this.state.fontSize,
                lineHeight: this.state.lineHeight,
                fontWeight: this.state.fontWeight,
                paddingLeft: this.state.paddingLeft,
                position: 'relative'

            };
            var LISTITEMSTYLE = {
                paddingLeft: '70px',
                counterIncrement: 'aCounter'

            };
            var LIST = this.state.listItem.map(function (x, i) {
                return _react2.default.createElement(
                    'li',
                    { key: i, style: LISTITEMSTYLE },
                    x
                );
            });
            return _react2.default.createElement(
                'ol',
                { style: LISTSTYLE, id: this.state.id, className: 'bigList ' + this.state.className },
                LIST
            );
        }
    }]);

    return NumberList2;
}(_react.Component);

exports.default = NumberList2;