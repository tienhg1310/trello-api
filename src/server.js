/* eslint-disable no-console */
import exitHook from 'async-exit-hook'
import cors from 'cors'
import express from 'express'
import { env } from '~/config/environment'
import { CLOSE_DB, CONNECT_DB } from '~/config/mongodb'
import { errorHandlingMiddleware } from '~/middlewares/errorHandlingMiddleware'
import { APIs_V1 } from '~/routes/v1'
import { corsOptions } from '~/config/cors'

const START_SERVER = () => {
  const app = express()

  app.use(cors(corsOptions))
  // enable req.body json data
  app.use(express.json())

  // use APIs V1
  app.use('/v1', APIs_V1)

  // middleware xu li loi tap trung
  app.use(errorHandlingMiddleware)

  app.listen(env.APP_PORT, env.APP_HOST, () => {
    console.log(`3, Hello ${env.AUTHOR}, I am running at HOST: ${env.APP_HOST} and PORT: ${env.APP_PORT}`)
  })

  // cleanup truoc khi dung server
  exitHook(() => {
    console.log('4,Exiting app')
    CLOSE_DB()
    console.log('5, Exited')
  })
}

// cach viet try catch connect server
;(async () => {
  try {
    console.log('1, connecting to DB')
    await CONNECT_DB()
    console.log('2, connected to MongoDB Atlas!!!')

    START_SERVER()
  } catch (error) {
    console.log(error)
    process.exit(0)
  }
})()

// // cach viet then catch
// CONNECT_DB()
//   .then(() => console.log('connect to dtb'))
//   .then(() => START_SERVER())
//   .catch((err) => {
//     console.log(err)
//     process.exit(0)
//   })
