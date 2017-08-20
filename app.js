const express = require('express')
const session = require('express-session')

const app = express()

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}))

app.use((req, res, next) => {
  console.log(req.url)
  next()
})



app.use(express.static(`${__dirname}/www`))







app.listen(process.env.PORT || 3000, ()=>{
  console.log('server run at 3000 \\^ v ^/')
})
