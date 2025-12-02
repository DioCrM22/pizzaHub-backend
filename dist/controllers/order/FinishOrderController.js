"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FinishOrderController = void 0;
const FinishOrderService_1 = require("../../services/order/FinishOrderService");
class FinishOrderController {
    async handle(req, res) {
        const { order_id } = req.body;
        const finishOrderService = new FinishOrderService_1.FinishOrderService();
        const order = await finishOrderService.execute({
            order_id
        });
        return res.json(order);
    }
}
exports.FinishOrderController = FinishOrderController;
