import * as React from "react";
import Box from "@mui/material/Box";
import { Paper } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import {
  Select,
  TextField,
  InputAdornment,
  FormControl,
  InputLabel,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import {columns, rows} from "../../data/mockData"

export default function CustomTable() {
  const [relData, setRelData] = React.useState(rows);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const typoStyle = {
    fontWeight: "normal",
    fontSize: "14px",
    padding: "20px",
  };
  const clickedData = {
    fontSize: "14px",
    fontStyle: "sans-serif",
    padding: "20px",
    borderBottom: "3px solid green",
    fontWeight: "bold",
  };
  const handleTotalOffered = () => {
    const filteredData = rows.filter((row) => row.status[1] === "Full Time");
    setRelData(filteredData);
  };
  const handleJoined = () => {
    const filteredData = rows.filter((row) => row.status[0].props.children === "Joined");
    setRelData(filteredData);
  };
  const handleNotJoined = () => {
    const filteredData = rows.filter((row) => row.status[0].props.children === "Not Joined");
    setRelData(filteredData);
  };
  const handlePendingOffers = () => {
    const filteredData = rows.filter(
      (row) => row.status[0].props.children === "Pending Offer"
    );
    setRelData(filteredData);
  };
  const handlePendingOnboard = () => {
    console.log("rows", rows[6].status[0].props.children)
    const filteredData = rows.filter(
      (row) => row.status[0].props.children === "Pending Onboarding"
    );
    console.log("filteredData", filteredData);
    setRelData(filteredData);
  };
  const handleJoiningOverdue = () => {
    const filteredData = rows.filter(
      
      (row) => row.status[0].props.children === "Joining Overdue"
    );
    setRelData(filteredData);
    console.log(relData);
  };
  return (
    <Box>
      <Box>
        <Box
          display="flex"
          justifyContent="space-around"
          backgroundColor="#e0ebeb"
          borderRadius="25px 25px 0px 0px"
          margin="0px 28px 0px 28px"
        >
          <Typography
            sx={relData[0].status[0].props.children === "Joined" ? clickedData : typoStyle}
            onClick={handleTotalOffered}
          >
            <span
              style={{
                backgroundColor: "#9999ff",
                color: "blue",
                marginRight: "3px",
                padding: "4px",
                borderRadius: "6px",
              }}
            >
              11
            </span>{" "}
            Total Offered
          </Typography>
          <Typography
            variant="h4"
            sx={
              relData[0].status[0].props.children === "Pending Offer" ? clickedData : typoStyle
            }
            onClick={handlePendingOffers}
          >
            <span
              style={{
                backgroundColor: "#ffebe6",
                color: "orange",
                marginRight: "3px",
                padding: "4px",
                borderRadius: "6px",
              }}
            >
              2
            </span>{" "}
            Pending Offers
          </Typography>
          <Typography
            variant="h4"
            sx={
              relData[0].status[0].props.children === "Pending Onboarding"
                ? clickedData
                : typoStyle
            }
            onClick={handlePendingOnboard}
          >
            <span
              style={{
                backgroundColor: "#ff8566",
                color: "brown",
                marginRight: "3px",
                padding: "4px",
                borderRadius: "6px",
              }}
            >
              1
            </span>{" "}
            Pending Onboarding
          </Typography>
          <Typography
            variant="h4"
            sx={
              relData[0].status[0].props.children === "Joining Overdue"
                ? clickedData
                : typoStyle
            }
            onClick={handleJoiningOverdue}
          >
            <span
              style={{
                backgroundColor: "#ffb3b3",
                color: "red",
                marginRight: "3px",
                padding: "4px",
                borderRadius: "6px",
              }}
            >
              1
            </span>{" "}
            Joining Overdue
          </Typography>
          <Typography sx={typoStyle} onClick={handleJoined}>
            <span
              style={{
                backgroundColor: "#80ff80",
                color: "green",
                marginRight: "3px",
                padding: "4px",
                borderRadius: "6px",
              }}
            >
              4
            </span>{" "}
            Joined
          </Typography>
          <Typography
            variant="h4"
            sx={relData[0].status[0].props.children === "Not Joined" ? clickedData : typoStyle}
            onClick={handleNotJoined}
          >
            <span
              style={{
                backgroundColor: "#e0ebeb",
                color: "gray",
                marginRight: "3px",
                padding: "4px",
                borderRadius: "6px",
              }}
            >
              3
            </span>{" "}
            Not Joined
          </Typography>
        </Box>
        <Paper
          sx={{
            p: 2,
            m: "0 30px 0 30px",
            display: "flex",
            justifyContent: "space-around",
            gap: 2,
          }}
        >
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
        </Paper>
      </Box>
      <Paper
        elevation={2}
        sx={{ m: "0 30px", borderRadius: "0px 0px 20px 20px" }}
      >
        <TableContainer sx={{ maxHeight: 1000 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label[0]}
                    <br />
                    <span style={{ fontWeight: "lighter" }}>
                      {column.label[1]}
                    </span>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {relData
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.code}
                    >
                      {columns.map((column) => {
                        const value = row[column.id];
                        console.log("value", value)
                        return (
                          <>
                            <TableCell key={column.id} align={column.align}>
                              {column.format && typeof value === "number" 
                                ? column.format(value[0])
                                : value[0]}
                              <br />
                              <span style={{ fontWeight: "lighter" }}>
                                {value[1]}
                              </span>
                            </TableCell>
                          </>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}
