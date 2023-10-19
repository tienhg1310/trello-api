import { StatusCodes } from 'http-status-codes'
import { boardService } from '~/services/boardService'

const createNew = async (req, res, next) => {
  try {
    // console.log('req.body: ', req.body)
    // console.log('req.query: ', req.query)
    // console.log('req.params: ', req.params)
    // console.log('req.files: ', req.files)
    // console.log('req.cookies: ', req.cookies)
    // console.log('req.jwtDecoded: ', req.jwtDecoded)

    // dieu huong du lieu sang tang service
    const createdBoard = await boardService.createNew(req.body)
    // co kq thi tra ve
    res.status(StatusCodes.CREATED).json({ ...createdBoard })
  } catch (error) {
    next(error)
  }
}
const getDetails = async (req, res, next) => {
  try {
    const boardId = req.params.id
    const board = await boardService.getDetails(boardId)

    res.status(StatusCodes.OK).json({ ...board })
  } catch (error) {
    next(error)
  }
}

export const boardController = {
  createNew,
  getDetails
}
