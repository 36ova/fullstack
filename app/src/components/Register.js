import { RegisterForm } from "./RegisterForm/RegisterForm";
import { WordLink } from "./Links/BlueWordLink"


export function Register() {
  return (
    <aside className="main-aside">
      <div className="roundable form">
      <form>
        <div>
          <label>nickname</label>
        </div>
        <input name="nickname"></input>
        <div>
          <label>e-mail address</label>
        </div>
        <input name="email"></input>
        <div>
          <label>password</label>
        </div>
        <div>
          <input name="pwd1"></input>
        </div>
        <div>
          <input name="pwd2"></input>
        </div>
        <div>
          <label className="annotation">Enter your password twice to make sure they are the same.</label>
        </div>
        <div>
          <button className="verify-button" type="signup">Register</button>
        </div>
        <div>
          <label className="annotation">Don't want to register? </label><WordLink to="/">Return</WordLink><label className="annotation"> to the site.</label>
        </div>
      </form>
    </div>
  </aside>
  );
}
