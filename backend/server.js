import express  from "express";
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import colors from 'colors'
import  {notFound, errorHandler} from './middleware/errorMiddleware.js'
import dataRoutes from './routes/dataRoutes.js'
import path from 'path'



const app = express();

dotenv.config()

connectDB()


app.use('/api/datas', dataRoutes )


const __dirname = path.resolve()

if(process.env.NODE_ENV === 'production') {

    app.use(express.static(path.join(__dirname, '/frontend/build')))

    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html')))

}
else {

    app.get('/', (req, res) => {
        res.send("API IS RUNNING ");
    })

}


app.use(notFound)
app.use(errorHandler)


const PORT = process.env.PORT || 5000


app.listen(PORT, console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));
