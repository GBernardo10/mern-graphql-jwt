import express from 'express'
import bodyParser from 'body-parser'
import expressGraphql from 'express-graphql'
import cors from 'cors'

const app = express()

function main(){
  const port = process.env.PORT || 3000
  app.listen(port,()=>console.log(`Server is listening on port, ${port}`))
}

main()
