import express from 'express';
import { setFacebookRoutes } from './routes/facebookRoutes';
import { setWebsiteRoutes } from './routes/websiteRoutes';
import { setUserRoutes } from './routes/userRoutes';
import firebaseUserRoutes from './routes/firebaseUserRoutes';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

setFacebookRoutes(app);
setWebsiteRoutes(app);
app.use('/api/user', setUserRoutes());
app.use('/api/firebase-user', firebaseUserRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});