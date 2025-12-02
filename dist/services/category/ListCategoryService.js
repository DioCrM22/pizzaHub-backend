"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListCategoryService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class ListCategoryService {
    async execute() {
        const category = await prisma_1.default.category.findMany({
            select: {
                id: true,
                name: true,
            }
        });
        return category;
    }
}
exports.ListCategoryService = ListCategoryService;
