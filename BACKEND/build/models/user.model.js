"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GENDER = void 0;
var mongoose_1 = require("mongoose");
exports.GENDER = {
    MALE: 1,
    FEMALE: 0,
};
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
    gender: {
        type: String,
        enum: [exports.GENDER.MALE, exports.GENDER.FEMALE],
    },
}, { timestamps: true });
var User = (0, mongoose_1.model)('user', UserSchema);
exports.default = User;
