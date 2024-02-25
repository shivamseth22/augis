import React from 'react';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';

const FilterBar = () => {
  return (
    <div style={{ 
      display: 'flex', 
      padding: '8px', 
      overflowX: 'auto', 
      whiteSpace: 'nowrap', 
      margin: '10px auto', // Center horizontally
      justifyContent: 'center', // Center horizontally
      maxWidth: '100%',
      paddingLeft: '20px', // Adjust as needed
      scrollbarWidth: 'thin', // Adjust scrollbar width
      scrollbarColor: '#888 #f5f5f5' // Adjust scrollbar colors
    }}>
      <Box marginRight="10px">
        <Button variant="contained" color="primary">
          Relevance
        </Button>
      </Box>
      <Box marginRight="10px">
        <Button variant="contained" color="primary">
          Delhivery Time
        </Button>
      </Box>
      <Box marginRight="10px">
        <Button variant="contained" color="primary">
          Rating
        </Button>
      </Box>
      <Box marginRight="10px">
        <Button variant="contained" color="primary">
          Cost: Low to High
        </Button>
      </Box>
      <Box marginRight="10px">
        <Button variant="contained" color="primary">
          Cost: High to Low
        </Button>
      </Box>
    </div>
  );
};

export default FilterBar;
