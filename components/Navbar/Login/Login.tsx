import React from "react";
import { Input, Form, FormGroup } from "reactstrap";
import styles from "../../../styles/components/Login/Login.module.css";

export const Login = () => {
  return (
    <div className={styles.formContainer}>
      <Form>
        <h6>Welcome Back PutFiver </h6>
        <FormGroup>
          <Input placeholder="username" />
        </FormGroup>
        <FormGroup>
          <Input placeholder="password" />
        </FormGroup>
      </Form>
    </div>
  );
};
export default Login;
