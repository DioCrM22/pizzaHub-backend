"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProductService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class CreateProductService {
    async execute({ name, price, description, banner, category_id }) {
        const product = await prisma_1.default.product.create({
            data: {
                name: name,
                price: price,
                description: description,
                banner: banner,
                category_id: category_id
            }
        });
        return product;
    }
}
exports.CreateProductService = CreateProductService;
