import express from 'express';
const router = express.Router();
// Add analytics endpoints here
router.get('/', (req, res) => res.json({ message: 'Analytics Module' }));
export default router;
