import { useContext,useState , useEffect, useRef} from "react";

import { Box } from "@mui/material";
import "./Messages.css";
import Footer from "./Footer";
import { AccountContext } from "../../../context/AccountProvider";
import { getMessages, newMessage } from "../../../service/api";
import Message from "./oneMessage";

const Messages = ({person, conversation}) =>{

    const [value,setvalue] = useState('');
    const[messages, setMessages] = useState([]);
    const {account,socket, newMessageFlag, setNewMessageFlag} = useContext(AccountContext);
    const [incomingMessage, setIncomingMessage] = useState(null);
    
   


    // define useref
    const scrollRef = useRef();

    //get or receive message in real time
    // and set all incoming message in setIncomingMessage with date
    useEffect(() => {
        socket.current.on('getMessage', data => {
            setIncomingMessage({
                ...data,
                createdAt: Date.now()
            })
        })
    },[]);


    //view scroolbar at bottom / view latest message
    useEffect(() => {
        scrollRef.current?.scrollIntoView({ transition: "smooth" })
    }, [messages]);


    //set or display incoming message in chat box
    useEffect(() => {
        incomingMessage && conversation?.members?.includes(incomingMessage.senderId) && 
            setMessages(prev => [...prev, incomingMessage]);
        
    }, [incomingMessage, conversation]);


    //get message from database
    useEffect(() => {
        const getMessageDetails = async () => {
            let data =await getMessages(conversation._id);
            setMessages(data);
            console.log(data);
        }
        conversation._id && getMessageDetails();
    },[person._id, conversation._id, newMessageFlag])


    // action by press enter in fotter input field
    const sendText = async(e) =>{
        console.log(e);
        const code= e.keycode || e.which;
        // keycode of enter is 13
        if(code === 13){
            let message  = {
                senderId: account.sub,
                receiverId : person.sub,
                conversationId : conversation._id,
                type : 'text',
                text: value
            }
            // console.log(message);

            //send message in real time
            socket.current.emit('sendMessage', message);
            //save message in database
            await newMessage(message);

            setvalue('');
            setNewMessageFlag(prev => !prev)
        }
    }
    return (
        <Box className="messageContainer ">
            <Box className="messageBox">
                {
                    messages && messages.map(message => (
                        <Box  className="Container" ref={scrollRef}>
                            <Message message={message}/>
                        </Box>
                    ))
                }
             
            </Box>
            <Footer 
            sendText={sendText}
            setValue={setvalue}
            value={value}
            />
        </Box>
    )
}

export default Messages;