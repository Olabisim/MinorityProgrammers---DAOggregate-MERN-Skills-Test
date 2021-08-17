import mongoose from 'mongoose';
import dotenv from 'dotenv';
import colors from 'colors';
import news from './data/news.js';
import New from './models/newModel.js'
import connectDB from './config/db.js'

dotenv.config()

connectDB()

// sampleProduct
const importData = async () => {
    try {

        await New.deleteMany()

        const createdNews = await New.insertMany(news)

        // await User.insertMany(createdUsers)

        console.log("data imported".green.inverse )
        // passing nothing does not exit with failure
        process.exit()

    } catch (error) {

        console.error(`${error}`.red.inverse)
        process.exit(1)
        
    }
}


const destroyData = async () => {
    try {
        
        await New.deleteMany()


        console.log("data destroyed".red.inverse )
        // passing nothing does not exit with failure
        process.exit()


    } catch (error) {


        console.error(`${error}`.red.inverse)
        process.exit(1)
        
        
    }
}



if(process.argv[2] === '-d'){

   destroyData()

}

else {

    importData()
    
}