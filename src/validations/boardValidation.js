import Joi from 'joi'
import { StatusCodes } from 'http-status-codes'
import ApiError from '~/utils/ApiError'
import { BOARD_TYPES } from '~/utils/constants'

const createNew = async (req, res, next) => {
  const correctCondition = Joi.object({
    title: Joi.string().required().min(3).max(50).trim().strict().messages({
      'any.required': 'Title is required (tienhg2001)',
      'string.empty': 'Title not allowed to be empty (tienhg2001)',
      'string.min': 'Title must be at least 3 characters long (tienhg2001)',
      'string.max':
        'Title length must be less than or equal to 5 characters long (tienhg2001)',
      'string.trim':
        'Title must not have leading or trailing white space (tienhg2001)'
    }),
    description: Joi.string()
      .required()
      .min(3)
      .max(256)
      .trim()
      .strict()
      .messages({
        'any.required': 'Description is required (tienhg2001)',
        'string.empty': 'Description not allowed to be empty (tienhg2001)',
        'string.min':
          'Description must be at least 3 characters long (tienhg2001)',
        'string.max':
          'Description length must be less than or equal to 256 characters long (tienhg2001)',
        'string.trim':
          'Description must not have leading or trailing white space (tienhg2001)'
      }),
    type: Joi.string().valid(BOARD_TYPES.PUBLIC, BOARD_TYPES.PRIVATE).required()
  })

  try {
    // xu li validation req.body
    // abortEarly: false truong hop co nhieu loi tra ve tat ca
    await correctCondition.validateAsync(req.body, { abortEarly: false })
    // validate hop le thi di tiep vao controller (check controller o file route)
    next()
  } catch (error) {
    next(new ApiError(StatusCodes.UNPROCESSABLE_ENTITY, error.message))
  }
}

export const boardValidation = {
  createNew
}
