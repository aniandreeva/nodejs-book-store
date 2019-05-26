"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Book = _interopRequireDefault(require("../../models/Book"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var BookResolver = {
  Query: {
    book: function book(root, args) {
      return new Promise(function (resolve, reject) {
        _Book["default"].findOne(args).exec(function (err, res) {
          err ? reject(err) : resolve(res);
        });
      });
    },
    books: function books() {
      return new Promise(function (resolve, reject) {
        _Book["default"].find({}).populate().exec(function (err, res) {
          err ? reject(err) : resolve(res);
        });
      });
    }
  },
  Mutation: {
    addBook: function addBook(root, _ref) {
      var title = _ref.title,
          imageUrl = _ref.imageUrl,
          price = _ref.price,
          authorId = _ref.authorId,
          publisher = _ref.publisher;
      var book = new _Book["default"]({
        title: title,
        imageUrl: imageUrl,
        price: price,
        authorId: authorId,
        publisher: publisher
      });
      return new Promise(function (resolve, reject) {
        book.save(function (err, res) {
          err ? reject(err) : resolve(res);
        });
      });
    },
    editBook: function editBook(root, _ref2) {
      var _id = _ref2._id,
          title = _ref2.title,
          imageUrl = _ref2.imageUrl,
          price = _ref2.price,
          authorId = _ref2.authorId,
          publisher = _ref2.publisher;
      return new Promise(function (resolve, reject) {
        _Book["default"].findOneAndUpdate({
          _id: _id
        }, {
          $set: {
            title: title,
            imageUrl: imageUrl,
            price: price,
            authorId: authorId,
            publisher: publisher
          }
        }).exec(function (err, res) {
          err ? reject(err) : resolve(res);
        });
      });
    },
    deleteBook: function deleteBook(root, _ref3) {
      var _id = _ref3._id;
      return new Promise(function (resolve, reject) {
        _Book["default"].findByIdAndRemove({
          _id: _id
        }).exec(function (err, res) {
          err ? reject(err) : resolve(res);
        });
      });
    }
  }
};
var _default = BookResolver;
exports["default"] = _default;
//# sourceMappingURL=book-resover.js.map