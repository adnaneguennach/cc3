import React, { useState } from 'react';
import loginImg from '../assets/loginpage.jpg';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebaseConfig';
// import "./StylesLogin.css"


const Login = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, formData.email, formData.password);
            localStorage.setItem('userEmail', formData.email)
            setError(null);
            navigate('/Dashboard');
        } catch (err) {
            setError('Invalid email or password');
        }
    };
    
    return (
        <div className="loginContainer flex w-full h-screen">
            <div className="w-2/4 h-full relative flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${loginImg})` }}>
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="relative z-10 text-white text-center px-8">
                    <h1 className="text-4xl text-left font-bold mb-3">WELCOME</h1>
                    <p className="text-lg text-left my-5">A WebApp that holds all the functionalities to manage your gym <br /> in a single click.</p>
                    <div className="flex justify-left">
                        <a href="mailto:adnanegu5@gmail.com" className="btn bg-blue-400 p-2 text-[15px] px-3 rounded">Need Help?</a>
                    </div>
                </div>
            </div>
            <div className="w-2/4 h-full bg-white flex items-center justify-center">
                <div className="w-full max-w-lg p-8">
                    <h1 className="text-4xl text-left font-bold mb-7 text-blue-400">LOGIN</h1>
                    {error && <span className='text-red-500'>{error}</span>}
                    <form onSubmit={handleSubmit}>
                        <div className="input flex flex-col mb-4">
                            <label htmlFor="email" className="mb-2 text-[14px] text-gray-500">Email</label>
                            <input type="email" name="email" onChange={handleChange} id="email" placeholder="Email" className="outline-none p-2 border rounded" />
                        </div>
                        <div className="input flex flex-col mb-6">
                            <label htmlFor="password" className="mb-2 text-[14px] text-gray-500">Password</label>
                            <input type="password" name="password" onChange={handleChange} id="password" placeholder="Password" className="outline-none p-2 border rounded" />
                        </div>
                        <button className="btn bg-blue-400 text-white p-2 rounded w-full hover:bg-blue-700" type="submit">Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
