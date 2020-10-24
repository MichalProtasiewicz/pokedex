"use strict";
exports.__esModule = true;
exports.fetchItems = void 0;
var axios_1 = require("axios");
exports.fetchItems = function (id) { return function (dispatch) {
    dispatch({ type: 'FETCH_REQUEST' });
    return axios_1["default"]
        .get("https://pokeapi.co/api/v2/pokemon/" + id)
        .then(function (payload) {
        dispatch({ type: 'FETCH_SUCCESS', payload: payload });
    })["catch"](function (error) {
        console.log(error);
        dispatch({ type: 'FETCH_FAILURE' });
    });
}; };
