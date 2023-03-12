import mongoose from 'mongoose'
import Tread from './tread.js'
// import treads from '../routes/tread.js'/


const user = mongoose.Schema({
 pen_name: {type:String,unique:true},
 cover_quote: String,
 catchphrase: String,
 social_handles: {
  twitter: String,
  instagram: String,
  facebook: String,
 },
 masterpieces: [{ type: mongoose.Types.ObjectId, ref: Tread }],
 education: String,
 treads: [{ type: mongoose.Types.ObjectId, ref: Tread }],
 password: String,
 createdAt: {
  type: Date,
  default: new Date(),
 },
})

var User = mongoose.model('User', user)

export default User
