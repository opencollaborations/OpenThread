import express  from "express";
import { getTread as getTreads } from "../controller/treads.js";
export const treads = express.Router()

treads.get('/',getTreads)

