import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { appAuth } from "../firebase/config";

export default function Home() {
  const user = useContext(AuthContext);
  console.log(user);
  return (
    <button
      onClick={() => {
        appAuth.signOut();
      }}
    >
      클릭
    </button>
  );
}
