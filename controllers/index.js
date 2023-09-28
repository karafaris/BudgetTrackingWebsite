const router = require('express').Router();

// Import your user routes
const userRoutes = require('./user-routes');

// Define routes
router.use('/api/users', userRoutes);

module.exports = router;
