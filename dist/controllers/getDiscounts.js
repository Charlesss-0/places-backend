"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDiscounts = void 0;
const services_1 = require("../services");
const getDiscounts = (req, res) => {
    const discounts = (0, services_1.getDiscountData)();
    res.json(discounts);
};
exports.getDiscounts = getDiscounts;
