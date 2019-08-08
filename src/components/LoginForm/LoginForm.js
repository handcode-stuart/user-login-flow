import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import StyledLoginForm from "./styles";
import TermsModal from "../TermsModal/TermsModal";
import Container from "../Container/Container";

const LoginForm = () => {
    const authContext = useContext(AuthContext);

    const [data, setData] = useState({
        email: "",
        password: "",
        tc_acknowledgment: false,
    });

    const [termsModalStatus, setTermsModalStatus] = useState(false);

    const handleChange = e => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const handleTCChange = e => {
        setData({ ...data, tc_acknowledgment: !data.tc_acknowledgment });
    };

    const handleSubmit = e => {
        e.preventDefault();
        if (data.tc_acknowledgment) {
            authContext.authenticateUser({ email: data.email, password: data.password });
        }
    };

    return (
        <>
            {termsModalStatus && <TermsModal closeTermsModal={() => setTermsModalStatus(false)} />}
            <StyledLoginForm>
                <Container>
                    <form onSubmit={handleSubmit}>
                        <div className='form-group'>
                            <label htmlFor='email'>
                                <span>Email address</span>
                                <br />
                                <input
                                    type='email'
                                    name='email'
                                    value={data.email}
                                    placeholder='johnsmith@gmail.com'
                                    onChange={handleChange}
                                    required
                                />
                            </label>
                        </div>
                        <div className='form-group  password'>
                            <label htmlFor='password'>
                                <span>Password</span>
                                <br />
                                <input
                                    type='password'
                                    name='password'
                                    value={data.password}
                                    placeholder='●●●●●●●●●●●●'
                                    onChange={handleChange}
                                    required
                                />
                            </label>
                        </div>
                        {authContext.errors && <div className='errors'>Incorrect credentials</div>}
                        <div className='form-group  forgot-password'>
                            <Link to='/'>Forgot your password?</Link>
                        </div>
                        <div className='form-group  tc-acknowledgment'>
                            <label htmlFor='tc_acknowledgment'>
                                <input
                                    type='checkbox'
                                    name='tc_acknowledgment'
                                    value={data.tc_acknowledgment}
                                    onChange={handleTCChange}
                                />
                                <div className='tc-copy'>
                                    You acknowledge that you have read the{" "}
                                    <span>Privacy Policy</span> and that you agree to the{" "}
                                    <span onClick={() => setTermsModalStatus(true)}>
                                        Terms &amp; Conditions
                                    </span>
                                </div>
                            </label>
                        </div>
                        <div className='form-group'>
                            <input type='submit' value='Log in' />
                        </div>
                    </form>
                </Container>
            </StyledLoginForm>
        </>
    );
};

export default LoginForm;
