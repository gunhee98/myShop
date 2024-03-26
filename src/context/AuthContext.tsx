import { ReactNode, createContext, useEffect, useState } from "react";
import { appAuth, db } from "../firebase/config";
import {
  Timestamp,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";

interface User {
  userId: string;
  email: string;
  loginType: string;
  nickname: string;
  createAt: Timestamp;
  updateAt: Timestamp;
}
const AuthContext = createContext<User | null>(null);

const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = appAuth.onAuthStateChanged(async user => {
      if (user) {
        const q = query(
          collection(db, "users"),
          where("userId", "==", user.uid),
        );
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach(doc => {
          const data = doc.data();
          setUser({
            userId: data.userId,
            email: data.email,
            loginType: data.loginType,
            nickname: data.nickname,
            createAt: data.createdAt,
            updateAt: data.createdAt,
          });
        });
      }
    });

    return () => unsubscribe();
  }, []);
  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthContextProvider };
