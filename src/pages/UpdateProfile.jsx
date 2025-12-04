import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useAuth } from '../contexts/AuthContext';
import toast from 'react-hot-toast';

const UpdateProfile = () => {
  const [loading, setLoading] = useState(false);
  const { currentUser, updateUserProfile } = useAuth();
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      name: currentUser?.displayName || '',
      photoURL: currentUser?.photoURL || ''
    }
  });

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      await updateUserProfile(data.name, data.photoURL);
      toast.success('Profile updated successfully');
      navigate('/dashboard');
    } catch (error) {
      toast.error('Failed to update profile: ' + error.message);
    }
    setLoading(false);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">Update Profile</h1>
        
        <div className="card bg-base-100 shadow-xl">
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
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="url"
                placeholder="Photo URL"
                className="input input-bordered"
                {...register('photoURL', { required: 'Photo URL is required' })}
              />
              {errors.photoURL && <span className="text-error text-sm">{errors.photoURL.message}</span>}
            </div>

            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary" disabled={loading}>
                {loading ? 'Updating...' : 'Update Information'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;