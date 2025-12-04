import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { formatDate } from '../utils/helpers';

const Dashboard = () => {
  const { currentUser } = useAuth();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Welcome, {currentUser?.displayName || 'User'}!</h1>
        
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title mb-4">Profile Information</h2>
            
            <div className="flex items-center space-x-4 mb-6">
              <div className="avatar">
                <div className="w-20 rounded-full">
                  <img src={currentUser?.photoURL || "https://via.placeholder.com/80"} alt="Profile" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold">{currentUser?.displayName || 'No name provided'}</h3>
                <p className="text-gray-600">{currentUser?.email}</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="stat">
                <div className="stat-title">Name</div>
                <div className="stat-value text-lg">{currentUser?.displayName || 'Not provided'}</div>
              </div>
              <div className="stat">
                <div className="stat-title">Email</div>
                <div className="stat-value text-lg">{currentUser?.email}</div>
              </div>
              <div className="stat">
                <div className="stat-title">Account Created</div>
                <div className="stat-value text-sm">{formatDate(currentUser?.metadata?.creationTime)}</div>
              </div>
              <div className="stat">
                <div className="stat-title">Last Sign In</div>
                <div className="stat-value text-sm">{formatDate(currentUser?.metadata?.lastSignInTime)}</div>
              </div>
            </div>

            <div className="card-actions justify-end mt-6">
              <Link to="/update-profile" className="btn btn-primary">Update Profile</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;