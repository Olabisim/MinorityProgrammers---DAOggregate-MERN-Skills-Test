import mongoose from 'mongoose';


const newSchema = mongoose.Schema({

    Logo: {
        type: String,
        required: true
    },
    Name: {
        type: String,
        required: true
    },
    Category: {
        type: String,
        enum : [

            'Protocol',
            'Service',
            'Grant',
            'Media',
            'Social',
            'Investment',
            'Platform',
            'Collector'
            
        ],
        required: true
    },
    Followers: {
        type: String,
        required: true
    },
    AUM: {
        type: String,
        required: true
    },
    Founded: {
        type: String,
        required: true
    },
    Website: {
        type: String,
        required: true
    },
    Twitter: {
        type: String,
        required: true
    },
    Twitter_handle: {
        type: String
    },

})


const New = mongoose.model('New', newSchema);


export default New;
