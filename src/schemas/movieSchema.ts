import Joi from "joi";

const movieSchema = Joi.object({
    title: Joi.string().required(),
    poster_picture: Joi.string().required(),
    description: Joi.string().required(),
    genre_ids: Joi.array().items(Joi.number().integer()).required(),
});

export default movieSchema;
