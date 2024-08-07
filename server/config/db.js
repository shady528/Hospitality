const mongoose = require("mongoose");
const db = process.env.MONGO_URL;
const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://shady02528:abcd@cluster0.9co3l.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log("MongoDB is connected");
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
