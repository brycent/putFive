import React, { useState } from "react";
import { Auth } from "aws-amplify";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { ConfirmSignup } from "./confirmSignup";
import styles from "../../styles/components/Signup/Signup.module.css";

export const Signup = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState(false);

  const onSignup = async (event) => {
    event.preventDefault();
    try {
      Auth.signUp({
        username,
        password,
        attributes: {
          email,
        },
      });
      console.log("SUCCESS: signup works");
      setConfirm(true);
    } catch (error) {
      console.log(error);
    }
  };
  return confirm === false ? (
    <div className={styles.form}>
      <Form onSubmit={onSignup}>
        <FormGroup>
          <Label for="Username">Username</Label>
          <Input
            type="text"
            placeholder="Create a username"
            value={username}
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
        </FormGroup>
        <FormGroup>
          <Label for="Email">Email</Label>
          <Input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input
            type="text"
            placeholder="Something super secret"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </FormGroup>
        <div>
          <p className={styles.login}>Already a PutFiver? Sign in.</p>
        </div>
        <div className={styles.start}>
          <Button type="submit" color="success">
            Sign Up 🥳
          </Button>
        </div>
      </Form>
    </div>
  ) : (
    <ConfirmSignup username={username} setConfirm={setConfirm} />
  );
};

export default Signup;
