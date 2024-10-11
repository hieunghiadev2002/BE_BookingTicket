const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema(
    {
        fullName:
        {
            type: String,
            require: true,
            trim:  true
        },

        email:
        {
            type: String,
            unique: true,
            lowercases: true,
            trim: true,
        },

        phoneNumber:
        {
            type: String,
            require: true,
            unique: true,
            trim: true,
        },

        password:
        {
            type: String,
            require: true, 
        },

        role:
        {
            type: String,
            enum: ['user', 'admin'],
            default: 'user',
            
        },
        createdAt:
        {
            type: Date,
            default: Date.now
        }, 
        isActive: {
            type: Boolean,
            default: false
        }
    },
    {timestamps: true}
);




module.exports = mongoose.model('user', userSchema);