import React, { useState } from "react";
import { Input, Form, FormGroup, Button } from "reactstrap";
import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";
import { Auth } from "aws-amplify";
import styles from "../../../styles/components/Login/Login.module.css";
import UserPool from "../../../Auth/UserPool";

export const Login = (props) => {
  const { setShow } = props;
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleClose = () => {
    setShow(false);
  };

  const onLogin = async (event) => {
    event.preventDefault();
    try {
      const user = await Auth.signIn(username, password);
      console.log(user);
    } catch (error) {
      console.error("Error ==>", error);
    }
  };

  const onOldSubmit = (event) => {
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
      <Form onSubmit={onLogin}>
        <h6>Welcome Back PutFiver </h6>
        <FormGroup>
          <Input
            placeholder="username"
            value={username}
            onChange={(event) => {
              setUsername(event.target.value);
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
