import express from 'express';
const router = express.Router();
// Add post automation endpoints here
router.get('/', (req, res) => res.json({ message: 'Post Automation Module' }));
export default router;
