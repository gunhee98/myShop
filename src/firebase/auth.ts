import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { appAuth, db } from "./config";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { FirebaseError } from "firebase/app";
interface signinProps {
  email: string;
  password: string;
}
export const signIn = async ({ email, password }: signinProps) => {
  try {
    await signInWithEmailAndPassword(appAuth, email, password);
  } catch (error) {
    if (error instanceof FirebaseError) {
      switch (error.code) {
        case "auth/invalid-email":
        case "auth/invalid-credential":
          alert("이메일 혹인 비밀번호가 일치하지 않습니다.");
      }
    }
  }
};
interface signupProps {
  email: string;
  password: string;
  nickname: string;
  loginType: string;
}
export const signUp = async ({
  email,
  password,
  nickname,
  loginType,
}: signupProps) => {
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
    console.log(error);
  }
};
