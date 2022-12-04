const mongoose = require("mongoose")

const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDB Connected`)

    } catch(error) {
        console.log(error)
        process.exit
    }
}

module.exports = connectDB