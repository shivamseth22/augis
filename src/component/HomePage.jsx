// HomePage.jsx
import React from 'react';
import { mainBackground } from '../utils/constants';
import { Box } from '@mui/material';

const HomePage = ({ filteredData }) => {
    const divStyle = {
        backgroundImage: `url(${mainBackground})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        width: '100%',
        height: '100vh',
        overflowY: 'auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
    };

    const imageStyle = {
        width: '250px',
        height: 'auto',
        margin: '20px',
        transition: 'transform 0.3s',
    };

    const handleHover = (event) => {
        event.target.style.transform = 'scale(1.1)';
    };

    const handleHoverOut = (event) => {
        event.target.style.transform = 'scale(1)';
    };

    const handleOnclick = (data)=>{
        console.log(data)
    }
    return (
        <div style={divStyle}>
            {filteredData.map((item, index , arr) => (
                <>
                {console.log(arr[0])}


              
                <Box key={index} style={{ borderRadius: '10px', }} onClick={handleOnclick(item.action.text)}>
                    <img
                        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/${item.imageId}`}
                        alt=""
                        style={{ ...imageStyle, borderRadius: '15px' }} // Apply border radius to the image style
                        onMouseOver={handleHover}
                        onMouseOut={handleHoverOut}
                    />
  

                </Box></>
            ))}
        </div>
    );
};

export default HomePage;
