import Express, { json } from 'express'
import cors from 'cors'
import helmet from 'helmet'

const app = Express();
app.use(json())
app.use(cors())
app.use(helmet())

app.listen(process.env.PORT, () => {
  console.log('start listening on port ' + process.env.PORT)
})