var jwt = require('jsonwebtoken');

exports.requireSignin = (req, res, next) => {

    if (req.headers.authorization) {
        const token = req.headers.authorization.split(" ")[1];

        const user = jwt.verify(token, 'OSJD')
        // console.log("user=======>", user);
        req.user = user;
    }
    else {
        return res.status(400).json({ message: 'invalid Authorizations' })
    }

    next();
}

// import jwt from "jsonwebtoken";



// exports.requireSignin = (req, res, next) => {
//
//     const token = req.cookies.access_token;
//     if (!token) {
//         return res.status(401).json({ message: '"You are not authenticated!"' })
//     }
//
//     jwt.verify(token, 'OSJD', (err, user) => {
//         if (err) {
//             return res.status(403).json({ message: "Token is not valid!" })
//         }
//         console.log(user);
//         req.user = user;
//         next()
//     });
// };