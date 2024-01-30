// // // GridFS storage engine for Multer to store uploaded files directly to MongoDb.

// import multer from 'multer';
// import {GridFsStorage} from 'multer-gridfs-storage'; 

// import dotenv from 'dotenv';

// dotenv.config();

// const username = process.env.DB_USERNAME;
// const password = process.env.DB_PASSWORD;

// const Storage = new GridFsStorage({
//     url: `mongodb+srv://${username}:${password}@messaging-webapp.ynxhrxu.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp`,
//     // options: { useNewUrlParser: true },
//     file: (request, file) => {
//         const match = ["image/png", "image/jpg"];

//         if(match.indexOf(file.memeType) === -1) 
//             return`${Date.now()}-blog-${file.originalname}`;

//         return {
//             bucketName: "photos",
//             filename: `${Date.now()}-blog-${file.originalname}`
//         }
//     }
// });


// export default multer({Storage}); 













// import express from 'express'
// import  multer, { diskStorage } from 'multer';
// // import  {GridFsStorage}  from 'multer-gridfs-storage';

// import { GridFsStorage } from 'multer-gridfs-storage';

// import dotenv from 'dotenv';


// dotenv.config();
// const username = process.env.DB_USERNAME;
// const password = process.env.DB_PASSWORD;

// // const upload = multer({ dest: '/server/utils/Uplods ' });
// // const storage = multer.diskStorage({
// //     destination: function (req, file, cb) {
// //       cb(null, '/server/utils/Uplods')
// //     },
// //     filename: function (req, file, cb) {
// //       const uniqueSuffix = Date.now();
// //       cb(null, uniqueSuffix + file.originalname);
// //     }
// //   })
  
// //   const uploaded = multer({ storage: storage })



// // const storage = new GridFsStorage({
// //    url: `mongodb+srv://${username}:${password}@messaging-webapp.ynxhrxu.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp`,
    
// //     options: {useUnifiedTopology: true, useNewUrlParser: true},
// //     file: (request, file )=> {
// //         const match = ["image/png", "image/jgp"];

// //         if(match.indexOf(file.mimeType) === -1){
// //             return `${Date.now()}-file-${file.originalname}`;
// //         }

// //         return {
// //             bucketName : "photos",
// //             filename : `${Date.now()}-file-${file.originalname}`
// //         }
// //     }

// // });


// const storage = new GridFsStorage({
//     url: `mongodb+srv://${username}:${password}@messaging-webapp.ynxhrxu.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp`,
    
//     file: (req, file) => {
//         return {
//             bucketName: 'uploads', // Change this to your desired bucket name
//             filename: file.originalname,
//         };
//     },
// });

// const upload = multer({ storage });


// // // console.log(storage)

// export default multer ({storage});