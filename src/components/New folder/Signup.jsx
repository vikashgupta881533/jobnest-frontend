import { Link } from "react-router-dom";
import "../css/auth.css"
import { useState } from "react";
import axios from 'axios'

function Signup() {

    const [frmdata, setfrmdata] = useState({})

    function inputdata(e){
        const {name,value} = e.target
        setfrmdata({...frmdata,[name]:value})
    }

    function submitdata(e){
        e.preventDefault()
        axios.post('http://localhost:6100/usersign',frmdata)
        .then(()=>alert("Account Created"))
        .catch((err)=>console.log("Failed",err))
    }

  return (
    <section className="loginPage">
      <div className="container">
        <div className="loginWrapper">

          {/* Left Side */}
          <div className="loginLeft">
            <span className="loginBadge">🚀 Join JobNest</span>

            <h1>Create your account.</h1>

            <p>
              Start applying to verified companies and discover better career opportunities.
            </p>

            <div className="loginFeatures">
              <div>✔ Verified Companies</div>
              <div>✔ Free Profile</div>
              <div>✔ AI Job Match</div>
            </div>
          </div>

          {/* Right Side */}
          <div className="loginRight">
            <div className="loginCard">

              <h2>Create Account</h2>
              <p>Join JobNest in less than a minute.</p>

              <form onSubmit={submitdata}>

                <div className="inputBox">
                  <label>Full Name</label>
                  <input type="text" name='name' onChange={inputdata} placeholder="Enter your name" />
                </div>

                <div className="inputBox">
                  <label>Email</label>
                  <input type="email" name='email' onChange={inputdata} placeholder="Enter your email" />
                </div>

                <div className="inputBox">
                  <label>Phone</label>
                  <input type="text" name='phone' onChange={inputdata} placeholder="Mobile Number" />
                </div>

                <div className="inputBox">
                  <label>Password</label>
                  <input type="password" name='password' onChange={inputdata} placeholder="Create password" />
                </div>

                <div className="inputBox">
                  <label>Role</label>

                  <select name='role' onChange={inputdata}>
                    <option>Job Seeker</option>
                    <option>Recruiter</option>
                  </select>
                </div>
                <label htmlFor="">Create Account</label>
                <input type="submit" className="loginBtn" />
                  
                

              </form>

              <div className="divider">
                <span>or continue with</span>
              </div>

              <div className="socialLogin">
                <button>Google</button>
                <button>GitHub</button>
              </div>

              <div className="signupLink">
                Already have an account?
                <Link to="/login"> Login</Link>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Signup;