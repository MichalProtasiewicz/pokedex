"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var react_router_dom_1 = require("react-router-dom");
var PokemonCard_1 = require("../components/PokemonCard");
function PokemonListPage(_a) {
    var pokemons = _a.pokemons;
    var _b = react_1.useState(""), searchText = _b[0], setSearchText = _b[1];
    var results = !searchText
        ? pokemons
        : pokemons.filter(function (pokemon) {
            return pokemon.name.toLowerCase().includes(searchText.toLocaleLowerCase()) ||
                pokemon.id.toString().includes(searchText) ||
                pokemon.types[0].type.name.toLowerCase().includes(searchText.toLocaleLowerCase()) ||
                (pokemon.types[1]) && (pokemon.types[1].type.name.toLowerCase().includes(searchText.toLocaleLowerCase()));
        });
    var handleChange = function (e) {
        setSearchText(e.target.value);
    };
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("h1", null, "Pokemon List"),
        react_1["default"].createElement(react_router_dom_1.Link, { className: 'button', to: '/login', onClick: function () { return localStorage.removeItem('user'); } }, "Logout"),
        react_1["default"].createElement("p", null, "You can search pokemons by name, id or type."),
        react_1["default"].createElement("input", { type: "text", placeholder: "Search...", value: searchText, onChange: handleChange }),
        react_1["default"].createElement("div", { className: "grid" }, results.map(function (pokemon) {
            return react_1["default"].createElement(PokemonCard_1["default"], __assign({ key: pokemon.id }, pokemon));
        }))));
}
var mapStateToProps = function (_a) {
    var pokemons = _a.pokemons;
    return ({
        pokemons: pokemons
    });
};
exports["default"] = react_redux_1.connect(mapStateToProps)(PokemonListPage);
