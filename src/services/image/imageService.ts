import { IService } from './IService';
import sharp from 'sharp';
import fs from 'fs';


export class ImageService implements IService {

  async processImages(directoryPath: string): Promise<void> {
    try {
      // Read the contents of the directory
      const files = await fs.promises.readdir(directoryPath);
  
      // Filter out only image files (you might want to adjust this filter based on your specific requirements)
      const imageFiles = files.filter(file => /\.(png|jpg|jpeg|gif)$/i.test(file));
  
      // Process each image
      for (const file of imageFiles) {
          // Construct the absolute path to the image file
          const imagePath = `${directoryPath}/${file}`;
  
          // Apply blur effect
          const blurredImageBuffer = await sharp(imagePath)
              .blur(10) // Adjust the blur radius as needed
              .toBuffer();
  
          // Save the blurred image
          const outputPath = `${imagePath}-blurred.jpg`;
          fs.writeFileSync(outputPath, blurredImageBuffer);
  
          console.log(`Processed image saved to: ${outputPath}`);
      }
  } catch (error) {
      console.error('Error processing images:', error);
      throw error;
  }
 }

}
