"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var UserSchema = new mongoose_1.Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        min: 6,
    },
    fullName: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
    },
}, { timestamps: true });
var User = (0, mongoose_1.model)('user', UserSchema);
exports.default = User;
