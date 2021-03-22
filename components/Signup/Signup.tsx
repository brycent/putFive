import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import UserPool from "../../Auth/UserPool";
import styles from "../../styles/components/Signup/Signup.module.css";

export const Signup = () => {
  const [email, setEmail] = useState("");
  // const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    UserPool.signUp(email, password, [], null, (err, data) => {
      if (err) {
        console.log(err);
      }
      console.log(data);
    });
  };

  return (
    <div className={styles.form}>
      <Form onSubmit={onSubmit}>
        {/* <FormGroup>
          <Label for="Username">Username</Label>
          <Input
            type="text"
            placeholder="Create a username"
            value={username}
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
        </FormGroup> */}
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
            Start Betting 🥳
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Signup;
