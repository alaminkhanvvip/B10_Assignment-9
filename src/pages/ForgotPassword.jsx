import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useAuth } from '../contexts/AuthContext';
import toast from 'react-hot-toast';

const ForgotPassword = () => {
  const [loading, setLoading] = useState(false);
  const { resetPassword } = useAuth();
  const location = useLocation();
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      email: location.state?.email || ''
    }
  });

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      await resetPassword(data.email);
      toast.success('Password reset email sent! Check your inbox.');
    } catch (error) {
      toast.error('Failed to send reset email: ' + error.message);
    }
    setLoading(false);
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Reset Password</h1>
          <p className="py-6">Enter your email address and we'll send you a link to reset your password.</p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
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
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary" disabled={loading}>
                {loading ? 'Sending...' : 'Reset Password'}
              </button>
            </div>
            <p className="text-center mt-4">
              Remember your password? <Link to="/login" className="link link-primary">Login</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;