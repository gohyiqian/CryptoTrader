const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = function (req, res, next) {
  //Get token from header
  const token = req.header("x-auth-token");
  // console.log(req);

  //Check if no token
  if (!token) {
    return res.status(401).json({ msg: "No token, authorization denied" });
  }

  //Verify token
  try {
    const decoded = jwt.verify(token, config.get("jwtSecret"));
    // console.log(decoded)
    req.user = decoded.user;
    next();
  } catch (e) {
    console.log(e.message);
    res.status(401).json({ msg: "Token is not valid" });
  }
};
