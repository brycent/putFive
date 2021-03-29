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
      <h3>
        Congrats on the signup {username}, please confirm your email to get
        started :)
      </h3>
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
            Start Betting
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default ConfirmSignup;
