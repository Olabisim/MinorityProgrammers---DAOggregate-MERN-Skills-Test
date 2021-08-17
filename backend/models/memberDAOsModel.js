import mongoose from 'mongoose';

const memberDAOsSchema = mongoose.Schema({

    DAO: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'DAO'
    },
    member: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },

}) 

const MemberDAOs = mongoose.model('MemberDAOs', memberDAOsSchema)

export default MemberDAOs;
