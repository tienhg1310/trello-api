import { StatusCodes } from 'http-status-codes'
import express from 'express'

const Router = express.Router()

Router.route('/')
  .get((req, res) => {
    res.status(StatusCodes.OK).json({
      code: StatusCodes.OK,
      message: 'GET: API get list board'
    })
  })
  .post((req, res) => {
    res.status(StatusCodes.CREATED).json({
      code: StatusCodes.CREATED,
      message: 'POST: API create new board'
    })
  })

export const boardRoutes = Router
