import { StatusCodes } from 'http-status-codes'
import express from 'express'
import { boardRoute } from './boardRoute'

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

export const APIs_V1 = Router
