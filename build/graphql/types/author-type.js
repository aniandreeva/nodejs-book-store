"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = "\n\n    type Author {\n        _id: String!,\n        name: String!,\n        books: [Book]\n    }\n\n    type Query {\n        author(_id: String!): Author\n        authors: [Author]\n    }\n\n    type Mutation {\n        addAuthor(name: String!): Author\n        editAuthor(_id: String!, name: String!): Author\n        deleteAuthor(_id: String!): Author\n    }\n";
exports["default"] = _default;
//# sourceMappingURL=author-type.js.map