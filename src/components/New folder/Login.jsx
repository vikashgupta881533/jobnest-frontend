import { Link, useNavigate } from "react-router-dom";

import "../css/auth.css";
import { useState } from "react";
import axios from 'axios'

function Login() {

    const [frmdata, setfrmdata] = useState({})
    const navigate = useNavigate();
    
        function inputdata(e){
            const {name,value} = e.target
            setfrmdata({...frmdata,[name]:value})
        }

         async function submitdata(e){
        e.preventDefault()
        let res = await axios.post('http://localhost:6100/userlogin',frmdata)
            console.log(res.data);

        if(res.data.token){
            if(res.data.role == "admin"){
                localStorage.setItem("token",res.data.token)
                localStorage.setItem("role", res.data.role)
                navigate('/AdminDashboard')

            }else if(res.data.role == "recruiter"){
                localStorage.setItem("token",res.data.token)
                localStorage.setItem("role", res.data.role)
                navigate('/RecruiterDashboard')
            }
            else if(res.data.role == "candidate"){
                localStorage.setItem("token",res.data.token)
                localStorage.setItem("role", res.data.role)
                navigate('/CandidateDashboard')
            }
            }
            else{
                alert("user not found")
            }
          
          }

  return (
    <section className="login-page">
      <div className="container">
        <div className="login-wrapper">

          {/* Left Side */}
          <div className="login-left">
            <span className="login-badge">🚀 Welcome to JobNest</span>

            <h1>Build your next career move.</h1>

            <p>
              Discover verified companies, apply faster and find
              opportunities that match your skills.
            </p>

            <div className="login-features">
              <div>✔ Verified Companies</div>
              <div>✔ One-click Apply</div>
              <div>✔ AI Job Recommendations</div>
            </div>

            <div className="login-stats">
              <div>
                <h3>10K+</h3>
                <span>Jobs</span>
              </div>

              <div>
                <h3>2.5K+</h3>
                <span>Companies</span>
              </div>

              <div>
                <h3>50K+</h3>
                <span>Candidates</span>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="login-right">

            <div className="login-card">

              <h2>Welcome Back</h2>

              <p>Login to continue your journey.</p>

              <form onSubmit={submitdata}>

                <div className="input-box">
                  <label>Email</label>

                  <input
                    type="email" name="email" onChange={inputdata}
                    placeholder="Enter your email"
                  />
                </div>

                <div className="input-box">
                  <label>Password</label>

                  <input
                    type="password" name="password" onChange={inputdata}
                    placeholder="Enter your password"
                  />
                </div>

                <div className="login-options">

                  <label>
                    <input type="checkbox" />
                    Remember me
                  </label>

                  <Link to="/">Forgot Password?</Link>

                </div>

                {/* <button className="login-btn">
                  Login
                </button> */}

                <input type="submit" className="login-btn" value="Login" />

              </form>

              <div className="divider">
                <span>or continue with</span>
              </div>

              <div className="social-login">

                <button>Google</button>

                <button>GitHub</button>

              </div>

              <div className="signup-link">

                Don't have an account?

                <Link to="/signup"> Sign Up</Link>

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Login;