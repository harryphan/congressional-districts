import { Typography} from '@mui/material';
import React from 'react';


const Copyright = () => {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {`Copyright © Harry Phan ${new Date().getFullYear()} `}
        </Typography>
    );
}

export default Copyright;