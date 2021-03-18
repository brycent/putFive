import { Input, Form, Label, FormGroup } from "reactstrap";
export const Login = () => {
  return (
    <div>
      <Form>
        <h6>Login</h6>
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
