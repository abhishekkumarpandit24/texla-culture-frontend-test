import React from "react";
import { Box, Paper } from "@mui/material";
import Header from "../Header";
import Table from "../table";
import Stats from "../Stats";
import EmailIcon from "@mui/icons-material/Email";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import NotificationsIcon from "@mui/icons-material/Notifications";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";

const Dashboard = () => {
  return (
    <Box m="10px">
      {/* HEADER */}
      <Box ml="40px" mr="30px">
        <Header title="Job Offers" />
      </Box>

      <Paper
        elevation={4}
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(12, 1fr)",
          gridAutoRows: "140px",
          gap: "15px",
          borderRadius: '20px',
          margin: '30px'
        }}
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 4"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Stats
            title="Total Offered"
            subtitle="20 invoices"
            increase="$1,205"
            icon={<EmailIcon sx={{ color: "orange" }} />}
          />
        </Box>
        <Box
          gridColumn="span 4"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Stats
            title="Pending Offers"
            subtitle="20 invoices"
            increase="$1,205"
            icon={
              <PendingActionsIcon sx={{ color: "orange" }} />
            }
          />
        </Box>
        <Box
          gridColumn="span 4"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Stats
            title="Pending Onboarding"
            subtitle="20 invoices"
            increase="$1205.75"
            icon={<PersonAddIcon sx={{ color: "orange" }} />}
          />
        </Box>

        {/* ROW 2 */}
        <Box
          gridColumn="span 4"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Stats
            title="Joining Overdue"
            subtitle="20 invoices"
            increase="$1,205.75"
            icon={
              <NotificationsIcon sx={{ color: "orange" }} />
            }
          />
        </Box>
        <Box
          gridColumn="span 4"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Stats
            title="Joined"
            subtitle="20 invoices"
            increase="$1,205.75"
            icon={<CheckCircleIcon sx={{ color: "green" }} />}
          />
        </Box>
        <Box
          gridColumn="span 4"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Stats
            title="Not Joined"
            subtitle="20 invoices"
            increase="$1,205.75"
            icon={<CancelIcon sx={{ color: "gray" }} />}
          />
        </Box>
      </Paper>
      <Table />
    </Box>
  );
};

export default Dashboard;
