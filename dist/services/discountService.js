"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDiscountData = void 0;
const discounts = [
    { store: 'Store A', discount: '50% off' },
    { store: 'Store B', discount: 'Buy 1 Get 1 Free' },
    { store: 'Store C', discount: 'Get 80% off on your first purchase' },
    { store: 'Store D', discount: 'Buy two mocha coffee and get one for free' },
    { store: 'Store E', discount: 'Get 70% off on gaming headsets' },
];
const getDiscountData = () => {
    return discounts;
};
exports.getDiscountData = getDiscountData;
