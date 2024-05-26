import express, { Request, Response } from 'express'
import swagger from 'swagger-ui-express'
import fs from 'fs'

const PORT = process.env.PORT || 5000
const app = express()

app.get('/', (req: Request, res: Response) => {
    res.send('Welcome to the API documentation server')
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})