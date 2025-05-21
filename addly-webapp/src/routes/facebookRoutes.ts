import { Router } from 'express';
import FacebookController from '../controllers/facebookController';

const router = Router();
const facebookController = new FacebookController();

export function setFacebookRoutes(app) {
    app.use('/api/facebook', router);

    router.get('/data', facebookController.getFacebookData.bind(facebookController));
    router.post('/data', facebookController.postFacebookData.bind(facebookController));
    router.delete('/data/:id', facebookController.deleteFacebookData.bind(facebookController));
}