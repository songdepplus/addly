import express from 'express';
const router = express.Router();
// Add data export endpoints here
router.get('/', (req, res) => res.json({ message: 'Data Export Module' }));
export default router;
