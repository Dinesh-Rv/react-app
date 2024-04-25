import "./login.css"

export default function Login() {
  return (
    <div action="" className="login">
      <h1>Login </h1>
      <div>
        <label htmlFor="">username</label>
        <input type="text" />
      </div>
      <div>
        <label htmlFor="">Password</label>
        <input type="text" />
      </div>
      <button>Login</button>
    </div>
  );
}
