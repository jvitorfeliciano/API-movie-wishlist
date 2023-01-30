import Joi from "joi";

const userSignUpSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    confirmPassword: Joi.ref("password"),
});

const userSignInSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
});

export { userSignUpSchema, userSignInSchema };
