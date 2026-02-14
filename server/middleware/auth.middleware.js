// middleware/auth.middleware.js

const isAdmin = (req, res, next) => {
  // For now, we'll just assume the user is an admin.
  // In a real application, you would have logic to check for admin privileges.
  console.log('Admin middleware hit');
  next();
};

module.exports = { isAdmin };
