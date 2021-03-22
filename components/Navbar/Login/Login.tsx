import React, { useState } from "react";
import { Input, Form, FormGroup, Button } from "reactstrap";
import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";
import styles from "../../../styles/components/Login/Login.module.css";
import UserPool from "../../../Auth/UserPool";

export const Login = (props) => {
  const { setShow } = props;
  const [email, setEmail] = useState("");
  // const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleClose = () => {
    setShow(false);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const user = new CognitoUser({
      Username: email,
      Pool: UserPool,
    });

    const authDetails = new AuthenticationDetails({
      Username: email,
      Password: password,
    });

    user.authenticateUser(authDetails, {
      onSuccess: (data) => {
        console.log("onSuccess:", data);
      },
      onFailure: (err) => {
        console.error("onFailure:", err);
      },
      newPasswordRequired: (data) => {
        console.log("newPasswordRequired:", data);
      },
    });
  };
  return (
    <div className={styles.formContainer}>
      <Form onSubmit={onSubmit}>
        <h6>Welcome Back PutFiver </h6>
        <FormGroup>
          <Input
            placeholder="username"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
        </FormGroup>
        <FormGroup>
          <Input
            placeholder="password"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </FormGroup>
        <Button color="success" onClick={handleClose} type="submit">
          Login 🥳
        </Button>
      </Form>
    </div>
  );
};
export default Login;
