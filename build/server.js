"use strict";

var _express = _interopRequireDefault(require("express"));

var _expressGraphql = _interopRequireDefault(require("express-graphql"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _cors = _interopRequireDefault(require("cors"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _graphql = _interopRequireDefault(require("./graphql/"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_dotenv["default"].config();

var app = (0, _express["default"])();
var PORT = process.env.PORT || "3000";
var db = process.env.MONGODB_URL;

_mongoose["default"].connect(db).then(function () {
  console.log('connected to MongoDB');
})["catch"](function (error) {
  return console.log(error);
});

app.use("/graphql", (0, _cors["default"])(), _bodyParser["default"].json(), (0, _expressGraphql["default"])({
  schema: _graphql["default"],
  graphiql: true
}));
app.listen(PORT, function () {
  console.log("Server running at ".concat(PORT));
});
//# sourceMappingURL=server.js.map