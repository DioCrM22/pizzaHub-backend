"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCategoryService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class CreateCategoryService {
    async execute({ name }) {
        if (name === '') {
            throw new Error('Name invalid');
        }
        const category = await prisma_1.default.category.create({
            data: {
                name: name,
            },
            select: {
                id: true,
                name: true,
            }
        });
        return category;
    }
}
exports.CreateCategoryService = CreateCategoryService;
