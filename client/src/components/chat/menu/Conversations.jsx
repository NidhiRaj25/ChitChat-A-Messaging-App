import { useEffect, useState, useContext } from "react";
import { getUsers } from "../../../service/api";
import { Box , Divider} from "@mui/material";
import { AccountContext } from "../../../context/AccountProvider";

// components 
import Conversation from "./Onechat";
import "./Conversations.css"


const Conversations = ({text}) =>{

    const[users, setUsers] = useState([]);

    const {account,socket, setActiveUsers} = useContext(AccountContext);

    // searching user name
    useEffect(()=>{
        const fetchData= async() =>{
            let response = await getUsers();
            const filterData = response.filter(user => user.name.toLowerCase().includes(text.toLowerCase()));
            setUsers(filterData);
        }
        fetchData();
    }, [text]);


    // add active users
    useEffect(() => {
        socket.current.emit('addUsers', account);
        socket.current.on("getUsers", users => {
            setActiveUsers(users);
        })
    }, [account])

     return ( 


         <Box className="userDetail">
            {
                users.map(user => (
                    user.sub!==account.sub &&
                    <>
                    <Conversation user= {user} />
                    <Divider className="divider"/>
                    </>
                ))
            }
         </Box> 
     )
}

export default Conversations;