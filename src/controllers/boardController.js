import { StatusCodes } from 'http-status-codes'

const createNew = async (req, res, next) => {
  try {
    console.log('req.body: ', req.body)
    console.log('req.query: ', req.query)
    console.log('req.params: ', req.params)
    console.log('req.files: ', req.files)
    console.log('req.cookies: ', req.cookies)
    console.log('req.jwtDecoded: ', req.jwtDecoded)

    // dieu huong du lieu sang tang service

    // co kq thi tra ve
    res.status(StatusCodes.CREATED).json({
      code: StatusCodes.CREATED,
      message: 'POST from Controller: API create new board'
    })
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      code: StatusCodes.UNPROCESSABLE_ENTITY,
      errors: error.message
    })
  }
}

export const boardController = {
  createNew
}
