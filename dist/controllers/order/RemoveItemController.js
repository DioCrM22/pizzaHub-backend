"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoveItemController = void 0;
const RemoveItemService_1 = require("../../services/order/RemoveItemService");
class RemoveItemController {
    async handle(req, res) {
        const item_id = req.query.item_id;
        const removeItemService = new RemoveItemService_1.RemoveItemService();
        const order = await removeItemService.execute({
            item_id
        });
        return res.json(order);
    }
}
exports.RemoveItemController = RemoveItemController;
