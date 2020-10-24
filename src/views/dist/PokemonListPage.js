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
require("./PokemonListPage.scss");
var react_redux_1 = require("react-redux");
var PokemonCard_1 = require("../components/PokemonCard");
function PokemonListPage(_a) {
    var pokemons = _a.pokemons;
    return (react_1["default"].createElement("div", { className: "grid" }, pokemons.map(function (pokemon) {
        return react_1["default"].createElement(PokemonCard_1["default"], __assign({ key: pokemon.id }, pokemon));
    })));
}
var mapStateToProps = function (_a) {
    var pokemons = _a.pokemons;
    return ({
        pokemons: pokemons
    });
};
exports["default"] = react_redux_1.connect(mapStateToProps)(PokemonListPage);
