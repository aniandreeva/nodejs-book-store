"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Author = _interopRequireDefault(require("../../models/Author"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var AuthorResolver = {
  Query: {
    author: function author(root, args) {
      return new Promise(function (resolve, reject) {
        _Author["default"].findOne(args).exec(function (err, res) {
          err ? reject(err) : resolve(res);
        });
      });
    },
    authors: function authors() {
      return new Promise(function (resolve, reject) {
        _Author["default"].find({}).populate().exec(function (err, res) {
          err ? reject(err) : resolve(res);
        });
      });
    }
  },
  Mutation: {
    addAuthor: function addAuthor(root, _ref) {
      var name = _ref.name;
      var author = new _Author["default"]({
        name: name
      });
      return new Promise(function (resolve, reject) {
        author.save(function (err, res) {
          err ? reject(err) : resolve(res);
        });
      });
    },
    editAuthor: function editAuthor(root, _ref2) {
      var _id = _ref2._id,
          name = _ref2.name;
      return new Promise(function (resolve, reject) {
        _Author["default"].findOneAndUpdate({
          _id: _id
        }, {
          $set: {
            name: name
          }
        }).exec(function (err, res) {
          err ? reject(err) : resolve(res);
        });
      });
    },
    deleteAuthor: function deleteAuthor(root, _ref3) {
      var _id = _ref3._id;
      return new Promise(function (resolve, reject) {
        _Author["default"].findByIdAndRemove({
          _id: _id
        }).exec(function (err, res) {
          err ? reject(err) : resolve(res);
        });
      });
    }
  }
};
var _default = AuthorResolver;
exports["default"] = _default;
//# sourceMappingURL=author-resolver.js.map