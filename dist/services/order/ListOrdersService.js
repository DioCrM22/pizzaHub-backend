"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListOrdersService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class ListOrdersService {
    async execute() {
        const orders = await prisma_1.default.order.findMany({
            where: {
                draft: false,
                status: false
            },
            orderBy: {
                created_at: 'desc'
            }
        });
        return orders;
    }
}
exports.ListOrdersService = ListOrdersService;
