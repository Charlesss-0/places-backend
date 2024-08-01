"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = handlePlaceRequest;
const services_1 = require("../services");
function handlePlaceRequest(req, res) {
    const commerceInfo = (0, services_1.getCommerce)();
    res.json(commerceInfo);
}
