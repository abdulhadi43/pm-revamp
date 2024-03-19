import { Request, Response } from 'express';
import { ImageService } from '../services/image/imageService';
const service = new ImageService();


class ImageController {
// Controller function to process images
 public static processImagesController = (req: Request, res: Response, next: any)=> {
    try {
        const directoryPath = 'C:\Users\BK TECH\Downloads\Picsart_24-01-18_15-56-54-612.jpg'; // Adjust this to your image directory path
        service
         .processImages(directoryPath);
        res.json({ success: true, message: 'Images processed successfully' });
    } catch (error) {
        console.error('Error processing images:', error);
        next(error);
    }
  }
}

export default ImageController;