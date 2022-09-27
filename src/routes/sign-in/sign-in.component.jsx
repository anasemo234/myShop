import { signInWithGooglePopUp } from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopUp();
  };

  return (
    <div>
      <h1>Sign In</h1>
      <button onClick={logGoogleUser}> Sign in with Google</button>
    </div>
  );
};

export default SignIn;