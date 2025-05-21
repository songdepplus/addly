import { initializeApp, cert, getApps } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

// Only initialize if not already initialized (for hot reload/dev)
if (!getApps().length) {
  initializeApp();
}

export const db = getFirestore();
