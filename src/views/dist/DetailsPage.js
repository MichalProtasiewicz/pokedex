"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var react_router_dom_1 = require("react-router-dom");
var DetailsPage = function (_a) {
    var pokemons = _a.pokemons;
    var id = react_router_dom_1.useParams().id;
    var pokemon = pokemons.find(function (x) { return x.id == id || x.name == id; });
    return (react_1["default"].createElement("div", { className: "card" }, pokemon ? (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("img", { src: pokemon.sprites.front_default }),
        react_1["default"].createElement("span", { style: { fontWeight: 'bold' } },
            "#",
            pokemon.id,
            " ",
            pokemon.name),
        react_1["default"].createElement("span", null,
            "TYPE: ",
            pokemon.types[0].type.name,
            " ",
            (pokemon.types[1]) ? (react_1["default"].createElement(react_1["default"].Fragment, null, pokemon.types[1].type.name)) : (null),
            " "),
        react_1["default"].createElement("span", null,
            "height: ",
            pokemon.height,
            " weight: ",
            pokemon.weight),
        react_1["default"].createElement("span", null, "Stats:"),
        react_1["default"].createElement("span", null,
            "Health: ",
            pokemon.stats[0].base_stat,
            " Attack: ",
            pokemon.stats[1].base_stat),
        react_1["default"].createElement("span", null,
            "Defense: ",
            pokemon.stats[2].base_stat,
            " Sp.Attack: ",
            pokemon.stats[3].base_stat),
        react_1["default"].createElement("span", null,
            "Sp.Deffence: ",
            pokemon.stats[4].base_stat,
            " Speed: ",
            pokemon.stats[5].base_stat))) : (null)));
};
var mapStateToProps = function (_a) {
    var pokemons = _a.pokemons;
    return ({
        pokemons: pokemons
    });
};
exports["default"] = react_redux_1.connect(mapStateToProps)(DetailsPage);
