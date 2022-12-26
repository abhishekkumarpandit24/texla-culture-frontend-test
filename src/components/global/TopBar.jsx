import { IconButton, Box } from '@mui/material'
import SearchIcon from "@mui/icons-material/Search"
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined"
import React from 'react'

const TopBar = () => {
  return (
    <Box display="flex" justifyContent="space-between" p={2}>
        <Box display="flex"
            backgroundColor="row"
            borderRadius="3px"
        >
            <IconButton type="button" sx={{p:1, ml:4}}>
                <SearchIcon/>
            </IconButton>
          </Box>
        <Box display="flex">
            <IconButton sx={{mr:2}}>
                <PersonOutlinedIcon/>
            </IconButton>
        </Box>
    </Box>
  )
}

export default TopBar