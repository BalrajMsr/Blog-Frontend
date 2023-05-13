import React, { useState } from "react";

function SignInPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [emailError, setEmailError] = useState("");

    const handleEmailChange = (event) => {
        setEmail(event.target.value);        
        setEmailError("");
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
        setPasswordError("");
    };


    const handleSubmit = (event) => {
        event.preventDefault();
        // const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\\.,;:\s@\"]+\.)+[^<>()[\]\\.,;:\s@\"]{2,})$/;
        // if (!emailRegex.test(email)) {
        //     setEmailError("Invalid email address.");
        //     return;
        // }

        if (!password.match(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)) {
            setPasswordError("Password must contain at least 1 uppercase, 1 lowercase, 1 digit, and 1 special.");
            return;
        }
        // perform sign-in logic here
    };

    return (
        <div className="SignInPage">
            <div className="card">
                <h1 className="card-header">Sign In</h1>
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                className="form-control"
                                value={email}
                                onChange={handleEmailChange}
                                required
                            />
                            {emailError && <div className="invalid-feedback">{emailError}</div>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password:</label>
                            <input
                                type="password"
                                id="password"
                                className="form-control"
                                value={password}
                                onChange={handlePasswordChange}
                                required
                            />
                            {passwordError && <div className="invalid-feedback">{passwordError}</div>}
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Sign In
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SignInPage;
