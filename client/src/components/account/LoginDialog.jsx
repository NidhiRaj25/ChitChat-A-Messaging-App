import React from 'react';
import Dialog from '@mui/material/Dialog';
import { styled } from '@mui/material';
import Box from '@mui/material/Box';
import Loginform from './Loginform';
import { qrCodeImage } from '../../constants/Data';



const dialogStyle = {
    height: '80%',
    width: '100%',
    overFlow: 'hidden',
    backgroundColor: "#bba391",

}

const ParentBox = styled(Box)`
    margin: 10px 10px, 10px, 10px;
    display:flex;
    flex-direction:column;
    @media(min-width: 0px) and (max-width: 600px){
        width: 100%;
        display: flex; 
        justify-content: center;
        align-items: center;
        margin: 50px 10px, 10px, 10px;
    }
 `

const Headline = styled(Box)`
    margin-top: 25px;
    text-align: center;
 
    @media(min-width: 0px) and (max-width: 600px){
        margin: 10px 225px  0px 220px;   
    }
 `

const TextStyle = styled(Box)`
    margin: 10px 20px 10px 20px;
    display: flex;
    align-item: center;
    justify-content: center;
    flex-direction:row;
    heigth:80%;
    width: 95%;

    @media(min-width: 0px) and (max-width: 600px){
        width: 90%;
        flex-direction:column;
    } 
`

const Login = styled(Box)`
    margin: 0px 10px 0px 10px;
`

const ChildText = styled(Box)`
    display:flex;
    align-items: center;
    flex-direction:column;

    @media(min-width: 0px) and (max-width: 600px){
        margin: 0px 0px 0px 0px;
    }
`

const QRcode = styled('img')({
    height: 139,
    width: 139,
    margin: '10px 30px 0px 30px',
})




const LoginDialog = () => {


    return (
        <div>
            <Dialog
                open={true}
                PaperProps={{ sx: dialogStyle }}
                hideBackdrop={true}
            >
                <ParentBox>

                    <Headline><h1>ChitChat</h1></Headline>

                    <TextStyle>

                        <Login><Loginform /></Login>

                        {/* <Box><Loginform/> </Box> */}
                        {/* <ChildText ><QRcode src={qrCodeImage} alt='qr code' /> <h6 style={{ color: 'black' }}>Scan QR code</h6></ChildText> */}


                    </TextStyle>


                </ParentBox>

            </Dialog>
        </div>
    )
}

export default LoginDialog
