"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
function LoginPage() {
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("h1", null, "Login Page"),
        react_1["default"].createElement(react_router_dom_1.Link, { className: 'button', to: '/', onClick: function () { return localStorage.setItem('user', 'user'); } }, "Click here to login")));
}
exports["default"] = LoginPage;
