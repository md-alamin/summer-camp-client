import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { FaEye, FaGoogle } from 'react-icons/fa';
import Lottie from 'react-lottie';
import loginImg from '../../assets/login-page.json';

const Login = () => {
	const [passType, setPassType] = useState('password');
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const handleLogin = (data) => {
		console.log(data);
	};

	const setType = () => {
		if (passType === 'password') {
			setPassType('text');
		} else {
			setPassType('password');
		}
	};

	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: loginImg,
		rendererSettings: {
			preserveAspectRatio: 'xMidYMid slice',
		},
	};

	return (
		<div>
			<h1 className="text-5xl text-center font-bold">Please Login</h1>
			<div className="hero py-6 lg:w-3/4 mx-auto">
				<div className="hero-content flex-col lg:flex-row lg:gap-10 ">
					<div>
						<Lottie options={defaultOptions} height={500} width={400} />
					</div>
					<form
						onSubmit={handleSubmit(handleLogin)}
						className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
					>
						<div className="card-body">
							<div className="form-control">
								<label className="label">
									<span className="label-text">Email</span>
								</label>
								<input
									type="text"
									placeholder="Enter email"
									className="input input-bordered"
									{...register('email', {
										required: 'Email is required',
										pattern: {
											value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
											message: 'Invalid email address',
										},
									})}
								/>
								<span className="text-red-600">{errors.email?.message}</span>
							</div>
							<div className="form-control">
								<label className="label">
									<span className="label-text">Password</span>
								</label>
								<div className="relative">
									<input
										type={passType}
										placeholder="Enter password"
										className="input input-bordered w-full"
										{...register('password', {
											required: 'Password is required',
											pattern: {
												value: /^(?=.*[A-Za-z0-9]).{6,}$/,
												message:
													'Password must be at least 6 letters or numbers',
											},
										})}
									/>
									<FaEye
										onClick={setType}
										size={20}
										className="absolute top-1/3 right-2 cursor-pointer"
									></FaEye>
								</div>
								<span className="text-red-600 mb-2">
									{errors.password?.message}
								</span>
							</div>

							<label className="label">
								<p className="text-center">
									Or Login using Google
									<FaGoogle className="mx-auto mt-2 text-blue-600  cursor-pointer"></FaGoogle>
								</p>
							</label>
							<div className="form-control mt-6">
								<input
									className="btn btn-primary"
									type="submit"
									value="Login"
								/>
							</div>
							<p className="mt-4">
								Do not have a subscription? Please{' '}
								<Link to="/register" className="link-primary link-hover">
									Register
								</Link>
							</p>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;
