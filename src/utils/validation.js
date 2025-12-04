// Password validation utility
export const validatePassword = (password) => {
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasMinLength = password.length >= 6;

  if (!hasUpperCase) return 'Password must have an uppercase letter';
  if (!hasLowerCase) return 'Password must have a lowercase letter';
  if (!hasMinLength) return 'Password must be at least 6 characters';
  return true;
};

// Email validation utility
export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Form validation rules
export const VALIDATION_RULES = {
  email: {
    required: 'Email is required',
    pattern: {
      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: 'Please enter a valid email address'
    }
  },
  password: {
    required: 'Password is required',
    validate: validatePassword
  },
  name: {
    required: 'Name is required',
    minLength: {
      value: 2,
      message: 'Name must be at least 2 characters'
    }
  },
  photoURL: {
    required: 'Photo URL is required',
    pattern: {
      value: /^https?:\/\/.+\.(jpg|jpeg|png|gif|webp)$/i,
      message: 'Please enter a valid image URL'
    }
  }
};