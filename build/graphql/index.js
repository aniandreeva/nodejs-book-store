"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _graphqlTools = require("graphql-tools");

var _mergeGraphqlSchemas = require("merge-graphql-schemas");

var _authorType = _interopRequireDefault(require("./types/author-type"));

var _bookType = _interopRequireDefault(require("./types/book-type"));

var _authorResolver = _interopRequireDefault(require("./resolvers/author-resolver"));

var _bookResover = _interopRequireDefault(require("./resolvers/book-resover"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var typeDefs = (0, _mergeGraphqlSchemas.mergeTypes)([_authorType["default"], _bookType["default"]]);
var resolvers = (0, _mergeGraphqlSchemas.mergeResolvers)([_authorResolver["default"], _bookResover["default"]]);
var schema = (0, _graphqlTools.makeExecutableSchema)({
  typeDefs: typeDefs,
  resolvers: resolvers
});
var _default = schema;
exports["default"] = _default;
//# sourceMappingURL=index.js.map