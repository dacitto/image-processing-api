import { convertedImagesFolder } from './../utils/constants';
import { Request, Response } from 'express';
import path from 'path';
import sharp from 'sharp';
import { fullImagesFolder } from '../utils/constants';
import { imageNames } from '../data/images';
import { existsSync } from 'fs';
// const path = `public/images/nature.jpg`;
export const imageController = {
  resizeImage: async (req: Request, res: Response) => {
    if (!req.query.name) {
      return res
        .status(400)
        .send({ message: 'please provide image name example name=car' });
    }
    const imageName = req.query.name as string;
    if (!imageNames.includes(imageName)) {
      return res.status(404).send({ message: 'image doesn`t exist' });
    }

    const imagePath = path.join(fullImagesFolder, `/${imageName}.jpg`);

    if (!req.query.width || !req.query.height) {
      return res
        .status(400)
        .send({ message: 'please provide a width and height' });
    }
    const width = Number(req.query.width);
    const height = Number(req.query.height);
    const newImageFullPath =
      convertedImagesFolder + `${imageName}_${width}_${height}.png`;

    if (existsSync(newImageFullPath)) {
      console.log(`Loading cached image`);
      return res.sendFile(newImageFullPath);
    }

    try {
      sharp(imagePath)
        .resize(width, height)
        .toFile(newImageFullPath, (err, info) => {
          if (err) {
            console.log(err);
          }
          console.log(`resize image in process ... 📦`);
          console.log(info);
          return res.sendFile(newImageFullPath);
        });
    } catch (error: unknown) {
      console.log(`${error}`);
      return res.status(500).send(`${error}`);
    }
  },
};
