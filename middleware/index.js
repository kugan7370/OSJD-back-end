var jwt = require('jsonwebtoken');

exports.requireSignin = (req, res, next) => {
    if (req.headers.authorization) {
        const token = req.headers.authorization.split(" ")[1];
        const user = jwt.verify(token, 'OSJD')
        req.user = user;
    }
    else {
        return res.status(400).json({ message: 'invalid Authorizations' })
    }

    next();
}