"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProductController = void 0;
const CreateProductService_1 = require("../../services/product/CreateProductService");
const cloudinary_1 = require("cloudinary");
cloudinary_1.v2.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET
});
class CreateProductController {
    async handle(req, res) {
        const { name, price, description, category_id } = req.body;
        const createProductService = new CreateProductService_1.CreateProductService();
        // Verificação mais robusta dos arquivos
        if (!req.files) {
            return res.status(400).json({ error: "No files uploaded" });
        }
        // Tipo seguro para acessar os arquivos
        const files = req.files;
        const file = files['file'];
        if (!file) {
            return res.status(400).json({ error: "No file with key 'file' found" });
        }
        // Se file for array, pegue o primeiro elemento
        const fileToUpload = Array.isArray(file) ? file[0] : file;
        try {
            const resultFile = await new Promise((resolve, reject) => {
                cloudinary_1.v2.uploader.upload_stream({}, (error, result) => {
                    if (error) {
                        reject(error);
                        return;
                    }
                    if (!result) {
                        reject(new Error('Upload failed: result is undefined'));
                        return;
                    }
                    resolve(result);
                }).end(fileToUpload.data);
            });
            const product = await createProductService.execute({
                name,
                price,
                description,
                banner: resultFile.url,
                category_id
            });
            return res.json(product);
        }
        catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
}
exports.CreateProductController = CreateProductController;
