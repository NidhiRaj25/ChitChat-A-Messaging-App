import { useContext } from 'react'
import { Box, Dialog , styled} from '@mui/material'
import React from 'react'
import Menu from './menu/Menu'
import EmptyChat from './message/EmptyChat'
import ChatBox from './message/ChatBox'
import { AccountContext } from '../../context/AccountProvider'


const Component= styled(Box)`
    display: flex; 
    
`
const LeftComponent= styled(Box) `
    width: 450px;    
`
const RightComponent= styled(Box) `
    width: 73%; 
    height: 100%;
    border-left: 2px solid rgba(0,0,0,0.14);
    
    
`
const dialogStyle = {
    height: '95%',
    width: '100%',
    maxWidth:"100%",
    maxHeight:"100%",
    margin: "0px 10px 0px  10px ",
    overFlow: 'hidden',
    backgroundColor: "#F9F5EB",
    borderRadius :'0',
}


const ChatDialog = () => {

  const {person}= useContext(AccountContext);
  return (
    <div >
      <Dialog 
       open={true}
       PaperProps={{ sx: dialogStyle }}
       hideBackdrop={true}
      > 
        <Component>
            <LeftComponent>
                <Menu/>
            </LeftComponent>
            <RightComponent>
                {/* <EmptyChat/> */}
                {/* <ChatBox/> */}
                {Object.keys(person).length ? <ChatBox/> : <EmptyChat/>}
            </RightComponent>
        </Component>
        
      </Dialog>
    </div>
  )
}

export default ChatDialog
