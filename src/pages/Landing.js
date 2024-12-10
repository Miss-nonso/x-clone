import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="landing-page lg:w-full">
      <div className="x-logo-wrapper">
        <img src="./x-logo.png" alt="X icon" className="x-logo" />
      </div>
      <div className="landing-wrapper">
        <h2>Happening now</h2>
        <h4>Join today.</h4>
        <div className="landing-links-container">
          {" "}
          <div className="signin-btns">
            <Link href="#" className="bg-link">
              {" "}
              <img src="./logo512.png" alt="" /> <h6>Sign in with google</h6>
            </Link>
            <Link href="#" className="bg-link">
              {" "}
              <img src="./logo512.png" alt="" aria-disabled />{" "}
              <h6>Sign in with Apple</h6>
            </Link>
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
