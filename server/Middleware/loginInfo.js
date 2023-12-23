const jwt = require('jsonwebtoken');

const secretKey = 'SAMPLE_SECRET_KEY'; // Replace with your actual secret key

// Middleware function for token verification
const verifyToken = (req, res, next) => {
  // Extract the token from the request headers or wherever it's sent
  const token = req.headers.authorization;

  if (!token) {
    // Token is missing, send a 401 Unauthorized response
    return res.status(401).json({ error: 'Unauthorized - Token missing' });
  }

  try {
    // Verify the token
    const decoded = jwt.verify(token, secretKey);
    
    // Attach the decoded payload to the request for further use
    req.user = decoded;

    // Continue to the next middleware or route handler
    next();
  } catch (error) {
    return res.status(401).json({ error: 'Unauthorized - Token invalid' });
  }
};

module.exports = verifyToken;
