"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCommerce = exports.getDiscountData = void 0;
const getCommerce_1 = __importDefault(require("./getCommerce"));
exports.getCommerce = getCommerce_1.default;
const discountService_1 = require("./discountService");
Object.defineProperty(exports, "getDiscountData", { enumerable: true, get: function () { return discountService_1.getDiscountData; } });
