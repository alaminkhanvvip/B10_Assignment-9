import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-9xl font-bold">404</h1>
          <h2 className="text-3xl font-bold mb-4">Page Not Found</h2>
          <p className="mb-8">The page you're looking for doesn't exist or has been moved.</p>
          <Link to="/" className="btn btn-primary">Go Back Home</Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;