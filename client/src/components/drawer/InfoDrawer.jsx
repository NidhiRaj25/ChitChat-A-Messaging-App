import Drawer from "@mui/material/Drawer";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import styled from "@emotion/styled";
import Profile from "./Profile";
import { Box, Typography } from "@mui/material";


const drawerStyle = {
  left: 10,
  top: 19,
  height: "95%",
  width: "438px",
  boxShadow: "none",
};

const Header = styled(Box)`
  background-color: #ccbeb3;
  height: 106px;
  display: flex;
  //svg for arrowicon and p for typography
  & > svg,
  & > p {
    margin-top: 55px;
    font-weight: 600;
    margin-left: 15px;
    color: #000;
  }
`

const Component = styled(Box)`
  background-color: #f9f5eb;
  height: 85%;
`;

const Text = styled(Typography)`
  font-size: 18px;
`;


const InfoDrawer = ({ open, setOpen }) => {
  //{ open:true , setopen :function()} = props then //object destructure
  //  we can write props only in parenthesis.  and can also do object distructing whatever data(state function ) we want instead of all data(props) .

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Drawer
      className="drawer"
      open={open}
      onClose={handleClose}
      PaperProps={{ sx: drawerStyle }}
      style={{ zIndex: 1500 }}
      // zindex- comapring two zindex .which has greater zindex that would be upper
    >

      <Header className="profile">
        <ArrowBackIcon onClick={() => setOpen(false)} />
        <Text>Profile</Text>
        {/* //Typography is replacement of p tag. */}
      </Header>
      <Component>
        <Profile />
      </Component>

    </Drawer>
  );
};

export default InfoDrawer;
