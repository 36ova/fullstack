import { WordLink } from "./Links/BlueWordLink"

export function Login() {
  return (
    <aside className="side-aside">
      <div className="roundable form">
      <form>
        <div>
          <label>nickname or e-mail</label>
        </div>
        <div>
          <input name="login"></input>
        </div>
        <div>
          <label>password</label>
        </div>
        <div>
          <input name="password"></input>
        </div>
        <div>
          <button className="button_send">Login</button>
        </div>
        <div>
          <label className="annotation">Don't have an account? </label><WordLink to="/signup">Register</WordLink>
          <label className="annotation"> with LucidWords. Registration is free. Or just </label>
          <WordLink to="/">return</WordLink><label className="annotation"> to the site.</label>
        </div>
      </form>
    </div>
  </aside>
  );
}