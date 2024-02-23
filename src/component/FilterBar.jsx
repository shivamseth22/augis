import React from 'react';
import Button from '@material-ui/core/Button';
import Box from '@mui/material/Box';

const FilterBar = () => {
  return (
    <div style={{ display: 'flex', padding: '8px', overflowX: 'auto', whiteSpace: 'nowrap', margin: '10px', justifyContent: 'center' }}>
      <Box display="flex" marginRight="10px">
        <Button variant="contained" color="primary">
          Relevance
        </Button>
      </Box>
      <Box display="flex" marginRight="10px">
        <Button variant="contained" color="primary">
          Delhivery Time
        </Button>
      </Box>
      <Box display="flex" marginRight="10px">
        <Button variant="contained" color="primary">
          Rating
        </Button>
      </Box>
      <Box display="flex" marginRight="10px">
        <Button variant="contained" color="primary">
          Cost: Low to High
        </Button>
      </Box>
      <Box display="flex" marginRight="10px">
        <Button variant="contained" color="primary">
          Cost: High to Low
        </Button>
      </Box>
    </div>
  );
};

export default FilterBar;
