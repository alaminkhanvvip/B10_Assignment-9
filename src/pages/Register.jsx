import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useAuth } from '../contexts/AuthContext';
import toast from 'react-hot-toast';
import { validatePassword } from '../utils/validation';
import { PageTitle } from '../hooks/useTitle';

const Register = () => {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { signup, googleLogin, updateUserProfile } = useAuth();
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();



  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const result = await signup(data.email, data.password);
      await updateUserProfile(data.name, data.photoURL);
      toast.success('Account created successfully');
      navigate('/');
    } catch (error) {
      toast.error('Failed to create account: ' + error.message);
    }
    setLoading(false);
  };

  const handleGoogleLogin = async () => {
    try {
      setLoading(true);
      await googleLogin();
      toast.success('Account created successfully');
      navigate('/');
    } catch (error) {
      toast.error('Failed to create account with Google');
    }
    setLoading(false);
  };

  return (
    <>
      <PageTitle title="Register" description="Join our community and help bring warmth to those in need across Bangladesh." />
      <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold text-primary">❄️ Join Our Mission!</h1>
          <p className="py-6 text-lg">Create your account and start making a difference in vulnerable communities across Bangladesh.</p>
          <div className="alert alert-info">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <span>Join 200+ volunteers helping families stay warm!</span>
          </div>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="input input-bordered"
                {...register('name', { required: 'Name is required' })}
              />
              {errors.name && <span className="text-error text-sm">{errors.name.message}</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                {...register('email', { required: 'Email is required' })}
              />
              {errors.email && <span className="text-error text-sm">{errors.email.message}</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
                <span className="label-text-alt">Optional</span>
              </label>
              <input
                type="url"
                placeholder="https://example.com/photo.jpg"
                className="input input-bordered"
                {...register('photoURL')}
              />
              <label className="label">
                <span className="label-text-alt">Profile picture for your account</span>
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="password"
                  className="input input-bordered w-full pr-10"
                  {...register('password', { 
                    required: 'Password is required',
                    validate: validatePassword
                  })}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? '🙈' : '👁️'}
                </button>
              </div>
              {errors.password && <span className="text-error text-sm">{errors.password.message}</span>}
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary" disabled={loading}>
                {loading ? 'Creating Account...' : 'Register'}
              </button>
            </div>
            <div className="divider">OR</div>
            <button type="button" onClick={handleGoogleLogin} className="btn btn-outline" disabled={loading}>
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Continue with Google
            </button>
            <p className="text-center mt-4">
              Already have an account? <Link to="/login" className="link link-primary">Login</Link>
            </p>
          </form>
        </div>
      </div>
      </div>
    </>
  );
};

export default Register;