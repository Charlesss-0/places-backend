"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = configureWebSocket;
const services_1 = require("../services");
function configureWebSocket(wss) {
    const placesData = (0, services_1.getQueryData)();
    const broadcast = (data) => {
        wss.clients.forEach(client => {
            if (client.readyState === 1) {
                client.send(JSON.stringify(data));
            }
        });
    };
    wss.on('connection', ws => {
        ws.send(JSON.stringify(placesData));
        ws.on('message', msg => {
            broadcast(msg);
        });
        ws.on('close', () => {
            console.log('Client disconnected');
        });
    });
}
