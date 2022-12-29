import { Box, Button, Typography } from "@mui/material";

const Stats = ({ title, subtitle, icon, increase }) => {
  return (
    <Box width="100%" m="0 30px">
      <Box display="flex" justifyContent="flex-start">
        <Button>{icon}</Button>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="flex-start"
          mt="2px"
          ml="25px"
        >
          <Typography variant="h5" fontWeight="bold">
            {title}
          </Typography>

          <Typography variant="h6" sx="">
            {subtitle}
          </Typography>
          <Typography
            variant="h6"
            // color="orange"
          >
            {increase}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Stats;
