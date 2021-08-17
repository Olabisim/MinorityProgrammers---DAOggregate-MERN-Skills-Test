import mongoose from 'moogoose';


const socialMediaSchema = mongoose.Schema({

    id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'DAO'
    },
    twitterHandle: {
        type: String,
        required: true
    },
    githubOrganizationHandle: {
        type: String,
        required: true
    },
    telegramLink: {
        type: String,
        required: true
    },
    linkedinCompanyLink: {
        type: String,
        required: true
    },
    discordLink: {
        type: String,
        required: true
    },
    supportEmail: {
        type: String,
        required: true
    },



}, {

    timestamps: true

})


const SocialMedia = mongoose.model('SocialMedia', socialMediaSchema)


export default SocialMedia;

