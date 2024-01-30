import { useContext } from 'react';
import "./oneMessage.css"
import { Box, Typography } from '@mui/material';
import { formatDate } from '../../../utils/common-utlis';
import { AccountContext } from '../../../context/AccountProvider';


const Message = ({ message }) => {
    const { account } = useContext(AccountContext);

    return (
        <>
        {
            account.sub === message.senderId ? 
                <Box className="send-Message">
                    <Typography className='text'>{message.text}</Typography>
                    <Typography className='time'>{formatDate(message.createdAt)}</Typography>
                </Box>
            :   
                <Box className="Received-Message">
                    <Typography className='text'>{message.text}</Typography>
                    <Typography className='time'>{formatDate(message.createdAt)}</Typography>
                </Box>
        }
        
        </>
    )

}
export default Message;