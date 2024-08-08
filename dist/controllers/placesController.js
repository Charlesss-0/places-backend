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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTestData = getTestData;
exports.getPlaces = getPlaces;
const services_1 = require("../services");
function getTestData(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const data = (0, services_1.getQueryData)();
        res.send(data);
    });
}
function getPlaces(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { query, lat, lon, next } = req.query;
        if (!query || !lat || !lon) {
            return res.status(400).send({ error: 'Missing required parameters: query, lat, and lon' });
        }
        try {
            let result;
            if (next && next === 'true') {
                result = yield (0, services_1.getPlacesByQueryAndLocation)(query, lat, lon, 'true');
            }
            else {
                result = yield (0, services_1.getPlacesByQueryAndLocation)(query, lat, lon);
            }
            const { places, hasNextPage } = result;
            const placesWithPhotos = yield (0, services_1.getPlacesPhotos)(places);
            res.send({ places: placesWithPhotos, hasNextPage });
        }
        catch (error) {
            res.status(500).send({ error: 'Error fetching data from FSQ' });
        }
    });
}
