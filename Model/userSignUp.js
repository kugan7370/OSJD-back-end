const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,

    },
    email: {
        type: String,
        required: true,
        unique: true

    },
    Password: {
        type: String,
        required: true,

    },
    ConfirmPassword: {
        type: String

    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },

},
    { timestamps: true }
)

// // for password hash
// userSchema.virtual('password').set(function (password) {
//     this.hashPassword = bcrypt.hashSync(password, 10);
// })



// //for password authendication
// userSchema.methods = {
//     authenticate: function (password) {
//         return bcrypt.compareSync(password, this.hashPassword);

//     }
// }



module.exports = mongoose.model('User', userSchema)