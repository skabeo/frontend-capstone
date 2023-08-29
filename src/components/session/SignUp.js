/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable consistent-return */
import { useRef, useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { signUpUser, resetErrorState } from '../../redux/sessions/sessionSlice';
import back from '../../assets/back.png';

const SignUp = () => {
  const dispatch = useDispatch();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const nameRef = useRef(null);
  const errorMessage = [];
  const [error, setError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const errorMsgs = '';
  const [showPasswordConfirmation, setShowPasswordConfirmation] = useState(false);

  useEffect(() => {
    nameRef.current.focus();
    if (errorMessage.length === 0) {
      setError(errorMessage);
      dispatch(resetErrorState());
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (!emailRef.current.value || !passwordRef.current.value || !nameRef.current.value) {
      return setError('Please fill out all fields');
    }
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('The passwords do not match');
    }

    const payload = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    await dispatch(signUpUser(payload));

    if (errorMsgs) {
      setError(errorMsgs);
    } else {
      navigate('/');
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
        <div>
          <Link to="/signin" className="back-btn-container">
            <img src={back} alt="back-button" className="back-btn" />
          </Link>
        </div>
        <div className="errors">
          <p>{error}</p>
        </div>
        <h3 className="signin-header top-gap">Registration</h3>
        <div className="form-container">
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="form-group">
              <input
                type="text"
                id="email"
                ref={nameRef}
                className="input_field"
                placeholder="Full name"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                id="email"
                ref={emailRef}
                className="input_field"
                placeholder="Email address"
                required
              />
            </div>
            <div className="password-container">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                ref={passwordRef}
                placeholder="Enter password"
                className="input_field"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="password-toggle-button"
              >
                {showPassword ? <FaEye /> : <FaEyeSlash /> }
              </button>
            </div>
            <div className="password-container">
              <input
                type={showPasswordConfirmation ? 'text' : 'password'}
                id="password-confirmation"
                placeholder="Confirm Password"
                ref={passwordConfirmRef}
                className="input_field"
                required
              />
              <button
                type="button"
                onClick={() => setShowPasswordConfirmation(!showPasswordConfirmation)}
                className="password-toggle-button"
              >
                {showPasswordConfirmation ? <FaEye /> : <FaEyeSlash />}
              </button>
            </div>
            <button type="submit" className="submit">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
