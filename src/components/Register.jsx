import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../AuthLayout/AuthProvider';
import { toast } from 'react-toastify';


const Register = () => {
    const { createUser, setUser, updateUser } = use(AuthContext);
    const [error, setError] = useState("")

    const navigate = useNavigate();
    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const fullName = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
            .then(result => {
                const user = result.user;
                updateUser({ displayName: fullName }).then(() => {
                    setUser({ ...user, displayName: fullName });
                })
                    .catch((error) => {
                        setUser(error)
                    })
                toast.success("Register Successful")
                navigate('/');
            })
            .catch(error => {
                const errorMessage = error.message;
                setError(errorMessage);

            })
    }
    return (
        <div className='flex justify-center min-h-screen items-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl ">
            
                    <div className="card-body">
                        <h1 className='font-semibold text-lg text-center'>Register your account</h1>
                        <form onSubmit={handleRegister} className="fieldset">
                            <label className="label">Full Name</label>
                            <input type="text" name='name' className="input" placeholder="Name" required />
                            <label className="label">Email</label>
                            <input type="email" name='email' className="input" placeholder="Email" required />
                            <label className="label">Password</label>
                            <input type="password" name='password' className="input" placeholder="Password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                title="Must be more than 8 characters, including number, lowercase letter, uppercase letter" required />
                            {error && <p className='text-xs text-red-600'> {error} </p>}

                            <button type='submit' className="btn btn-neutral mt-4">Register</button>
                        </form>
                        <p className='text-sm  '>Already hanve an accout. <span className='text-amber-400 underline'><Link to='/login'>Login</Link></span></p>
                    </div>
        
            </div>
        </div>
    );
};

export default Register;