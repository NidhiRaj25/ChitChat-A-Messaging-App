import React from 'react'
import { useContext,useState } from 'react'
import { AccountContext } from '../../../context/AccountProvider'
import { Box, styled } from '@mui/material';
// import ChatIcon from '@mui/icons-material/Chat';
import InfoDrawer from '../../drawer/InfoDrawer';
import HeaderMenu from './HeaderMenu';


const Component = styled(Box)`
    height:48px;
    background-color:#ccbeb3;
    padding: 8px 16px 8px 16px;
    display:flex;
    align-items:center;
`
const Wrapper = styled(Box)`
    margin-left:auto;
    display:flex;
`
// for all child components
    // // & > *{
    // //     margin-left:4px;
    // //     color: black;
    // // };
    // // // sudo css
    // // & :first-child{
    // //     font-size:22px;
    // //     margin-right: 8px;
    // //     margin-top:4px; 
    // // }

const Image = styled("img")({
    height:34,
    width: 34,
    borderRadius: '50%',
})

const Header = () => {

    const[openDrawer, setOpenDrawer] = useState(false);
    const { account } = useContext(AccountContext);
    const toggleDrawer=()=>{
        setOpenDrawer(true);
    }

    return (
        <>
            <Component>
                <Image src={account.picture} alt='dp' onClick={()=> toggleDrawer()}/>
                <Wrapper>
                    {/* <ChatIcon/> */}
                    <HeaderMenu setOpenDrawer={setOpenDrawer}/>
                </Wrapper>
            </Component>
             {/* open and set open pass as a prop state function */}
            <InfoDrawer open={openDrawer} setOpen={setOpenDrawer} />
        </>
    )
}

export default Header
