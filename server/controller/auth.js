import express from 'express'
import mongoose from 'mongoose'
import Tread from '../models/tread.js'
import User from '../models/user.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const signUp = async (req, res) => {
 try {
  const { pen_name, password } = req.body
  console.log(password)
  const existingUser = await User.findOne({ pen_name })
  if (existingUser) {
   return res.status(400).json({ message: 'pen_name already taken' })
  }
  const hashedPassword = await bcrypt.hash(password, 10)
  const newUser = new User({ pen_name, password: hashedPassword })
  await newUser.save()

  const token = jwt.sign({ id: newUser._id }, process.env.jwt)
  return res.status(201).json({ token })
 } catch (err) {
  console.log(err)
  return res.status(500).json({ message: err.message })
 }
}

export const signIn = async (req, res) => {
 const { pen_name, password } = req.body

 try {
  const user = await User.findOne({ pen_name })
  if (!user) {
   return res.status(401).json({ message: 'Invalid pen_name or password' })
  }

  const isMatch = await bcrypt.compare(password, user.password)
  if (!isMatch) {
   return res.status(401).json({ message: 'Invalid email or password' })
  }

  const token = jwt.sign({ id: user._id }, process.env.jwt)

  return res.status(201).json({ token })
 } catch (error) {
  console.error(error)
  return res.status(500).json({ message: 'An error occurred' })
 }
}

export const update = async (req, res) => {
    try {
     
     const {token} = req.body//autorizationHeader.split(' ')[1]
     const decoded = jwt.verify(token,process.env.jwt)
     const {id} = decoded
   //   const autorizationHeader = req.headers.authorization
     if(!id) {
        res.status(401).json({ message: 'kindly signin to contiene' })
        return
     }
     const { cover_qoute,catchphrase,social_handles,masterpieces } = req.body
     
     const user = await User.findOne({ _id:id })
     if (!user) {
      return res.status(401).json({ message: 'user not registered' })
     }
     const updateUser = await User.findByIdAndUpdate(id,req.body,{new:true})
    //  const token = jwt.sign({ id: newUser._id }, process.env.jwt)
     return res.status(201).json({ updateUser })
    } catch (err) {
     return res.status(500).json({ message: err.message })
    }
   }