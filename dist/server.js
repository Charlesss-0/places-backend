"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const ws_1 = require("ws");
const utils_1 = require("./utils");
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const routes_1 = require("./routes");
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
app.use('/places/search', routes_1.placesRouter);
const server = http_1.default.createServer(app);
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
const wss = new ws_1.WebSocketServer({ server });
(0, utils_1.configureWebSocket)(wss);
