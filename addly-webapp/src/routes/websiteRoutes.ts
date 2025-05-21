import { Router } from 'express';
import WebsiteController from '../controllers/websiteController';

const router = Router();
const websiteController = new WebsiteController();

export const setWebsiteRoutes = (app) => {
    app.use('/api/websites', router);

    router.get('/', websiteController.getWebsiteData);
    router.post('/', websiteController.postWebsiteData);
    router.delete('/:id', websiteController.deleteWebsiteData);
};