import express from 'express';
import { imageController } from '../controllers/imageController';
const router = express.Router();
router.route('/').get(imageController.resizeImage);

export default router;
// export default userRouter;
