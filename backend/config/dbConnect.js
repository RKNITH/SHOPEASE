import mongoose from "mongoose";

export const connectDB = async () => {

    let DB_URI = "";

    if (process.env.NODE_ENV === "DEVELOPMENT") DB_URI = process.env.DB_LOCAL_URI;
    if (process.env.NODE_ENV === "PRODUCTION") DB_URI = process.env.DB_URI;

    await mongoose.connect(DB_URI)
        .then(() => console.log('DB Connected'))
        .catch(err => {
            console.error('DB Connection Error:', err);
            process.exit(1);
        });


}