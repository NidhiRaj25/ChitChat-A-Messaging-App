import MoreVertIcon from '@mui/icons-material/MoreVert';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import styled from '@emotion/styled';


const MenuOption = styled(MenuItem)`
    font-size:14px;
    padding:15px 60px 5px 24px;
    background-color:#e6d7ca;
    border-bottom : 1px solid white;
    
    display:flex;
    align-items:center;
    text-align:center;
`


const HeaderMenu = ({setOpenDrawer}) => {

    const[open,setOpen]=useState(false);
    const handleClose=()=>{
        setOpen(null);
    }
    const handleClick= (e) =>{
        setOpen(e.currentTarget);
    }

    return (
        <div>
            <MoreVertIcon  onClick={handleClick}/>
            <Menu
                id="basic-menu"
                anchorEl={open}
                keepMounted
                open={open}
                onClose={handleClose}
                getContentAnchorE1={null}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal:"center", 
                }}
                transformOrigin={
                    {
                        vertical:'top',
                        horizontal:'right'
                    }
                }    
            >
                {/* calling two function  */}
                <MenuOption onClick={()=>{handleClose(); setOpenDrawer(true);}}>Profile</MenuOption>
                <MenuOption onClick={handleClose}>My account</MenuOption>
                <MenuOption onClick={handleClose}>Logout</MenuOption>
            </Menu>
        </div>
    )
}

export default HeaderMenu
