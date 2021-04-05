import React, { useState } from "react";
import { Auth } from "aws-amplify";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import styles from "../../styles/components/Signup/Signup.module.css";

export const ConfirmSignup = (props) => {
  const [code, setCode] = useState("");
  const { username, setConfirm } = props;
  const onVerify = async (event) => {
    event.preventDefault();
    try {
      await Auth.confirmSignUp(username, code);
      console.log("SUCCESS: email confirmed");
      setConfirm(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={styles.form}>
      <p>
        {username}, check your email for the one-time passcode and confirm your
        email to start betting.
      </p>
      <Form onSubmit={onVerify}>
        <FormGroup>
          <Input
            type="text"
            placeholder="one-time passcode"
            value={code}
            onChange={(event) => {
              setCode(event.target.value);
            }}
          />
        </FormGroup>
        <div className={styles.start}>
          <Button type="submit" color="success">
            Start Betting 🥳
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default ConfirmSignup;
