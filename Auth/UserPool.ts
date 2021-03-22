import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
  UserPoolId: "us-east-1_mVToqlO8J",
  ClientId: "36q081n23nheoii48kqjhip96h",
};

export default new CognitoUserPool(poolData);
