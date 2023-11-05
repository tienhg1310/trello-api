import { StatusCodes } from 'http-status-codes'
import express from 'express'
import { boardRoute } from './boardRoute'
import { columnRoute } from './columnRoute'
import { cardRoute } from './cardRoute'

const Router = express.Router()

// check api
Router.get('/status', (req, res) => {
  res.status(StatusCodes.OK).json({
    code: StatusCodes.OK,
    message: 'API V1 are ready to use'
  })
})

// Boards API
Router.use('/boards', boardRoute)
// colums API
Router.use('/columns', columnRoute)
// cards API
Router.use('/cards', cardRoute)

export const APIs_V1 = Router
