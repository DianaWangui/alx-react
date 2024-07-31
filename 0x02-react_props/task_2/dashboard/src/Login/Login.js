import './App.css'

function Login() {
  return (
    <div>
      <body className="App-body">
        <p>
          Login to access the full dashboard
        </p>
        <label for="email">Email: </label>
        <input type="email" id="email" />
        <label for="password" style={{marginLeft: '10px'}}>Password: </label>
        <input type="password" id="password" />
        <button style={{marginLeft: '10px'}}>OK</button>
      </body>
    </div> 
  );
}

export default Login;
