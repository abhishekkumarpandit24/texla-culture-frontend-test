import React, { useState } from "react";
import { ProSidebarProvider, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography } from "@mui/material";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const Item = ({ title, icon, selected, setSelected }) => {
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: selected === title ? "green" : null,
        margin: "15px 0 5px 45px"
      }}
      onClick={() => setSelected(title)}
      // icon={icon}
    >
      <Box display="flex" justifyContent="space-between">

      <Typography variant="h6" sx={{fontWeight:"lighter"}}>{title}</Typography>
      <IconButton>{icon}</IconButton>
      </Box>
    </MenuItem>
  );
};

const SideBar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Home");
  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `gray !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >
      <ProSidebarProvider collapsed={isCollapsed}>
        <Menu>
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <FaAngleDoubleRight /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: "gray",
            }}
          >
            {!isCollapsed && (
              <Box display="flex" justifyContent="flex-end" alignItems="center">
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <FaAngleDoubleLeft />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <>
              <Box paddingLeft={isCollapsed ? undefined : "5%"} width="300px">
                <Box mb="25px">
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    backgroundColor="lightgray"
                    borderRadius="10px"
                    marginLeft="10px"
                    height="50%"
                    padding="20px 0px 20px 0px"
                  >
                    <PersonOutlinedIcon />
                    <Typography variant="h6" sx={{ ml: 2 }}>
                      Ananya Singh
                    </Typography>
                  </Box>
                </Box>
                <Typography variant="h6" sx={{ m: "15px 0 5px 20px", fontWeight: 'bold' }}>
                  PEOPLE CARE SYSTEM
                </Typography>
                <Item
                  title="Home"
                  selected={selected}
                  setSelected={setSelected}
                />
                <Typography variant="h6" sx={{ m: "15px 0 5px 20px", fontWeight: 'bold' }}>
                  MANAGEMENT
                </Typography>
                <Item
                  title="Employee"
                  selected={selected}
                  setSelected={setSelected}
                  icon={<ChevronRightIcon/>}
                />
                <Item
                  title="Attendance"
                  selected={selected}
                  setSelected={setSelected}
                  icon={<ChevronRightIcon/>}
                />
                <Item
                  title="Leaves"
                  selected={selected}
                  setSelected={setSelected}
                  icon={<ChevronRightIcon/>}
                />

                <Item
                  title="Payroll"
                  selected={selected}
                  setSelected={setSelected}
                  icon={<ChevronRightIcon/>}
                />
                <Item
                  title="Separation"
                  selected={selected}
                  setSelected={setSelected}
                />
              </Box>
            </>
          )}
        </Menu>
      </ProSidebarProvider>
    </Box>
  );
};

export default SideBar;
