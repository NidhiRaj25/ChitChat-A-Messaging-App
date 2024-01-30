// import { useEffect } from 'react';
import { Box } from "@mui/material";
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MicOutlinedIcon from '@mui/icons-material/MicOutlined';
import { InputBase } from '@mui/material';

import "./Footer.css";

const Footer =({sendText,setValue, value,setFile, file }) => {

   
    return (
        <Box className="footerContainer">
            <EmojiEmotionsOutlinedIcon/>
            <label htmlFor='fileInput'>
            <AttachFileIcon/>
            </label>
            <input 
                type='file'
                id='fileInput'
                style={{display:'none'}}
            />
            <Box className="inputBase">
                <InputBase 
                className="input" 
                placeholder="Type a message"
                onChange={(e) => setValue(e.target.value)}
                onKeyPress={(e) => sendText(e)}
                value={value}
                /> 
            </Box>
            <MicOutlinedIcon/>
        </Box>
    )
}

export default Footer;