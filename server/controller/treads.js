import express  from "express"
import mongoose from "mongoose"
import Tread from "../models/tread.js"


export const getTread = async (req,res) => { 
    try {
        const treadsFound =  Tread.find()
        res.staus(200).json(treadsFound)
    } catch (e) {
        res.status(404).json({ message: error.message });
    }
}


export const createTread = async (req, res) => {
    const { title, message, selectedFile, creator, tags } = req.body;

    const newPostMessage = new Tread({ title, message, selectedFile, creator, tags })

    try {
        await newPostMessage.save();

        res.status(201).json(newPostMessage );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}