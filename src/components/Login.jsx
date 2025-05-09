import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../AuthLayout/AuthProvider';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';

const Login = () => {
    const { logInUser } = use(AuthContext);
    const [error, setError] = useState("")
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        logInUser(email, password)
            .then(result => {
                const user = result.user;
                toast.success(user);
                navigate('/');
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
            });
    }

    return (
        <div className='flex justify-center min-h-screen items-center '>
            {/* Login Box with animation */}
            <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                 className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl"
               
            >
                <div className="card-body">
                    <h1 className='font-semibold text-lg text-center'>Login your account</h1>
                    <form onSubmit={handleLogin} className="fieldset">
                        <label className="label">Email</label>
                        <input type="email" name='email' className="input" placeholder="Email" required />
                        <label className="label">Password</label>
                        <input type="password" name='password' className="input" placeholder="Password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                            title="Must be more than 8 characters, including number, lowercase letter, uppercase letter" required />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        {error && <p className='text-xs text-red-600'> {error} </p>}
                        <button type='submit' className="btn btn-neutral mt-4">Login</button>
                    </form>
                    <p className='text-sm  '>Don't have an account? <span className='text-amber-400 underline'><Link to='/register'>Register</Link></span></p>
                </div>
            </motion.div>
        </div>
    );
};

export default Login;
