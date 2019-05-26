"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Schema = _mongoose["default"].Schema;
var BookSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String
  },
  price: {
    type: Number,
    required: true
  },
  authorId: {
    type: String,
    required: true
  },
  publisher: {
    type: String,
    required: true
  }
});

var Book = _mongoose["default"].model("Book", BookSchema);

var _default = Book;
exports["default"] = _default;
//# sourceMappingURL=Book.js.map