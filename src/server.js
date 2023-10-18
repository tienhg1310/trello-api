/* eslint-disable no-console */
import express from 'express'
import exitHook from 'async-exit-hook'
import { CONNECT_DB, GET_DB, CLOSE_DB } from '~/config/mongodb'
import { env } from '~/config/environment'
import { APIs_V1 } from '~/routes/v1'

const START_SERVER = () => {
  const app = express()

  // enable req.body json data
  app.use(express.json())

  // use APIs V1
  app.use('/v1', APIs_V1)

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
