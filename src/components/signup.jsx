import {React, useState} from "react";
import config from "./config";

const SignUp = (props) => {
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
                body: JSON.stringify({
                  "email" : email,
                  "pass" : password,
                  "first_name" : firstName,
                  "last_name" : lastName,
              })
            })

            if (response.ok){
              const data = await response.json();
              console.log(data)
              alert('sign in successful');
              setSignedIn(true);
            }else{
              console.log(response)
              const data = await response.json();
              alert(data.message)
            }
        } catch (err) {
          console.log();
        }
    };

    if (signedIn){
      props.onFormSwitch('login')
    }

    return (
        <div className="Register">
            <h2>Login</h2>

            <form onSubmit={handleSubmit}>
                <label htmlFor="fName"></label>
                <input type="text" id="fname"
                    value={firstName}
                    onChange={handleFirstNameChange}
                    name="fname"
                    placeholder="your full name"
                    required
                    // Add required attribute for form validation
                />
                <label htmlFor="lName"></label>
                <input type="text" id="lname"
                    value={lastName}
                    onChange={handleLastNameChange}
                    name="lname"
                    placeholder="your full name"
                    required
                    // Add required attribute for form validation
                />
                <label htmlFor="email">Email:</label>
                <input type="text" id="email"
                    value={email}
                    onChange={handleEmailChange}
                    name="email"
                    placeholder="your_email@domain.com"
                    required
                    // Add required attribute for form validation
                />

                <label htmlFor="password">Password:</label>
                <input type="text" id="password"
                    value={password}
                    onChange={handlePasswordChange}
                    name="password"
                    minLength={8}
                    // Add minLength attribute for password validation
                    required
                    // Add required attribute for form validation
                />

                <button type="submit">Submit</button>
            </form>
            <button onClick={
                () => props.onFormSwitch('login')
            }>Already have account? Try LogIn</button>
        </div>

    )
}

export default SignUp
