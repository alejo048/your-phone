module.exports = ensureAuthorized = function(req, res, next) {  
  var bearerToken;
  var bearerHeader = req.headers["authorization"];
  console.log(bearerHeader)
  if (typeof bearerHeader !== 'undefined') {
    var bearer = bearerHeader.split(" ");
    bearerToken = bearer[1];
    req.token = bearerToken;
    next();
  } else {
    res.send(403 + " no puedes agregar info sin permisos de admin");
  }
}