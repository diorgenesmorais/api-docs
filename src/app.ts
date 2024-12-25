import express, { type Request, type Response } from 'express'
import swaggerUI from 'swagger-ui-express'
import fs from 'node:fs'
import path from 'node:path'

const PORT = process.env.PORT || 5000
const app = express()

const swaggerDocument = JSON.parse(fs.readFileSync(path.join(__dirname, '../docs', 'pets-swagger.json'), 'utf8'))

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument))

app.get('/', (req: Request, res: Response) => {
    res.send('Welcome to the API documentation server. Visit /api-docs for the Swagger documentation.')
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})