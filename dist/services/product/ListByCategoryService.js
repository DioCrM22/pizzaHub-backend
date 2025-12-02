"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListByCategoryService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class ListByCategoryService {
    async execute({ category_id }) {
        const findByCategory = await prisma_1.default.product.findMany({
            where: {
                category_id: category_id
            }
        });
        return findByCategory;
    }
}
exports.ListByCategoryService = ListByCategoryService;
