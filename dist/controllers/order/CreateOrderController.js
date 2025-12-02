"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOrderController = void 0;
const CreateOrderService_1 = require("../../services/order/CreateOrderService");
class CreateOrderController {
    async handle(req, res) {
        const { table, name } = req.body;
        const createOrderService = new CreateOrderService_1.CreateOrderService();
        const order = await createOrderService.execute({
            table,
            name
        });
        return res.json(order);
    }
}
exports.CreateOrderController = CreateOrderController;
