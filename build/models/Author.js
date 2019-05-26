"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _Book = _interopRequireDefault(require("./Book"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Schema = _mongoose["default"].Schema;
var AuthorSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  books: {
    type: [_Book["default"].schema]
  }
});

var Author = _mongoose["default"].model("Author", AuthorSchema);

var _default = Author;
exports["default"] = _default;
//# sourceMappingURL=Author.js.map