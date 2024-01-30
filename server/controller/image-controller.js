// import  Grid  from "gridfs-stream";
// // import pkg from 'gridfs-stream';

// import mongoose from "mongoose";

const url= "http://localhost:5000";


// // const { grid } = pkg;
// let gfs ,gridFsBucket;
// const conn = mongoose.connection;
// conn.once('open', ()=> {
//     gridFsBucket = new mongoose.mongo.GridFSBucket(conn.db, {
//         bucketName: 'fs'

//     });
//     gfs = Grid(conn.db, mongoose.mongo);
//     gfs.collection('fs')
// });

export const uploadFile = async(request, response) => {

    if (!request.file) {
        return response.status(404).json("File not found");
    }

    const imageUrl = `${url}/file/${request.file.filename}`; 

    // // console.log(imageUrl)

     return response.status(200).json(imageUrl);
}

// export const getImage = async (request, response) => {
//     try {

        

//         const filename = request.params.filename;
//         console.log('Requested filename:', filename);

//         const file = await gfs.files.findOne( {filename: request.params.filename});

//         console.log('filename ',filename);
//         if (!file) {
//             return response.status(404).json({ message: 'File not found' });
//         }

//         console.log('Found file:', file);

        

//         const readStream = gridFsBucket.openDownloadStream(file._id);

//         readStream.on('error', error => {
//             console.error('Error reading stream:', error);
//             response.status(500).json({ message: 'Error reading file stream', error: error.message });
//         });
//         readStream.on('data', chunk => {
//             // Write each chunk to the response
//             response.write(chunk);
//         });
//         readStream.on('end', () => {
//             console.log('Stream ended successfully.');
//         readStream.pipe(response);
//         });

//         console.log(response);
//     }catch (error) {
//         return response.status(500).json({ message: 'Internal server error', error: error.message })
//     }
// }