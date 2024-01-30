import { useContext } from 'react';
import { Box,Typography } from "@mui/material";
import "./ChatHeader.css";
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { AccountContext } from '../../../context/AccountProvider';
import {defaultProfilePicture} from "../../../constants/Data.js"

const ChatHeader= ({person})=>{
    
    const url = person.picture || defaultProfilePicture;
    
    const { activeUsers } = useContext(AccountContext);

    return (
        <Box className=" headerchat"> 
            <img className="defaultImage" src={url} alt ="display pic"/>
            <Box > 
                <Typography className="userName">{person.name}</Typography>
                <Typography className="onlineStatus">{activeUsers?.find(user => user.sub === person.sub) ? 'Online' : 'Offline'}</Typography>
            </Box>
            <Box className="icons ">
                <SearchIcon/>
                <MoreVertIcon/>
            </Box>
        </Box>
    )
}
export default ChatHeader;