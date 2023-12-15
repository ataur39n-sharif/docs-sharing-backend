import {v2 as cloudinary} from 'cloudinary';
import multer from "multer";
import path from "path";
import CustomError from "@/Utils/errors/customError.class";
import * as fs from "fs";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        const ext = path.extname(file.originalname)
        // console.log({ext})
        const baseName = file.originalname.trim()?.split('.')[0]?.replace(/\s+/g, '-')
        // console.log({baseName})
        const newFileName = `${baseName}${ext}`
        // console.log({newFileName})
        cb(null, newFileName)
    }
})

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 2 * 1024 * 1024
    },
    fileFilter: function (req, file, cb) {
        const allowedMimes = [
            'image/jpeg',
            'image/png',
            'image/webp',
            'image/gif'
        ]

        // console.log(file.originalname, file.mimetype)

        if (!allowedMimes.includes(file.mimetype)) {
            return cb(new Error('Invalid file type. Only image file allowed.Example - .svg, .jpeg, .png, .webp, .gif.'))
        }
        cb(null, true)
    }
})

const uploadToCloudinary = async (file: Express.Multer.File, folderName: string = 'random'): Promise<{
    url: string;
    fileName: string
}> => {
    try {
        const data = await cloudinary.uploader.upload(file.path,
            {public_id: file.filename?.split('.')[0], folder: folderName}
        );
        data.url && fs.unlinkSync(file.path);    // Remove the uploaded file from the 'uploads' folder
        // console.log({data})
        return {
            url: data.secure_url,
            fileName: data.original_filename
        }
    } catch (e) {
        console.log({e})
        throw new CustomError((e as Error).message, 400)
    }
}


export const FileUploadHandler = {
    upload,
    uploadToCloudinary
}