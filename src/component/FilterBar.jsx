import React from 'react';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';

const FilterBar = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div style={{ 
        display: 'inline-flex', 
        padding: '8px 0', 
        overflowX: 'auto', 
        whiteSpace: 'nowrap', 
        margin: '10px auto', 
        maxWidth: '100%', 
        scrollbarWidth: 'thin', 
        scrollbarColor: '#888 #f5f5f5' 
      }}>
        <div style={{ display: 'inline-flex', minWidth: '100%' }}>
          {/* Ensure container expands */}
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
      </div>
    </div>
  );
};

export default FilterBar;
