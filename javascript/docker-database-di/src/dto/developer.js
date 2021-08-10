const Joi = require('joi');

const schema = Joi.object({
    email: Joi.string().email().required(),
    firstName: Joi.string().min(1).required(),
    middleNames: Joi.string().allow(null).empty('').default(null),
    lastName: Joi.string().min(1).required(),
})

module.exports = schema;