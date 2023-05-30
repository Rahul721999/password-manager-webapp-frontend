import {React, useState} from "react";
import Dashboard from './dashboard'
import config from "./config";
const LoginPage = (props) => {
    const base_url = config.myEnvVar;
    const [loggedIn, setLoggedIn] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordType, setPasswordType] = useState("password");

    const handleEmailChange = (e) => {
        e.preventDefault();
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        e.preventDefault();
        setPassword(e.target.value);
    };
    const handleCheckBox = () => {
        if (passwordType === "password") {
            setPasswordType("text")
            return;
        }
        setPasswordType("password")
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        // calling login api
        try {
            const response = await fetch(base_url.concat("/Auth/LogIn"), {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "/",
                    "Connection": "keep-alive"
                },
                body: JSON.stringify(
                    {email, password}
                )

            })
            if (response.ok) {
                const data = await response.json();
                alert("Login Successful");
                const authToken = data.Authorization;
                console.log("Authtoken: ", authToken);
                setLoggedIn(true);
            } else {
                const data = await response.json();
                const message = data.message;
                alert(message);
            }
        } catch (err) {
            console.log("An Error Occured:", err);
        };

    };

    if (loggedIn) {
        console.log("email:%s login success", email);
        return (
            <Dashboard/>)
    }
    return (
        <div className="auth-form-container">
            <h2>Login</h2>

            <form className="login-form"
                onSubmit={handleSubmit}>
                <label htmlFor="email">email</label>
                <input type="text" id="email"
                    value={email}
                    onChange={handleEmailChange}
                    name="email"
                    placeholder="your_email@domain.com"
                    required
                    // Add required attribute for form validation
                />

                <label htmlFor="password">password</label>
                <input type={passwordType}
                    id="password"
                    value={password}
                    onChange={handlePasswordChange}
                    name="password"
                    minLength={8}
                    // Add minLength attribute for password validation
                    required
                    // Add required attribute for form validation
                />

                <label>
                    show password
                    <input className="box" type="checkbox"
                        onChange={handleCheckBox}/>
                </label>
                <button type="submit">Submit</button>
            </form>
            <button className="link-btn"
                onClick={
                    () => props.onFormSwitch('signup')
            }>Don't have account? sign-in here</button>
        </div>

    );
}

export default LoginPage;
