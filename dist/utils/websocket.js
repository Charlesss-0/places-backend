"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = configureWebSocket;
const services_1 = require("../services");
function configureWebSocket(wss) {
    const discounts = (0, services_1.getDiscountData)();
    const broadcast = (data) => {
        wss.clients.forEach(client => {
            if (client.readyState === 1) {
                client.send(JSON.stringify(data));
            }
        });
    };
    wss.on('connection', ws => {
        ws.send(JSON.stringify(discounts));
        ws.on('message', msg => {
            broadcast(msg);
        });
        ws.on('close', () => {
            console.log('Client disconnected');
        });
    });
}
