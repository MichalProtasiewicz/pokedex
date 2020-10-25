"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var actions_1 = require("../actions");
var react_router_dom_1 = require("react-router-dom");
var PokemonListPage_1 = require("./PokemonListPage");
var DetailsPage_1 = require("./DetailsPage");
var LoginPage_1 = require("./LoginPage");
var Root = function (_a) {
    var fetchPokemon = _a.fetchPokemon;
    react_1.useEffect(function () {
        for (var i = 1; i <= 151; i++) {
            fetchPokemon(i);
        }
    }, []);
    return (react_1["default"].createElement(react_router_dom_1.BrowserRouter, null,
        react_1["default"].createElement(react_router_dom_1.Switch, null,
            react_1["default"].createElement(react_router_dom_1.Route, { exact: true, path: '/', component: PokemonListPage_1["default"] }),
            react_1["default"].createElement(react_router_dom_1.Route, { exact: true, path: '/login', component: LoginPage_1["default"] }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: '/:id', component: DetailsPage_1["default"] }))));
};
var mapDispatchToProps = function (dispatch) { return ({
    fetchPokemon: function (id) { return dispatch(actions_1.fetchItems(id)); }
}); };
exports["default"] = react_redux_1.connect(null, mapDispatchToProps)(Root);
