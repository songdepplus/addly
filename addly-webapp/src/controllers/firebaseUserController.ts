import { Request, Response } from 'express';
import { db } from '../firebase';

export const getUser = async (req: Request, res: Response) => {
  const { uid } = req.params;
  try {
    const userDoc = await db.collection('users').doc(uid).get();
    if (!userDoc.exists) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(userDoc.data());
  } catch (error) {
    res.status(500).json({ message: 'Error fetching user', error });
  }
};

export const createUser = async (req: Request, res: Response) => {
  const { uid, email, displayName } = req.body;
  try {
    await db.collection('users').doc(uid).set({ email, displayName, createdAt: new Date() });
    res.json({ message: 'User created' });
  } catch (error) {
    res.status(500).json({ message: 'Error creating user', error });
  }
};
