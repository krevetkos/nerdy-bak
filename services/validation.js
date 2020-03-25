const Joi = require('joi')

function validateData(event, schema) {
    return (Joi.validate(event, schema))
}

exports.validateData = validateData