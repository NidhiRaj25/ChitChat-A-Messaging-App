import { useContext } from "react";
import { Box, Typography, styled } from "@mui/material";
import { AccountContext } from "../../context/AccountProvider";
import "./profile.css";

const Image = styled("img")({
  width: 200,
  height: 200,
  borderRadius: "50%",
  margin: "25px 0",
});

const Profile = () => {
  const { account } = useContext(AccountContext);
  return (
    <div>
      <Box className="ImageContainer">
        <Image className="image" src={account.picture} alt="dp" />
      </Box>

      <Box className="nameStyle">
        <Typography className="name">Your Name</Typography>
        <Typography className="accountName">{account.name}</Typography>
      </Box>

      <Box className=" blank">
        {" "}
        This name will be visible to your ChitChat contact.
      </Box>
      <Box className="aboutStyle">
        <Typography className="email">Email</Typography>
        <Typography className="accountEmail">{account.email}</Typography>
      </Box>
    </div>
  );
};

export default Profile;
