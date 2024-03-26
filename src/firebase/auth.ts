import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { appAuth, db } from "./config";
import {
  addDoc,
  collection,
  getDocs,
  query,
  serverTimestamp,
  where,
} from "firebase/firestore";
import { FirebaseError } from "firebase/app";

interface signinProps {
  email: string;
  password: string;
}
export const signIn = async (
  { email, password }: signinProps,
  setLoading: (type: boolean) => void,
) => {
  try {
    setLoading(true);
    const user = await signInWithEmailAndPassword(appAuth, email, password);
    return user;
  } catch (error) {
    if (error instanceof FirebaseError) {
      switch (error.code) {
        case "auth/invalid-email":
        case "auth/invalid-credential":
          alert("이메일 혹인 비밀번호가 일치하지 않습니다.");
      }
    }
  } finally {
    setLoading(false);
  }
};
interface signupProps {
  email: string;
  password: string;
  nickname: string;
  loginType: string;
}
export const signUp = async (
  { email, password, nickname, loginType }: signupProps,
  setLoading: (type: boolean) => void,
) => {
  setLoading(true);
  const q = query(collection(db, "users"), where("nickname", "==", nickname));
  const querySnapshot = await getDocs(q);
  if (!querySnapshot.empty) {
    alert("중복된 닉네임 입니다");
    setLoading(false);
    return;
  }
  try {
    const userCredential = await createUserWithEmailAndPassword(
      appAuth,
      email,
      password,
    );

    if (userCredential) {
      await addDoc(collection(db, "users"), {
        userId: userCredential.user.uid,
        email: userCredential.user.email,
        loginType,
        nickname,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      });
    }
  } catch (error) {
    if (error instanceof FirebaseError) {
      switch (error.code) {
        case "auth/email-already-in-use":
          alert("중복된 이메일입니다.");
      }
    }
  } finally {
    setLoading(false);
  }
};
