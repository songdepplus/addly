import express from 'express';
const router = express.Router();
// Add notification endpoints here
router.get('/', (req, res) => res.json({ message: 'Notification Module' }));
export default router;
