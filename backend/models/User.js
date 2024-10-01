const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    parent_name: {
        type: String,
        required: true
    },
    parent_no: {
        type: String,
        required: true
    },
    parent_email: {
        type: String,
        required: true
    },
    grad: {
        type: String,
        required: true
    },
    event: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

// Hash password before saving to the database
userSchema.pre('save', async function(next) {
    if (!this.isModified('password')) return next();
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

// Create the User model
const User = mongoose.model('User', userSchema);

module.exports = User;
