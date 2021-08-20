import { useState } from "react";
import { FormControl, FormGroup, FormLabel } from "@material-ui/core";
import { Button } from "@material-ui/core";
//import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0 && setPassword.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="Login">
      <FormControl onSubmit={handleSubmit}>
        <FormGroup size="xlg" controlId="email">
          <FormLabel>eMail</FormLabel>
          <FormControl
            autoFocus
            type="email"
            value="{ email }"
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup size="xlg" controlId="password">
          <FormLabel>Password</FormLabel>
          <FormControl
            type="pasword"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormGroup>
        <Button block size="xlg" type="submit" disabled={!validateForm()}>
          Login
        </Button>
      </FormControl>
    </div>
  );
}
