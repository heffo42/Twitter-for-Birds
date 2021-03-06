'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Flashes = function (_Component) {
  _inherits(Flashes, _Component);

  function Flashes() {
    _classCallCheck(this, Flashes);

    return _possibleConstructorReturn(this, (Flashes.__proto__ || Object.getPrototypeOf(Flashes)).call(this));
  }

  _createClass(Flashes, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      // TODO: ultimate html structure will look like
      // <div>
      //  <div class="alert alert-danger">${message.toString()}. Click to dismiss.</div>
      //  <div class="alert alert-info">${message.toString()}. Click to dismiss.</div>
      //  ...
      // </div>


      var cells = this.props.messages.map(function (x, counter) {
        if (x.messageType === 'error') {
          return _react2.default.createElement(
            'div',
            { className: 'alert alert-danger', id: counter,
              onClick: function onClick() {
                return _this2.props.remove(counter);
              } },
            x.message.toString(),
            '. Click to dismiss.'
          );
        } else {
          return _react2.default.createElement(
            'div',
            { className: 'alert alert-info', id: counter,
              onClick: function onClick() {
                return _this2.props.remove(counter);
              } },
            x.message.toString(),
            '. Click to dismiss.'
          );
        }
      });

      return _react2.default.createElement(
        'div',
        null,
        cells
      );
    }
  }]);

  return Flashes;
}(_react.Component);

// TODO:  needs  to somehow listen to the state of messageReducer via its props.
// you could almost say you're mapping the state to props...

var mapStateToProps = function mapStateToProps(state) {
  console.log(state.messageReducer);
  return state.messageReducer;
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    remove: function remove(index) {
      return dispatch({
        type: 'DISMISS',
        index: index
      });
    }
  };
};

// TODO: map a prop `dispatch` that will dispatch an  action
// { type: 'DISMISS',  idx: someIndex }
// ultimate call to it should look like this.props.dismiss(idx)

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Flashes);