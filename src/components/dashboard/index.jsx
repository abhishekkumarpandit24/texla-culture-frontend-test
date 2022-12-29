import React from "react";
import { Box, Paper } from "@mui/material";
import Header from "../Header";
import CustomTable from "../table";
import Stats from "../Stats";
import EmailIcon from "@mui/icons-material/Email";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import NotificationsIcon from "@mui/icons-material/Notifications";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";

const Dashboard = () => {
  return (
    <Box m="8px">
      {/* HEADER */}
      <Box ml="40px" mr="30px">
        <Header title="Job Offers" />
      </Box>

      <Paper
        elevation={4}
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(12, 1fr)",
          gridAutoRows: "150px",
          gap: "20px",
          borderRadius: '20px',
          margin: '30px'
        }}
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 4"
          mt="30px"
        >
          <Stats
            title="Total Offered"
            subtitle="20 invoices"
            increase={<span style={{color: "rgb(0,184,217)"}}>$1,205.75</span>}
            icon={<span
              style={{
                height: "30px",
                width: "30px",
                border: "5px solid rgb(0,184,217)",
                borderRadius: "50%",
                display: "inline-block",
              }}
            ><EmailIcon sx={{ color: "rgb(0,184,217)" }} /></span>}
          />
        </Box>
        <Box
          gridColumn="span 4"
          mt="30px"
        >
          
          <Stats
            title="Pending Offers"
            subtitle="20 invoices"
            increase={<span style={{color: "rgb(255,179,26)"}}>$1,205.75</span>}
            icon={<span
              style={{
                height: "30px",
                width: "30px",
                border: "5px solid rgb(255,179,26)",
                borderRadius: "50%",
                display: "inline-block",
              }}
            >
              <PendingActionsIcon sx={{ color: "rgb(255,179,26)" }} /></span>
            }
          />
          
        </Box>
        <Box
          gridColumn="span 4"
          mt="30px"
        >
          <Stats
            title="Pending Onboarding"
            subtitle="20 invoices"
            increase={<span style={{color: "rgb(238,176,118)"}}>$1,205.75</span>}
            icon={<span
              style={{
                height: "30px",
                width: "30px",
                border: "5px solid rgb(238,176,118)",
                borderRadius: "50%",
                display: "inline-block",
              }}
            ><PersonAddIcon sx={{ color: "rgb(238,176,118)" }} /></span>}
          />
        </Box>

        {/* ROW 2 */}
        <Box
          gridColumn="span 4"
        >
          <Stats
            title="Joining Overdue"
            subtitle="20 invoices"
            increase={<span style={{color: "rgb(255,86,48)"}}>$1,205.75</span>}
            icon={<span
              style={{
                height: "30px",
                width: "30px",
                border: "5px solid rgb(255,86,48)",
                borderRadius: "50%",
                display: "inline-block",
              }}
            ><NotificationsIcon sx={{ color: "rgb(255,86,48)" }} /></span>
              
            }
          />
        </Box>
        <Box
          gridColumn="span 4"
        >
          <Stats
            title="Joined"
            subtitle="20 invoices"
            increase={<span style={{color: "rgb(54,179,126)"}}>$1,205.75</span>}
            icon={<span
              style={{
                height: "30px",
                width: "30px",
                border: "5px solid rgb(54,179,126)",
                borderRadius: "50%",
                display: "inline-block",
              }}
            ><CheckCircleIcon sx={{ color: "rgb(54,179,126)" }} /></span>}
          />
        </Box>
        <Box
          gridColumn="span 4"
        >
          <Stats
            title="Not Joined"
            subtitle="20 invoices"
            increase={<span style={{color: "rgb(99,115,129)"}}>$1,205.75</span>}
            icon={<span
              style={{
                height: "30px",
                width: "30px",
                border: "5px solid rgb(99,115,129)",
                borderRadius: "50%",
                display: "inline-block",
              }}
            ><CancelIcon sx={{ color: "rgb(99,115,129)" }} /></span>}
          />
        </Box>
      </Paper>
      <CustomTable />
    </Box>
  );
};

export default Dashboard;
