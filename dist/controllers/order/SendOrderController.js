"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendOrderController = void 0;
const SendOrderService_1 = require("../../services/order/SendOrderService");
class SendOrderController {
    async handle(req, res) {
        const { order_id } = req.body;
        const sendOrder = new SendOrderService_1.SendOrderService();
        const order = await sendOrder.execute({
            order_id
        });
        return res.json(order);
    }
}
exports.SendOrderController = SendOrderController;
