import { ReactNode, createContext, useEffect, useState } from "react";
import { appAuth } from "../firebase/config";

interface User {
  uid: string;
  email: string;
}
const AuthContext = createContext<User | null>(null);

const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = appAuth.onAuthStateChanged(user => {
      console.log(user);
      if (user) {
        const { email, uid } = user;
        setUser({ email, uid } as User);
      }
    });

    return () => unsubscribe();
  }, []);
  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthContextProvider };
