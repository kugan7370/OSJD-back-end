// const User = require('../Model/userSignUp')

// exports.userSignup = (req, res) => {
//     // check if already email available or not
//     User.findOne({ email: req.body.email }).exec(async (error, user) => {
//         if (user) {
//             return res.status(400).json({
//                 error: 'user Already exits'
//             })
//         }

//         // get from post data
//         const { username, email, password } = req.body;

//         //change passwor dinto hash password
//         const hashPassword = await bcrypt.hash(password, 10);

//         //save into variable
//         const _user = new User({
//             username,
//             email,
//             hashPassword,

//         })

//         // save data into database
//         _user.save((error, data) => {
//             if (error) {
//                 return res.status(400).json({
//                     error: 'message is something wrong'
//                 })
//             }
//             if (data) {
//                 return res.status(201).json({
//                     message: 'user created successfully'
//                 })
//             }
//         })
//     })
// }