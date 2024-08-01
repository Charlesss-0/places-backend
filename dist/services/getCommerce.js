"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = getCommerce;
const axios_1 = __importDefault(require("axios"));
const options = {
    method: 'GET',
    url: 'https://api.foursquare.com/v3/places/search?query=food&ll=12.1113977%2C-85.3671936',
    headers: {
        accept: 'application/json',
        Authorization: 'fsq3YjRRvAD35EqkOWeEofk3wdzbXdRY+dEvAw0B7YlF6kY=',
    },
};
function getCommerce() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield axios_1.default.request(options);
            console.log(response.data);
            return response.data;
        }
        catch (error) {
            console.log('Unable to fetch data:', error);
            throw error;
        }
    });
}
