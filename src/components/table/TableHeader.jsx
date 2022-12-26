import React from "react";
import {
  Box,
  Select,
  TextField,
  InputAdornment,
  FormControl,
  InputLabel,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const TableHeader = () => {
    const typoStyle =  {
        fontWeight: "normal", fontSize: "14px", padding: "20px"
    }
  return (
    <Box>
      <Box
        display="flex"
        justifyContent="space-around"
        backgroundColor="#e0ebeb"
        borderRadius="25px 25px 0px 0px"
        margin="0px 28px 0px 28px"
      >
        <Typography variant="h4" sx={{fontSize: "14px", padding: "20px", borderBottom: "3px solid green", fontWeight: "bold"}}>
          <span style={{ backgroundColor: "#9999ff", color: "blue", marginRight: "3px", padding:"4px", borderRadius: "6px" }}>20</span>{" "}
          Total Offered
        </Typography>
        <Typography variant="h4" sx={typoStyle}>
          <span style={{ backgroundColor: "#ffebe6", color: "orange", marginRight: "3px", padding:"4px", borderRadius: "6px" }}>
            20
          </span>{" "}
          Pending Offers
        </Typography>
        <Typography variant="h4" sx={typoStyle}>
          <span style={{ backgroundColor: "#ff8566", color: "brown", marginRight: "3px", padding:"4px", borderRadius: "6px" }}>20</span>{" "}
          Pending Onboarding
        </Typography>
        <Typography variant="h4" sx={typoStyle}>
          <span style={{ backgroundColor: "#ffb3b3", color: "red", marginRight: "3px", padding:"4px", borderRadius: "6px" }}>20</span>{" "}
          Joining Overdue
        </Typography>
        <Typography variant="h4" sx={typoStyle}>
          <span style={{ backgroundColor: "#80ff80", color: "green", marginRight: "3px", padding:"4px", borderRadius: "6px" }}>20</span>{" "}
          Joined
        </Typography>
        <Typography variant="h4" sx={typoStyle}>
          <span style={{ backgroundColor: "#e0ebeb", color: "gray", marginRight: "3px", padding:"4px", borderRadius: "6px" }}>20</span>{" "}
          Not Joined
        </Typography>
      </Box>
      <Box display="flex" justifyContent="space-around" margin="25px 28px 0px 28px">
        <FormControl sx={{ width: "20%" }}>
          <InputLabel id="demo-simple-select-label">All</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="All"
          ></Select>
        </FormControl>
        <TextField
          variant="outlined"
          label="Start Date"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <CalendarMonthIcon />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          variant="outlined"
          label="End Date"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <CalendarMonthIcon />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          variant="outlined"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          label="Search"
        />
      </Box>
    </Box>
  );
};

export default TableHeader;
