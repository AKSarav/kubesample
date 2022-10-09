const express = require('express')
const app = express()
const port = process.env.appport

if (process.env.ENVIRONMENT=='production'){
    app.use('/', express.static('prod'))
}
else if (process.env.ENVIRONMENT=='qa'){
    app.use('/', express.static('qa'))
}
else if (process.env.ENVIRONMENT=='dev'){
    app.use('/', express.static('dev'))
}

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})