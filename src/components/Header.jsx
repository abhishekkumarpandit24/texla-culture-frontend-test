import { Typography, Box, Button } from "@mui/material";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

const Header = ({ title }) => {
  return (
    <Box mb="30px" display="flex" justifyContent="space-between">
        <Box>
      <Typography
        variant="h4"
        fontWeight="bold"
        sx={{ m: "0 0 5px 0" }}
      >
        {title}
      </Typography>
      <Typography variant="h6">
        Dashboard <span>&#183;</span> Job <span>&#183;</span> <span style={{fontWeight:'lighter'}}>Offers</span>
      </Typography>
        </Box>
        <Box>
            <Button variant="contained" color="success" startIcon={<AddOutlinedIcon/>}>New Offer</Button>
        </Box>
    </Box>
  );
};

export default Header;