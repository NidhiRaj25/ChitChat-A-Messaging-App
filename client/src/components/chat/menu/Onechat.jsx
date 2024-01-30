import { useContext ,useState,useEffect } from "react";
import { Box,Typography } from "@mui/material";
import "./Onechat.css";
import { AccountContext } from "../../../context/AccountProvider";
import { setConversation ,getConversation} from "../../../service/api";
import { formatDate } from "../../../utils/common-utlis";

const Conversation =({user})=>{

    const {setPerson,account,newMessageFlag } = useContext(AccountContext);
    const [message, setMessage] = useState({});

    const getUser=async()=> {
        setPerson(user);
        await setConversation({senderId:account.sub, receiverId:user.sub})
    }


    // set or display latest message in menu 
    useEffect(() => {
        const getConversationDetails = async() => {
            const data = await getConversation({ senderId: account.sub, receiverId: user.sub });
            setMessage({ text: data?.message, timestamp: data?.updatedAt });
        }
        getConversationDetails();
    }, [newMessageFlag]);

    return (

        // <div>this is one  conversation</div> 
        <Box className="chatView" onClick={() => getUser()} >
            <Box className="userImage">
                <img className="Image" src={user.picture} alt="dp"/>
            </Box>
            <Box style={{width: '100%'}}> 
                <Box  className='container'>
                    <Typography className="userName">{user.name}</Typography>
                    {
                        message?.text && 
                            <Typography className="timeStamp">{formatDate(message?.timestamp)}</Typography>
                    }
                </Box>
                <Box>
                    <Typography  className="displaytext">{message?.text?.includes('localhost') ? 'media' : message.text}</Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default Conversation;