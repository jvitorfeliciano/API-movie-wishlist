import Joi from "joi";

const movieUpdateSchema = Joi.object({
    description: Joi.string().required(),
});

export default movieUpdateSchema;
