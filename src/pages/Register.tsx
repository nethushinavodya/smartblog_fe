// import React, { useState } from "react"
// import { useNavigate } from "react-router-dom"
// import { register } from "../service/auth"
// import "../App.css"

// export default function Register() {
//   const [firstname, setFirstName] = useState("")
//   const [lastname, setLastName] = useState("")
//   const [email, setEmail] = useState("")
//   const [password, setPassword] = useState("")
//   const [confirmPassword, setConfirmPassword] = useState("")
//   const [roles, setRole] = useState("USER")

//   const navigate = useNavigate()

// const handleRegister = async (e: React.FormEvent<HTMLButtonElement>) => {
//   e.preventDefault()

//   if (password !== confirmPassword) {
//     alert("Passwords do not match.")
//     return
//   }

//   if (!firstname || !lastname || !email || !password || !roles) {
//     alert("Please fill in all fields.")
//     return
//   }

//   try {
//     const obj = { firstname, lastname, email, password, roles }
//     const response = await register(obj)

//     console.log(email)
//     console.log("Response from backend:", response);

//     alert(`User registered successfully! Email: ${response.email}`);

//     navigate("/login")
//   } catch (error: any) {
//     console.error("Registration error:", error)
//     alert(error.response?.data?.message || "Registration failed. Try again.")
//   }
// }


//   return (
//     <div>
//       <h1 >Register</h1>

//       <form >
//         <input id="inputs"
//           type="text"
//           placeholder="First Name"
//           value={firstname}
//           onChange={(e) => setFirstName(e.target.value)}
//         />
//         <br />
//         <input
//           type="text"
//           placeholder="Last Name"
//           value={lastname}
//           onChange={(e) => setLastName(e.target.value)}
//         />
//         <br />
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <br />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <br />
//         <input
//           type="password"
//           placeholder="Confirm Password"
//           value={confirmPassword}
//           onChange={(e) => setConfirmPassword(e.target.value)}
//         />
//         <br />
//         <select
//           value={roles}
//           onChange={(e) => setRole(e.target.value)}
//         >
//           <option value="USER">User</option>
//           <option value="AUTHOR">Author</option>
//         </select>
//         <br />
//         <button
//           onClick={handleRegister}
//         >
//           Register
//         </button>
//       </form>

//       <p>
//         Already have an account?{" "}
//         <button
//           onClick={() => navigate("/login")}
//         >
//           Login
//         </button>
//       </p>
//     </div>
//   )
// }
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../service/auth";
import "../assets/css/register.css";

export default function Register() {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [roles, setRole] = useState("USER");

  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    if (!firstname || !lastname || !email || !password || !roles) {
      alert("Please fill in all fields.");
      return;
    }

    try {
      const obj = { firstname, lastname, email, password, roles };
      const response = await register(obj);

      console.log("Response from backend:", response);
      alert(`User registered successfully! Email: ${response.email}`);

      navigate("/login");
    } catch (error: any) {
      console.error("Registration error:", error);
      alert(error.response?.data?.message || "Registration failed. Try again.");
    }
  };

  return (
    <div className="register-container">
      <h1 className="register-title">Register</h1>

      <form className="register-form">
        <input
          className="register-input"
          type="text"
          placeholder="First Name"
          value={firstname}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          className="register-input"
          type="text"
          placeholder="Last Name"
          value={lastname}
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          className="register-input"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="register-input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          className="register-input"
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <select
          className="register-select"
          value={roles}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="USER">User</option>
          <option value="AUTHOR">Author</option>
        </select>
        <button className="register-button" onClick={handleRegister}>
          Register
        </button>
      </form>

      <p className="register-login">
        Already have an account?{" "}
        <button
          className="login-link"
          onClick={() => navigate("/login")}
        >
          Login
        </button>
      </p>
    </div>
  );
}
