"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoveOrderController = void 0;
const RemoveOrderService_1 = require("../../services/order/RemoveOrderService");
class RemoveOrderController {
    async handle(req, res) {
        const order_id = req.query.order_id;
        const removeOrder = new RemoveOrderService_1.RemoveOrderService();
        const order = await removeOrder.execute({
            order_id
        });
        return res.json(order);
    }
}
exports.RemoveOrderController = RemoveOrderController;
