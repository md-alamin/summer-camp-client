import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { FaGoogle } from 'react-icons/fa';
import Lottie from 'react-lottie';
import loginImg from '../../assets/login-page.json';

const Register = () => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();

	const handleRegister = (data) => {
		console.log(data);
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
			<h1 className="text-5xl text-center font-bold">Please Register</h1>
			<div className="hero py-6 lg:w-2/3 mx-auto">
				<div className="hero-content flex-col lg:flex-row-reverse items-start">
					<div>
						<Lottie options={defaultOptions} height={500} width={400} />
					</div>
					<form
						onSubmit={handleSubmit(handleRegister)}
						className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
					>
						<div className="card-body">
							<div className="form-control">
								<label className="label">
									<span className="label-text">Name</span>
								</label>
								<input
									type="text"
									placeholder="Enter name"
									className="input input-bordered"
									{...register('name', {
										required: 'Name is required',
									})}
								/>
								<span className="text-red-600">{errors.name?.message}</span>
							</div>
							<div className="form-control">
								<label className="label">
									<span className="label-text">Email</span>
								</label>
								<input
									type="email"
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
								<input
									type="password"
									placeholder="Enter password"
									className="input input-bordered"
									{...register('password', {
										required: 'Password is required',
										pattern: {
											value: /^(?=.*[A-Z])(?=.*[@#$%^&+=])(?=.{6,}).*$/,
											message: 'Password must be at least 6 letters or numbers',
										},
									})}
								/>
								<span className="text-red-600">{errors.password?.message}</span>
							</div>
							<div className="form-control">
								<label className="label">
									<span className="label-text">Confirm password</span>
								</label>
								<input
									type="password"
									placeholder="Confirm password"
									className="input input-bordered"
									{...register('confirmPassword', {
										required: 'Confirm password is required',
										validate: (value) =>
											value === watch('password') ||
											'The passwords do not match',
									})}
								/>
								<span className="text-red-600">
									{errors.confirmPassword?.message}
								</span>
							</div>
							<div className="form-control">
								<label className="label">
									<span className="label-text">Photo URL</span>
								</label>
								<input
									type="text"
									placeholder="Enter photo URL"
									className="input input-bordered"
									{...register('photo')}
								/>
							</div>

							<label className="label mt-2">
								<p className="text-center">
									Or Register using Google
									<FaGoogle className="mx-auto mt-2 text-blue-600  cursor-pointer"></FaGoogle>
								</p>
							</label>
							<div className="form-control mt-6">
								<input
									className="btn btn-primary"
									type="submit"
									value="Register"
								/>
							</div>
							<p className="mt-4">
								Already have a subscription? Please{' '}
								<Link to="/login" className="link-primary link-hover">
									Login
								</Link>
							</p>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Register;
