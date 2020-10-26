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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.pokemonsReducer = void 0;
var initialState = {
    pokemons: [],
    pokemon: Object
};
exports.pokemonsReducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case 'FETCH_REQUEST':
            return __assign(__assign({}, state), { isLoading: true });
        case 'FETCH_SUCCESS':
            return __assign(__assign({}, state), { isLoading: false, pokemons: __spreadArrays(state.pokemons, [action.payload.data]).sort(function (a, b) { return (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0); }) });
        default:
            return state;
    }
};
