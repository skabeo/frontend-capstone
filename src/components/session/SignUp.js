import { useRef, useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { signupUser } from '../../redux/sessions/sessionSlice';

const SignUp = () => {
  const dispatch = useDispatch();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const nameRef = useRef(null);
  let errorMessage = [];
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const errorMsgs = '';
  const [showPasswordConfirmation, setShowPasswordConfirmation] = useState(false);

  useEffect(() => {
    nameRef.current.focus();
    if (errorMessage.length === 0) {
      setError(errorMessage);
      errorMessage = [];
      // dispatch(clearErrorAction());
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

    await dispatch(signupUser(payload));

    if (errorMsgs) {
      setError(errorMsgs);
      // dispatch(clearErrorAction());
    } else {
      navigate('/');
    }
  };

  return (
    <section className="session-form">
      <div className="session-container">
        <div className="heading">
          <h1>Sign Up</h1>
        </div>
        <div className="errors">
          <p style={{ color: 'red' }}>{error}</p>
        </div>
        <div className="form-container">
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="form-group">
              <input type="text" id="email" ref={nameRef} className="input_field" required />
              <label htmlFor="name" className="input_label">
                Full Name
              </label>
            </div>
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
              <button type="button" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <FaEye /> : <FaEyeSlash /> }
              </button>
            </div>
            <div className="form-group">
              <input type={showPasswordConfirmation ? 'text' : 'password'} id="password-confirmation" ref={passwordConfirmRef} className="input_field" required />
              <label htmlFor="password-confirmation" className="input_label">
                Password Confirmation
              </label>
              <button type="button" onClick={() => setShowPasswordConfirmation(!showPasswordConfirmation)}>{showPasswordConfirmation ? <FaEye /> : <FaEyeSlash />}</button>
            </div>
            <div className="submit-btn">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
        <div>
          <p>
            Already have an account?
            <Link to="/signin">Login</Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
