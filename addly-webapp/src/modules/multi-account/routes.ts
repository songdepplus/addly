import express from 'express';
const router = express.Router();
// Add multi-account endpoints here
router.get('/', (req, res) => res.json({ message: 'Multi-Account Module' }));
export default router;
