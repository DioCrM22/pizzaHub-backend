"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddItemService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class AddItemService {
    async execute({ order_id, product_id, amount }) {
        const order = await prisma_1.default.item.create({
            data: {
                order_id: order_id,
                product_id: product_id,
                amount: amount
            }
        });
        return order;
    }
}
exports.AddItemService = AddItemService;
