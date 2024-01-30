
// import  Grid  from "gridfs-stream";


// import mongoose from "mongoose";

// import  multer, { diskStorage } from 'multer';
// import  {GridFsStorage}  from 'multer-gridfs-storage';
// const conn = mongoose.connection;

// import dotenv from 'dotenv';


// dotenv.config();
// const username = process.env.DB_USERNAME;
// const password = process.env.DB_PASSWORD;
// const url= `mongodb+srv://${username}:${password}@messaging-webapp.ynxhrxu.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp`;

// // Init gfs
// let gfs;

// conn.once('open', () => {
//     // Init stream
//     gfs = Grid(conn.db, mongoose.mongo);
//     gfs.collection('uploaded_images'); //collection name
// });

// // Create storage engine
// const storage = new GridFsStorage({
//   url: `mongodb+srv://${username}:${password}@messaging-webapp.ynxhrxu.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp`,
//   file: (req, file) => {
//     return new Promise((resolve, reject) => {
//       crypto.randomBytes(16, (err, buf) => {
//         if (err) {
//           return reject(err);
//         }
//         const filename = buf.toString('hex') + path.extname(file.originalname);
//         const fileInfo = {
//           filename: filename,
//           bucketName: 'uploaded_images' //collection name
//         };
//         resolve(fileInfo);
//       });
//     });
//   }
// });
// const upload = multer({ storage });

// export default upload;
