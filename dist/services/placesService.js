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
exports.getQueryData = void 0;
exports.getPlacesByQueryAndLocation = getPlacesByQueryAndLocation;
exports.getPlacesPhotos = getPlacesPhotos;
const axios_1 = __importDefault(require("axios"));
const utils_1 = require("../utils");
const data = [
    {
        fsq_id: '4caf707c5430b713455f3616',
        name: 'Casa del Café',
        distance: 74,
        categories: [
            {
                name: 'Coffee Shop',
            },
        ],
        closed_bucket: 'VeryLikelyOpen',
        location: {
            address: 'Metrocentro',
        },
        photos: [
            'https://fastly.4sqi.net/img/general/original/1377388593_fdKBZh2Xr95JKPFgMUqLNwtqfM_F1kDcZp74zneEbZQ.jpg',
        ],
    },
    {
        fsq_id: '536bd0f7498eb423d91b9823',
        name: 'El Molino Coffee Shop',
        distance: 239,
        categories: [
            {
                name: 'Breakfast Spot',
            },
        ],
        closed_bucket: 'VeryLikelyOpen',
        location: {
            address: 'Rotonda Rubén Darío 1 cuadra al Oeste 1 cuadra al Sur.',
        },
        photos: [
            'https://fastly.4sqi.net/img/general/original/93923848_CFqIRQv4OqJQ4Xxhxoe8wIoqm-MdVUvakmu2EiPyVIg.jpg',
        ],
    },
    {
        fsq_id: '546a43f8498ea22120c14045',
        name: 'Café Delicias de la Montaña',
        distance: 360,
        categories: [
            {
                name: 'Café',
            },
        ],
        closed_bucket: 'VeryLikelyOpen',
        location: {
            address: 'Al Lado Opuesto Del Restaurante Summer',
        },
        photos: [
            'https://fastly.4sqi.net/img/general/original/2522769_L47csBmlX0wHBpckEwij_e0JJC_gkAnOex1GpNYzlss.jpg',
        ],
    },
    {
        fsq_id: '559a9ae3498eb21ce6b8879b',
        name: 'La Casa Del Café UCA',
        distance: 470,
        categories: [
            {
                name: 'College Cafeteria',
            },
        ],
        closed_bucket: 'VeryLikelyOpen',
        location: {
            address: null,
        },
        photos: [
            'https://fastly.4sqi.net/img/general/original/24819816_y5G8wj5FSIQWlkv05BxYRCUGhxtHObVJIKtyUTBVG_M.jpg',
        ],
    },
    {
        fsq_id: '4b634f60f964a5204d712ae3',
        name: 'Casa del Café',
        distance: 1054,
        categories: [
            {
                name: 'Coffee Shop',
            },
        ],
        closed_bucket: 'VeryLikelyOpen',
        location: {
            address: 'Planes de Altamira',
        },
        photos: [
            'https://fastly.4sqi.net/img/general/original/42579198_TpAKFv01F2fW462Eeb3X1uWsyOgxE7LOAHdrVs8mKJo.jpg',
        ],
    },
    {
        fsq_id: '4bb9e49f935e952118762790',
        name: 'Pasteleria Sampson',
        distance: 1119,
        categories: [
            {
                name: 'Bakery',
            },
        ],
        closed_bucket: 'LikelyOpen',
        location: {
            address: 'Planes de Altamira I Etapa, Nro. 23 Managua, 14034',
        },
        photos: [
            'https://fastly.4sqi.net/img/general/original/474931305_S5WCC4Azgb1Dh-JaSBUxmDsVnuFEtVzIavoJ_QKsNHU.jpg',
        ],
    },
    {
        fsq_id: '51385f1be4b09f62137f9cb7',
        name: 'Cafeteria Hospital Militar',
        distance: 1524,
        categories: [
            {
                name: 'Coffee Shop',
            },
        ],
        closed_bucket: 'LikelyOpen',
        location: {
            address: null,
        },
        photos: [
            'https://fastly.4sqi.net/img/general/original/120770921_BHJRamX3UrN5TE-zRe1YenB2yrNhcf7PWCKc_mABdXg.jpg',
        ],
    },
    {
        fsq_id: '5119350fe4b03863d3b09c0b',
        name: 'Casa del Café',
        distance: 1791,
        categories: [
            {
                name: 'Café',
            },
        ],
        closed_bucket: 'VeryLikelyOpen',
        location: {
            address: 'Plaza España',
        },
        photos: [
            'https://fastly.4sqi.net/img/general/original/474931305_hDEzpda5NfRm_vGxb5iibWBXztLGCRyRTWwe2hwxiWE.jpg',
        ],
    },
    {
        fsq_id: '54f9b5be498ebbdbf542d6ef',
        name: 'Café Las Flores Plaza España',
        distance: 2011,
        categories: [
            {
                name: 'Coffee Shop',
            },
        ],
        closed_bucket: 'LikelyOpen',
        location: {
            address: 'Plaza España',
        },
        photos: [
            'https://fastly.4sqi.net/img/general/original/148858095_5pznUTqGqCDwcPelyria2t0McRs-gl4Af1CirH_eA2M.jpg',
        ],
    },
    {
        fsq_id: '5269267911d2c0b9c14de0af',
        name: 'Cafetin Flor de Jinotega',
        distance: 2136,
        categories: [
            {
                name: 'Coffee Shop',
            },
        ],
        closed_bucket: 'LikelyOpen',
        location: {
            address: null,
        },
        photos: [
            'https://fastly.4sqi.net/img/general/original/148858095_RxMppz_es2LB8LmolTrWG0SdQZpK6u9pjF4MePiwNSo.jpg',
        ],
    },
    {
        fsq_id: '54c57e55498e753931b804b1',
        name: 'La Casona del Café',
        distance: 2446,
        categories: [
            {
                name: 'Coffee Shop',
            },
        ],
        closed_bucket: 'VeryLikelyOpen',
        location: {
            address: 'Sobre la avenida de Bolívar a Chávez',
        },
        photos: [
            'https://fastly.4sqi.net/img/general/original/428500608_xcze6stPN--sotTrjWUMiy-qk5As7P5PbcRXQ8YPV20.jpg',
        ],
    },
    {
        fsq_id: '5053db23e4b07ba3e600f720',
        name: 'Café Las Flores',
        distance: 2652,
        categories: [
            {
                name: 'Café',
            },
        ],
        closed_bucket: 'VeryLikelyOpen',
        location: {
            address: 'Carretera a Masaya Km 6.5 - Plaza Santo Domingo Modulo B',
        },
        photos: [
            'https://fastly.4sqi.net/img/general/original/23625914_06e5AtzLFoaandyInEmm4XNEPujYzUSfXAVxmpVWs0w.jpg',
        ],
    },
    {
        fsq_id: '4fcaa6c1e4b026db02f1492c',
        name: 'Dulce Dolche',
        distance: 2952,
        categories: [
            {
                name: 'Cupcake Shop',
            },
        ],
        closed_bucket: 'VeryLikelyOpen',
        location: {
            address: 'Centro Comercial El Tiangue',
        },
        photos: [
            'https://fastly.4sqi.net/img/general/original/23625914_EzOWoyYPFTyYORiUF41jKDcvIAlgZdbuoVt17d8Nxqw.jpg',
        ],
    },
    {
        fsq_id: '4c13c91877cea593726ccf60',
        name: 'Zacate Limon',
        distance: 2969,
        categories: [
            {
                name: 'Coffee Shop',
            },
        ],
        closed_bucket: 'VeryLikelyOpen',
        location: {
            address: 'Jean Paul Genie',
        },
        photos: [
            'https://fastly.4sqi.net/img/general/original/547042396_PcKABMjwaQ1sY83z1yg1NiLS-BYotZC9LEYZL9xc5Sg.jpg',
        ],
    },
    {
        fsq_id: '589dd3c003e29a66d9d29cda',
        name: 'Casa Del Café',
        distance: 2970,
        categories: [
            {
                name: 'Coffee Shop',
            },
        ],
        closed_bucket: 'VeryLikelyOpen',
        location: {
            address: 'Pista Jean Paul Genie. Contiguo Hotel Holiday Inn Express',
        },
        photos: [
            'https://fastly.4sqi.net/img/general/original/547042396_Zxxx7KVeD5RAm4mRsOPDMucCvkaSfeKeuJUDz9QfwwA.jpg',
        ],
    },
    {
        fsq_id: '541dc338498e2f982d244904',
        name: 'Leche Agria La Casita',
        distance: 3052,
        categories: [
            {
                name: 'Coffee Shop',
            },
        ],
        closed_bucket: 'VeryLikelyOpen',
        location: {
            address: null,
        },
        photos: [],
    },
    {
        fsq_id: '59863cfe16ef675760b521cf',
        name: 'Nicas Coffee Experience',
        distance: 3096,
        categories: [
            {
                name: 'Coffee Shop',
            },
        ],
        closed_bucket: 'VeryLikelyOpen',
        location: {
            address: null,
        },
        photos: [
            'https://fastly.4sqi.net/img/general/original/27832786_4LLa0VdZIMq5bK_m0kVwAnwXoIsWIuAgjBsckpjZzBw.jpg',
        ],
    },
    {
        fsq_id: '56ef0342cd10c4efe51fe981',
        name: 'Café Las Flores',
        distance: 3150,
        categories: [
            {
                name: 'Café',
            },
        ],
        closed_bucket: 'VeryLikelyOpen',
        location: {
            address: 'Galerías Santo Domingo',
        },
        photos: [
            'https://fastly.4sqi.net/img/general/original/46250180_lQaC82qaPw_CwndCSp0npdta-FvcGj9Z9uuvkCdlb8Q.jpg',
        ],
    },
    {
        fsq_id: '4fd269b8e4b0ebfb51007f54',
        name: 'Espresso Americano',
        distance: 3272,
        categories: [
            {
                name: 'Snack Place',
            },
        ],
        closed_bucket: 'LikelyOpen',
        location: {
            address: 'Galerías Santo Domingo',
        },
        photos: [
            'https://fastly.4sqi.net/img/general/original/187396049_UG4S-fVHQqc9_GS4SJahyWZa8s-rMmsxNkNd4DsYErM.jpg',
        ],
    },
    {
        fsq_id: '4bd371d49854d13a3dd7fd4d',
        name: 'Casa Del Café',
        distance: 3291,
        categories: [
            {
                name: 'Café',
            },
        ],
        closed_bucket: 'VeryLikelyOpen',
        location: {
            address: 'Galerías Sto. Domingo',
        },
        photos: [
            'https://fastly.4sqi.net/img/general/original/46250180_mbvANSWpYmCAgfueF4djRa8D62KErRzmry7pzP7ovdI.jpg',
        ],
    },
];
(function (data) {
    return data.sort((a, b) => a.distance - b.distance);
})(data);
const getQueryData = () => {
    return data;
};
exports.getQueryData = getQueryData;
// global variable to store the next link request
let nextLink = null;
// request the list of places based on the query and user's location
function getPlacesByQueryAndLocation(query_1, lat_1, lon_1) {
    return __awaiter(this, arguments, void 0, function* (query, lat, lon, next = 'false') {
        try {
            let response;
            if (next === 'true') {
                if (!nextLink) {
                    return { places: [], hasNextPage: null };
                }
                response = yield axios_1.default.get(nextLink, {
                    headers: {
                        Accept: 'application/json',
                        Authorization: process.env.FSQ_API_TOKEN,
                    },
                });
            }
            else {
                response = yield axios_1.default.get('https://api.foursquare.com/v3/places/search', {
                    headers: {
                        Accept: 'application/json',
                        Authorization: process.env.FSQ_API_TOKEN,
                    },
                    params: {
                        query: query,
                        ll: `${lat},${lon}`,
                        radius: 22000,
                        limit: 5,
                        sort: 'DISTANCE',
                    },
                });
            }
            const linkHeader = response.headers.link;
            if (linkHeader) {
                const match = linkHeader.match(/<([^>]+)>;\s*rel="next"/);
                nextLink = match ? match[1] : null;
            }
            else {
                nextLink = null;
            }
            const formattedPlaces = response.data.results.map((result) => {
                var _a;
                return ({
                    fsq_id: result.fsq_id,
                    name: result.name,
                    distance: result.distance,
                    categories: {
                        name: (_a = result.categories[0]) === null || _a === void 0 ? void 0 : _a.name,
                    },
                    closed_bucket: result.closed_bucket,
                    location: {
                        address: result.location.address,
                    },
                });
            });
            return { places: formattedPlaces, hasNextPage: nextLink !== null };
        }
        catch (error) {
            utils_1.logger.error(`Error fetching places: ${error.message}`);
            throw new Error('Failed to fetch places data');
        }
    });
}
// use fsq_id to get photos of each place
function getPlacesPhotos(places) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const placesWithPhotos = yield Promise.all(places.map((place) => __awaiter(this, void 0, void 0, function* () {
                try {
                    const response = yield axios_1.default.get(`https://api.foursquare.com/v3/places/${place.fsq_id}/photos`, {
                        headers: {
                            Accept: 'application/json',
                            Authorization: process.env.FSQ_API_TOKEN,
                        },
                    });
                    const photosData = response.data;
                    if (!photosData.length) {
                        utils_1.logger.warn(`No photos found for place ${place.fsq_id}`);
                        return Object.assign(Object.assign({}, place), { photos: null });
                    }
                    const formattedPhotos = photosData.map((photo) => {
                        return `${photo.prefix}original${photo.suffix}`;
                    });
                    return Object.assign(Object.assign({}, place), { photos: formattedPhotos });
                }
                catch (error) {
                    utils_1.logger.error(`Error fetching photos: ${error.message}`);
                    return Object.assign(Object.assign({}, place), { photos: null });
                }
            })));
            return placesWithPhotos;
        }
        catch (error) {
            utils_1.logger.error(`Error processing places: ${error.message}`);
            throw new Error('Failed to process places photos');
        }
    });
}
