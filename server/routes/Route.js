import express from 'express';
import { addUser, getUsers } from '../controller/user-controller.js';
import { newConversation } from '../controller/conversation-controller.js';
import { getConversation } from '../controller/conversation-controller.js';
import { newMessage } from '../controller/message-controller.js';
import { getMessages } from '../controller/message-controller.js';
// import { uploadFile } from '../controller/image-controller.js';
// import upload from '../utils/upload.js'
// import uplodeFile from '../utils/uploadFile.js'
// import { getImage } from '../controller/image-controller.js';

const route = express.Router();


route.post('/add', addUser);
route.get('/users', getUsers);

route.post('/onechat/add', newConversation);
route.post('/onechat/get', getConversation);

route.post('/message/add', newMessage);
route.get('/message/get/:id',getMessages);

// console.log(upload)

// route.post('/file/upload', uploadFile.single("file"), uploadFile);
// route.get('/file/:filename', getImage);

export default route; 