"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendOrderService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class SendOrderService {
    async execute({ order_id }) {
        const order = await prisma_1.default.order.update({
            where: {
                id: order_id
            },
            data: {
                draft: false
            }
        });
        return order;
    }
}
exports.SendOrderService = SendOrderService;
