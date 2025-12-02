"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCategoryController = void 0;
const CreateCategoryService_1 = require("../../services/category/CreateCategoryService");
class CreateCategoryController {
    async handle(req, res) {
        const { name } = req.body;
        const createCategoryService = new CreateCategoryService_1.CreateCategoryService();
        const category = await createCategoryService.execute({
            name
        });
        return res.json(category);
    }
}
exports.CreateCategoryController = CreateCategoryController;
