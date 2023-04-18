function loadDb() {
  return import('./demo-express-modules/db').then(({ initMongoDb }) => initMongoDb())
}

function loadWebserver() {
  return import('./demo-express-modules/server').then(({ initServer }) => initServer())
}

function handleError(err: unknown, origin?: NodeJS.UncaughtExceptionOrigin) {
  if (origin)
    console.error(origin)

  if (err instanceof Error)
    console.error(err.message)
  else
    console.error(err)

  process.exit(1)
}

import('dotenv/config').then(
  () => loadDb().then(
    () => loadWebserver(),
  ).catch(handleError),
).catch(handleError)

process.addListener('uncaughtException', handleError)

// // test user register after one second. This must answer a 400 Bad Request
// setTimeout(async () => {
//   const { data, status } = await axios.post(
//     'http://localhost:8080/user/register',
//     { test: 'already' },
//     { validateStatus: (status) => status < 500 }
//   )
//   console.log({ status, data })
// }, 1000)

// setTimeout(async () => {
//   const { data, status } = await axios.post(
//     'http://localhost:8080/user/register',
//     { email: 'email@test.com', username: 'test', password: 'testtest' },
//     { validateStatus: (status) => status < 500 }
//   )
//   console.log({ status, data })
// }, 1000)
