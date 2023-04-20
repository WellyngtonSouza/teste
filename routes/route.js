import express from "express"
import { all, add } from "../controllers/controller.js"
const route = express.Router()
import bd from "body-parser"

route.get("/", all)
route.post("/add",bd.urlencoded({extended:true}), add)

export { route }