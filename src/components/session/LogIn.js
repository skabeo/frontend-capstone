/* eslint-disable consistent-return */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, resetErrorState } from '../../redux/sessions/sessionSlice';
import '../../styles/session/signin.css';

const LogIn = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState([]);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const errorMessages = useSelector((state) => state.session.errorMessages);

  useEffect(() => {
    emailRef?.current.focus();
    if (errorMessages.length > 0) {
      setError(errorMessages);
      dispatch(resetErrorState());
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (!emailRef.current.value || !passwordRef.current.value) {
      return setError('Please fill out all fields');
    }

    const payload = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    await dispatch(loginUser(payload));

    if (errorMessages.length === 0) {
      navigate('/');
    } else {
      setError(errorMessages);
    }
  };

  return (
    <section className="session-form">
      <div className="center-text">
        <p className="bold">get more</p>
        <p className="bold">properties</p>
        <hr className="logo-line" />
      </div>
      <div className="session-container">
        <div className="errors">
          <p style={{ color: 'red' }}>{error}</p>
        </div>
        <h3 className="signin-header">Sign in to your account</h3>
        <div className="form-container">
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="form-group">
              <input
                type="email"
                id="email"
                ref={emailRef}
                className="input_field"
                placeholder="Email"
                required
              />
            </div>
            <div className="password-container">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                ref={passwordRef}
                className="input_field"
                placeholder="Password"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="password-toggle-button"
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </button>
            </div>
            <button type="button" className="submit">Submit</button>
          </form>
        </div>
        <div className="horizontal-line-container">
          <hr className="horizontal-line" />
          <span className="or-text">or</span>
          <hr className="horizontal-line" />
        </div>
        <div className="optional-container">
          <h3>Sign up to create new account</h3>
          <Link to="/signup">
            <button className="sign-up" type="button">Sign Up</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LogIn;
