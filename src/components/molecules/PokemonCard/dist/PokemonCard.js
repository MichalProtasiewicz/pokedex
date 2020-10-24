"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./PokemonCard.scss");
var react_router_dom_1 = require("react-router-dom");
var PokemonCard = function (_a) {
    var id = _a.id, name = _a.name, weight = _a.weight, height = _a.height, types = _a.types, sprites = _a.sprites;
    return (react_1["default"].createElement("div", { className: "card" },
        react_1["default"].createElement("img", { src: sprites.front_default }),
        react_1["default"].createElement("span", { style: { fontWeight: 'bold' } },
            "#",
            id,
            " ",
            name),
        react_1["default"].createElement("span", null,
            "TYPE: ",
            types[0].type.name,
            " ",
            (types[1]) ? (react_1["default"].createElement(react_1["default"].Fragment, null, types[1].type.name)) : (null),
            " "),
        react_1["default"].createElement("span", null,
            "height: ",
            height,
            " weight: ",
            weight),
        react_1["default"].createElement(react_router_dom_1.Link, { to: { pathname: "/" + id } }, "Details")));
};
exports["default"] = PokemonCard;
