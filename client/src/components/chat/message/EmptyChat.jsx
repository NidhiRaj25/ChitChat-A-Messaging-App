import { Box , Typography} from '@mui/material'
import Image from "../../../constants/Image/appImage.png"
import './EmptyChat.css'



const EmptyChat = () => {
  return (
    <div>
      <Box className='Component'>
        <Box>
          <img src={Image} alt='Img' style={{width:'400px', marginTop:"80px" }}/>
          <Typography className='textA'>ChitChat</Typography>
          <Typography className='textB'>Send and recieve message with your chichat contacts </Typography>
          <Typography className='textC'>End-to-end Encyption </Typography>
        </Box>
      </Box>
    </div>
  )
}

export default EmptyChat
