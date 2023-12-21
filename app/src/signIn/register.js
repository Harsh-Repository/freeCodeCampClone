import "./signIn.css";

export default function Register() {
  return (
    <>
      <div className="signInPage">
        <h1 className="signInHead">Register to sign in</h1>
        <br />
        <div className="signInForm">
        <div className="emailID">
            <form>
              User Name:
              <input
                type="name"
                className="form-control emailInput"
                id="email"
                name="username"
                placeholder="User name"
              />
            </form>
          </div>
          <br/>
          <div className="emailID">
            <form>
              Email Address:
              <input
                type="email"
                className="form-control emailInput"
                id="email"
                name="email"
                placeholder="Enter email"
              />
            </form>
          </div>
          <br />
          <div className="password">
            <form>
              Password:
              <input
                type="password"
                className="form-control passwordInput"
                id="password"
                name="password"
                placeholder="Password"
              />
            </form>
          </div>
          <br />
          <div className="login">
            <button className="loginBtn">Register</button>
          </div>
          <div className="login">
            <button className="loginBtn">Sign in with Google</button>
          </div>
          <br />
          <div>
            <small className="member">
              "Not a member yet? <a href="/register">register</a>" : "Already a member,{" "}
              <a href="/signin">login</a>"
            </small>
          </div>
        </div>
      </div>
    </>
  );
}
