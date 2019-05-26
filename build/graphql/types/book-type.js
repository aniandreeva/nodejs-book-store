"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = "\n\n    input BookInput {\n        _id: String!,\n        title: String!,\n        imageUrl: String,\n        price: Int!,\n        authorId: String!,\n        publisher: String!\n    }\n\n    type Book {\n        _id: String!,\n        title: String!,\n        imageUrl: String,\n        price: Int!,\n        authorId: String!,\n        publisher: String!\n    }\n\n    type Query {\n        book(_id: String!): Book\n        books: [Book]\n    }\n\n    type Mutation {\n        addBook(title: String!, imageUrl: String, price: Int!, authorId: String!, publisher:  String!): Book\n        editBook(_id: String!, title: String!, imageUrl: String, price: Int!, authorId: String!, publisher:  String!): Book\n        deleteBook(_id: String!): Book\n    }\n";
exports["default"] = _default;
//# sourceMappingURL=book-type.js.map