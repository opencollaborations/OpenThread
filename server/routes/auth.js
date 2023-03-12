import express  from "express";
import { signIn, signUp, update } from "../controller/auth.js";
export const auth = express.Router()

auth.post('/signin',signIn)
auth.post('/signup',signUp)
auth.post('/update',update)
