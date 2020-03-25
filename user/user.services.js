const config = require('config')
const bcrypt = require('bcryptjs');
const { NewUserValidation } = require('../user/user.validation');
const { UserSchema } = require('./user.model');
const { generateAccessToken, generateRefreshToken } = require('../services/jwt-generator')

async function registerNewUser(body) {
    const salt = await config.get("salt");
    const userData = {
        email: body.email,
        password: await bcrypt.hash(body.password, salt),
    };
    await NewUserValidation(userData);
    await UserSchema.create(userData);
    const user = await UserSchema.findOne({ email: body.email });
    const payload = {
        email: user.email,
        password: user.password
    }
    accessToken = await generateAccessToken(payload);
    refreshToken = await generateRefreshToken(payload);
    return { user, accessToken, refreshToken };
}

async function loginUser(body) {
    const user = await UserSchema.findOne({ email: body.email });
    if (!user) throw new Error("Invalid data");
    const data = await bcrypt.compare(body.password, user.password);
    if (!data) throw new Error("Invalid data");
    const payload = {
        email: user.email,
        password: user.password
    }
    accessToken = await generateAccessToken(payload);
    refreshToken = await generateRefreshToken(payload);
    console.log(user.accessToken)
    return { user, accessToken, refreshToken }
}

exports.loginUser = loginUser;
exports.registerNewUser = registerNewUser;