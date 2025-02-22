import dotenv from "dotenv"
import cors from "cors"
dotenv.config()
import express from "express"
import connectDB from "./src/db/db.js"

const app = express()

const corsoptions = {
    origin: 'https://form-alpha-pied.vercel.app',
    credentials: true,
    optionsSuccessStatus: 200
};

app.use(cors(corsoptions))
app.use(express.json())

connectDB()
    .then(() => {
        app.listen(8000, () => {
            console.log("app listening on port 8000")
        })
    })
    .catch((err) => {
        console.error(err)
    })

import userRoutes from "./src/routes/routes.js"


app.use("/api/v1", userRoutes)
