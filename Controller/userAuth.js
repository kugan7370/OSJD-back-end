const User = require('../Model/userSignUp')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');


exports.userSignup = async (req, res) => {
    // get from post data
    const { username, email, Password, ConfirmPassword } = req.body;


    // check if already email available or not
    const existingUser = await User.findOne({ email })
    if (existingUser) {
        return res.status(400).json({
            error: 'user Already exits'
        })
    }
    else {

        if (Password !== ConfirmPassword) {

            return res.status(400).json({
                error: 'passwords should be same'
            })
        }
        else {

            //change passwor dinto hash password
            const hashPassword = await bcrypt.hashSync(Password, 10);



            //save into variable
            const _user = new User({
                username,
                email,
                Password: hashPassword,

            })

            // save data into database
            const result = await _user.save()
            if (!result) {
                return res.status(400).json({
                    error: 'message is something wrong'
                })
            }
            else {
                return res.status(201).json({
                    message: 'user created successfully'
                })
            }
        }

    }

}

exports.UserSignIn = async (req, res) => {
    const { email, Password } = req.body;

    const getUser = await User.findOne({ email })

    if (!getUser) {
        return res.status(400).json({ message: 'invalid email' });

    }
    else {
        const isPasswordCorrect = await bcrypt.compare(Password, getUser.Password)
        if (isPasswordCorrect && getUser.role === "user") {
            const token = jwt.sign({ _id: getUser._id, role: getUser.role }, 'OSJD', { expiresIn: '1h' });
            const { username, email, role, } = getUser;
            res.status(201).json({
                token,
                user: {
                    username,
                    email,
                    role,

                }
            })
        }
        else {
            return res.status(400).json({
                message: 'invalid password'
            })
        }


    }


}