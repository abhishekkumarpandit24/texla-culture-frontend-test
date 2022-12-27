import * as React from 'react';
import Box from '@mui/material/Box';
import { useDemoData } from '@mui/x-data-grid-generator';
import { DataGrid } from '@mui/x-data-grid';
import { mockDataTeam } from '../../data/mockData';
import TableHeader from './TableHeader'
import { Paper } from '@mui/material';


export default function CustomFooter() {
  const { data } = useDemoData({
    dataSet: mockDataTeam,
    rowLength: 10,
    maxColumns: 10,
  });

  return (
    <Box>

    <TableHeader/>
    <Paper elevation={2} sx={{m:"30px", borderRadius: "0px 0px 20px 20px"}}>
    <Box sx={{ width: '100%' }}>
      <Box sx={{ height: 350, width: '100%', mb: 1 }}>
        <DataGrid
          {...data}
          
        />
      </Box>
      
    </Box>
    </Paper>
    </Box>
  );
}