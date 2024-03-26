import React, { useContext, useEffect, useState } from "react";
import Header from "../components/Header";
import { AuthContext } from "../context/AuthContext";

export default function SellerCenter() {
  const [loading, setLoading] = useState(true);
  const user = useContext(AuthContext);
  useEffect(() => {
    if (user) {
      setLoading(false);
    }
  }, [user]);
  return (
    <>
      {loading ? (
        <div>로딩중</div>
      ) : (
        <>
          <Header />
          <main>dkddde</main>
        </>
      )}
    </>
  );
}
