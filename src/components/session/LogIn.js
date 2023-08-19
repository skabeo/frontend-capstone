/* eslint-disable consistent-return */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, resetErrorState } from '../../redux/sessions/sessionSlice';

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
      <div className="session-container">
        <div className="heading">
          <h1>Login</h1>
        </div>
        <div className="errors">
          <p style={{ color: 'red' }}>{error}</p>
        </div>
        <div className="form-container">
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="form-group">
              <input type="email" id="email" ref={emailRef} className="input_field" required />
              <label htmlFor="email" className="input_label">
                Email address
              </label>
            </div>
            <div className="form-group">
              <input type={showPassword ? 'text' : 'password'} id="password" ref={passwordRef} className="input_field" required />
              <label htmlFor="password" className="input_label">
                Password
              </label>
              <button type="button" onClick={() => setShowPassword(!showPassword)}>{showPassword ? <FaEye /> : <FaEyeSlash />}</button>
            </div>
            <div className="submit-btn">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
        <div>
          <p>
            Don&apos;t have an account yet?
            <Link to="/signup">Sign Up</Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default LogIn;
