const Joi = require('joi');

const schema = Joi.object({
    original_path: Joi.string().email().required(),
    size: Joi.number().required(),
    redundancy: Joi.number().required(),
    expires: Joi.number().required(),
    autorenew: Joi.boolean().required(),
    chunk_count: Joi.number().required(),
    ul_status: Joi.string().required()
})

module.exports = schema;