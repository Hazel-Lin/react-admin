import LoginForm from './components/loginForm'
import './index.less'

function Login() {
  return (
  <div className="login-container">
    <div className="login-box">
      <div className="login-form">
        <div className="login-logo">
          <span className="logo-text">React-Admin</span>
        </div>
        <LoginForm />
      </div>
    </div>
  </div>
  )
}

export default Login
