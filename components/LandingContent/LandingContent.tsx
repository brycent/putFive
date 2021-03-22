import React from "react";
import { Container } from "reactstrap";
import Signup from "../Signup/Signup";
import styles from "../../styles/components/LandingContent/LandingContent.module.css";

export const LandingContent = () => {
  return (
    <div>
      <Container>
        <h1 className={styles.heading}>Welcome to PutFive 🎉</h1>
        <h5 className={styles.intro}>
          Bet with your friends and see what your friends are betting on.
        </h5>
        <div className={styles.signup}>
          <Signup />
        </div>
      </Container>
    </div>
  );
};

export default LandingContent;
