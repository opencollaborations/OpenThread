import mongoose from 'mongoose';

const tread = mongoose.Schema({
    name: String,
    poem: String,
    user: {type:mongoose.Types.ObjectId },
    applauds: {
        type: Number,
        default: 0,
    },
    treads: { 
        type: Number,
        default: 0,
    },
    echos: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var Tread = mongoose.model('Tread', tread);

export default Tread;