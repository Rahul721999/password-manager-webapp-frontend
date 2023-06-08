import {React, useState} from "react";
import config from "./config";

import { Link,Navigate } from "react-router-dom";

const SignUp = () => {
    const base_url = config.myEnvVar;

    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [password, setPassword] = useState("");
    const [signedIn, setSignedIn] = useState(false);


    const handleFirstNameChange = (e) => {
        e.preventDefault();
        setFirstName(e.target.value);
    };
    const handleLastNameChange = (e) => {
        e.preventDefault();
        setLastName(e.target.value);
    };


    const handleEmailChange = (e) => {
        e.preventDefault();
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        e.preventDefault();
        setPassword(e.target.value);
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(base_url.concat("/Auth/SignUp"), {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "/",
                    "Connection": "keep-alive"
                },
                body: JSON.stringify(
                    {"email": email, "pass": password, "first_name": firstName, "last_name": lastName}
                )
            })

            if (response.ok) {
                const data = await response.json();
                console.log(data)
                alert('sign in successful');
                setSignedIn(true);
            } else {
                console.log(response)
                const data = await response.json();
                alert(data.message)
            }
        } catch (err) {
            console.log();
        }
    };

    if (signedIn) {
        return <Navigate to="/"/>;
    }

    return (
        <div className="auth-form-container">
            <h2>SignIn</h2>

            <form className="register-form"
                onSubmit={handleSubmit}>
                <div className="name-form">
                <label htmlFor="fName"></label>
                <input className="name-input" type="text" id="fname"
                    value={firstName}
                    onChange={handleFirstNameChange}
                    name="fname"
                    placeholder="Name"
                    required
                    // Add required attribute for form validation
                />
                <div className="spacer"></div>
                <label htmlFor="lName"></label>
                <input className="name-input" type="text" id="lname"
                    value={lastName}
                    onChange={handleLastNameChange}
                    name="lname"
                    placeholder="Surname"
                    required
                    // Add required attribute for form validation
                />
                </div>
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
                <input type="text" id="password"
                    value={password}
                    onChange={handlePasswordChange}
                    name="password"
                    minLength={8}
                    required
                    // Add required attribute for form validation
                />

                <button type="submit">Submit</button>
            </form>
            <p >
                <Link to='/' className="link-btn">Already have account? Login Up</Link>
            </p>
        </div>

    )
}

export default SignUp
