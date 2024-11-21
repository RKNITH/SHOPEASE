// import express from "express";
// import dotenv from "dotenv";
// import { connectDB } from "./config/dbConnect.js";
// import errorMiddleware from "./middlewares/errors.js";
// import cookieParser from "cookie-parser";
// import cors from 'cors';


// import path from "path";
// // import { fileURLToPath } from "url";
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// // Handle Uncaught exceptions
// process.on("uncaughtException", (err) => {
//     console.log(`ERROR: ${err}`);
//     console.log("Shutting down due to uncaught exception");
//     process.exit(1);
// });


// if (process.env.NODE_ENV !== "PRODUCTION") {
//     dotenv.config({ path: "./config/config.env" });
// }


// // Load environment variables
// dotenv.config({ path: "./config/config.env" });

// // Log environment variables to ensure they are loaded correctly
// // console.log("PORT:", process.env.PORT);
// // console.log("CLOUDINARY_CLOUD_NAME:", process.env.CLOUDINARY_CLOUD_NAME);
// // console.log("CLOUDINARY_API_KEY:", process.env.CLOUDINARY_API_KEY);
// // console.log("CLOUDINARY_API_SECRET:", process.env.CLOUDINARY_API_SECRET);

// const app = express();
// const PORT = process.env.PORT || 4000;

// // Connecting to database
// connectDB();

// app.use(
//     express.json({
//         limit: "10mb",
//         verify: (req, res, buf) => {
//             req.rawBody = buf.toString();
//         },
//     })
// );
// app.use(cookieParser());
// app.use(cors({ origin: 'http://localhost:5173' }));

// // Import all routes
// import productRoutes from "./routes/products.js";
// import authRoutes from "./routes/auth.js";
// import orderRoutes from "./routes/order.js";
// import paymentRoutes from "./routes/payment.js";
// import { promises } from "nodemailer/lib/xoauth2/index.js";

// app.use("/api/v1", productRoutes);
// app.use("/api/v1", authRoutes);
// app.use("/api/v1", orderRoutes);
// app.use("/api/v1", paymentRoutes);


// if (process.env.NODE_ENV === "PRODUCTION") {
//     app.use(express.static(path.join(__dirname, "../frontend/dist")));

//     app.get("*", (req, res) => {
//         res.sendFile(path.resolve(__dirname, "../frontend/dist/index.html"));
//     });
// }











// // Using error middleware
// app.use(errorMiddleware);

// const server = app.listen(PORT, () => {
//     console.log(`Server is running on PORT: ${PORT}.`);
// });

// // Handle Unhandled Promise rejections
// process.on("unhandledRejection", (err) => {
//     console.log(`ERROR: ${err}`);
//     console.log("Shutting down server due to Unhandled Promise Rejection");
//     server.close(() => {
//         process.exit(1);
//     });
// });



import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/dbConnect.js";
import errorMiddleware from "./middlewares/errors.js";
import cookieParser from "cookie-parser";
import cors from "cors";

// import path from "path";
// import { fileURLToPath } from "url";
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// Handle Uncaught exceptions
process.on("uncaughtException", (err) => {
    console.log(`ERROR: ${err}`);
    console.log("Shutting down due to uncaught exception");
    process.exit(1);
});

// if (process.env.NODE_ENV !== "PRODUCTION") {
//     dotenv.config({ path: "./config/config.env" });
// }

// Load environment variables
dotenv.config({ path: "./config/config.env" });

const app = express();
const PORT = process.env.PORT || 4000;

// Connecting to database
connectDB();

app.use(
    express.json({
        limit: "10mb",
        verify: (req, res, buf) => {
            req.rawBody = buf.toString();
        },
    })
);
app.use(cookieParser());
app.use(
    cors({
        origin: [process.env.FRONTEND_URL],
        methods: ["POST", "GET", "PUT", "DELETE"],
        credentials: true,
    })
);

// Import all routes
import productRoutes from "./routes/products.js";
import authRoutes from "./routes/auth.js";
import orderRoutes from "./routes/order.js";
import paymentRoutes from "./routes/payment.js";

// import pkg from "nodemailer/lib/xoauth2/index.js";
// const { promises } = pkg;

app.use("/api/v1", productRoutes);
app.use("/api/v1", authRoutes);
app.use("/api/v1", orderRoutes);
app.use("/api/v1", paymentRoutes);

// if (process.env.NODE_ENV === "PRODUCTION") {
//     app.use(express.static(path.join(__dirname, "../frontend/dist")));

//     app.get("*", (req, res) => {
//         res.sendFile(path.resolve(__dirname, "../frontend/dist/index.html"));
//     });
// }

// Using error middleware
app.use(errorMiddleware);

const server = app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}.`);
});

// Handle Unhandled Promise rejections
process.on("unhandledRejection", (err) => {
    console.log(`ERROR: ${err}`);
    console.log("Shutting down server due to Unhandled Promise Rejection");
    server.close(() => {
        process.exit(1);
    });
});
