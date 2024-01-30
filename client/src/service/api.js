  import axios from 'axios';

  const url = 'http://localhost:5000';

  export const addUser= async(data) => {
    try{
       let response = await axios.post(`${url}/add`,data);
       console.log(response.data);
       return response.data;
       

    }catch(error){
        console.log('Error while calling addUser API',error);
    }

  } 

  export const getUsers = async() =>{
    try {
      let response = await axios.get(`${url}/users`);
      console.log(response);
      return response.data;
    }catch(error){
      console.log("Error while calling getUsers api ",error.message)
    }
  }

  export const setConversation= async (data) => {
    try {
        await axios.post(`${url}/onechat/add`,data);
        // console.log(data);
    }catch (error){
      console.log("Error while calling setConversation api ",error.message)
    }
  }

  export const getConversation= async (data) => {
    try {
        let response = await axios.post(`${url}/onechat/get`,data);
        console.log(data);
        console.log(response);
        return response.data;
    }catch (error){
      console.log("Error while calling getConversation api ",error.message)
    }
  }

export const newMessage = async (data) => {
  try{
    await axios.post(`${url}/message/add`,data);  

  }catch(error) {
    console.log("Error while calling message api", error.message);
  }
}

export const getMessages = async(id)=> {
  try{
    let response = await axios.get(`${url}/message/get/${id}`);
    return response.data;
  }catch(error){
    console.log("Error while calling getMessage api",error.message);

  }
}