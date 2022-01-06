import { Router } from 'express';

import * as authController from '../controllers/auth';
import { isAuthenticated } from '../middlewares/auth';

const router = Router();

router.post('/login', authController.login);
router.post('/logout', authController.logout);
router.post('/refresh-token', authController.refreshToken);
router.get('/site', isAuthenticated, authController.checkProtected);

export default router;
