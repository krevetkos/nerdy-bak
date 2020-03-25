const { registerNewUser, loginUser } = require('./user.services');
async function register(req, res, next) {
    try {
        const data = await registerNewUser(req.body);
        console.log(data)
        res.json(data);
    } catch (e) {
        next(e)
    };
};
async function login(req, res, next) {
    try {
        const data = await loginUser(req.body)
        res.json(data)
    } catch (e) {
        console.log(e)
    }
}
exports.login = login;
exports.register = register;