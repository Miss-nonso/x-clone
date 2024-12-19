// import { Link } from "react-router-dom";
import { googleIcon } from "../assets/images/images";
import { appleIcon } from "../assets/images/images";

import {
  getAuth,
  signInWithPopup,
  // OAuthProvider,
  GoogleAuthProvider
} from "firebase/auth";

const Landing = () => {
  const googleProvider = new GoogleAuthProvider();
  // const appleProvider = new OAuthProvider("apple.com");

  const handleGoogleSignup = () => {
    const auth = getAuth();
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);

        console.error({ errorCode, errorMessage, email, credential });
        // ...
      });
  };

  const handleAppleSignin = () => {
    // const auth = getAuth();
    // signInWithPopup(auth, appleProvider)
    //   .then((result) => {
    //     // The signed-in user info.
    //     const user = result.user;

    //     // Apple credential
    //     const credential = OAuthProvider.credentialFromResult(result);
    //     const accessToken = credential.accessToken;
    //     const idToken = credential.idToken;

    //     // IdP data available using getAdditionalUserInfo(result)
    //     // ...
    //   })
    //   .catch((error) => {
    //     // Handle Errors here.
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //     // The email of the user's account used.
    //     const email = error.customData.email;
    //     // The credential that was used.
    //     const credential = OAuthProvider.credentialFromError(error);

    //     // ...

    //     console.error({ errorCode, errorMessage, email, credential });
    //   });
    alert(
      "Apple sign in is unavailable. Kindly use google or create an account"
    );
  };
  return (
    <div className="landing-page lg:w-full">
      <div className="x-logo-wrapper">
        <img src="./x-logo.png" alt="X icon" className="x-logo" />
      </div>
      <div className="landing-wrapper" id="landing-wrapper">
        <h2>Happening now</h2>
        <h4>Join today.</h4>
        <div className="landing-links-container">
          {" "}
          <div className="signin-btns">
            <button className="bg-link" onClick={handleGoogleSignup}>
              {" "}
              {/* <img src="./logo512.png" alt="" />  */}
              <span>{googleIcon}</span>
              <h6>Sign in with google</h6>
            </button>
            <button className="bg-link" onClick={handleAppleSignin}>
              {" "}
              {/* <img src="./logo512.png" alt="" aria-disabled />{" "} */}
              <span>{appleIcon}</span>
              <h6>Sign in with Apple</h6>
            </button>
          </div>
          <div className="or">
            <hr /> <span>or</span> <hr />
          </div>
          <a href="/signup" className="bg-link" data-info="create-account-btn">
            {" "}
            Create account
          </a>
          <small>
            By signing up, you agree to the Terms of Service and Privacy Policy,
            including Cookie Use.
          </small>
          <div className="landing-signin-wrapper">
            <h5>Already have an account?</h5>
            <a href="/login" className="bg-link" data-info="signin-btn">
              Sign in
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
