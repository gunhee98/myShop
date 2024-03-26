import React from "react";
import LoginArea from "../layout/LoginArea";
import { LoginSection } from "./Login";

import SignupForm from "../components/SignupForm";

export default function SignUp() {
  return (
    <LoginArea>
      <LoginSection>
        <SignupForm />
      </LoginSection>
    </LoginArea>
  );
}
