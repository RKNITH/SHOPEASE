// import cloudinary from "cloudinary";
// import dotenv from "dotenv";

// dotenv.config({ path: "backend/config/config.env" });

// cloudinary.config({
//     cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//     api_key: process.env.CLOUDINARY_API_KEY,
//     api_secret: process.env.CLOUDINARY_API_SECRET,
// });

// // export const upload_file = (file, folder) => {
// //     return new Promise((resolve, reject) => {
// //         cloudinary.v2.uploader.upload(
// //             file,
// //             (result) => {
// //                 resolve({
// //                     public_id: result.public_id,
// //                     url: result.url,
// //                 });
// //             },
// //             {
// //                 resource_type: "auto",
// //                 folder,
// //             }
// //         );
// //     });
// // };


// export const upload_file = (file, folder) => {
//     return new Promise((resolve, reject) => {
//         cloudinary.v2.uploader.upload(
//             file,
//             (error, result) => {
//                 if (error) {
//                     reject(error);
//                 } else {
//                     resolve({
//                         public_id: result.public_id,
//                         url: result.url,
//                     });
//                 }
//             },
//             {
//                 resource_type: "auto",
//                 folder: '',
//             }
//         );
//     });
// };




// export const delete_file = async (file) => {
//     const res = await cloudinary.uploader.destroy(file);

//     if (res?.result === "ok") return true;
// };



import cloudinary from "cloudinary";
import dotenv from "dotenv";

dotenv.config({ path: "./config/config.env" });

// Log environment variables to ensure they are loaded correctly
// console.log("CLOUDINARY_CLOUD_NAME:", process.env.CLOUDINARY_CLOUD_NAME);
// console.log("CLOUDINARY_API_KEY:", process.env.CLOUDINARY_API_KEY);
// console.log("CLOUDINARY_API_SECRET:", process.env.CLOUDINARY_API_SECRET);

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const upload_file = (file, folder) => {
    return new Promise((resolve, reject) => {
        cloudinary.v2.uploader.upload(
            file,
            {
                resource_type: "auto",
                folder: folder || '',
            },
            (error, result) => {
                if (error) {
                    console.error("Upload Error:", error);
                    reject(error);
                } else {
                    resolve({
                        public_id: result.public_id,
                        url: result.url,
                    });
                }
            }
        );
    });
};

export const delete_file = async (file) => {
    try {
        const res = await cloudinary.uploader.destroy(file);
        if (res?.result === "ok") return true;
        return false;
    } catch (error) {
        console.error("Delete Error:", error);
        return false;
    }
};
