import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import styles from "../../styles/components/Signup/Signup.module.css";

export const Signup = () => {
  return (
    <div className={styles.form}>
      <Form>
        <FormGroup>
          <Label for="Username">Username</Label>
          <Input type="text" placeholder="Create a username" />
        </FormGroup>
        <FormGroup>
          <Label for="Email">Email</Label>
          <Input type="email" placeholder="Your email" />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input type="text" placeholder="Something super secret" />
        </FormGroup>
      </Form>
      <div>
        <p className={styles.login}>Already a PutFiver? Sign in.</p>
      </div>
      <div className={styles.start}>
        <Button color="success">Start Betting 🥳</Button>
      </div>
    </div>
  );
};

export default Signup;
