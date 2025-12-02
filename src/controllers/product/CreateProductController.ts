import {Request, Response } from 'express'
import { CreateProductService } from '../../services/product/CreateProductService'
import { UploadedFile } from 'express-fileupload'

import { v2 as cloudinary, UploadApiResponse } from 'cloudinary'

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET
})

class CreateProductController {
  async handle(req: Request, res: Response) {
    const { name, price, description, category_id } = req.body
    const createProductService = new CreateProductService()

    // Verificação mais robusta dos arquivos
    if (!req.files) {
      return res.status(400).json({ error: "No files uploaded" })
    }

    // Tipo seguro para acessar os arquivos
    const files = req.files as any
    const file: UploadedFile = files['file'] as UploadedFile

    if (!file) {
      return res.status(400).json({ error: "No file with key 'file' found" })
    }

    // Se file for array, pegue o primeiro elemento
    const fileToUpload = Array.isArray(file) ? file[0] : file

    try {
      const resultFile: UploadApiResponse = await new Promise((resolve, reject) => {
        cloudinary.uploader.upload_stream({}, (error, result) => {
          if (error) {
            reject(error)
            return
          }
          
          if (!result) {
            reject(new Error('Upload failed: result is undefined'))
            return
          }
          
          resolve(result)
        }).end(fileToUpload.data)
      })

      const product = await createProductService.execute({
        name,
        price,
        description,
        banner: resultFile.url,
        category_id
      })

      return res.json(product)
    } catch (error) {
      return res.status(500).json({ error: (error as Error).message })
    }
  }
}

export { CreateProductController }
