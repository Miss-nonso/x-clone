import {
  addDoc,
  collection,
  onSnapshot,
  getDocs,
  orderBy,
  query
} from "firebase/firestore";
import { db } from "../firebase";

export async function createTweet(content, userId) {
  return await addDoc(collection(db, "posts"), {
    content,
    userId,
    createdAt: new Date(),
    likes: 0,
    shares: 0
  });
}

export async function fetchPosts() {
  const q = query(collection(db, "posts"), orderBy("createdAt", "desc"));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
}

export async function fetchTrendingPosts() {
  const q = query(collection(db, "posts"), orderBy("likes", "desc"));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
}

export function listenToPosts(callback) {
  const q = query(collection(db, "posts"), orderBy("createdAt", "desc"));
  return onSnapshot(q, (snapshot) => {
    const posts = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    callback(posts);
  });
}
