import express from "express"
import path from "path"
export const app = express()

app.use(express.static(path.join(__dirname, "public")))