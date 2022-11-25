import React from 'react';
import Typography from "@mui/material/Typography";

const Text = ({ component, message, align, truncate, sx, onClick, className }) => (
    <Typography className={className} variant={component} align={align} onClick={onClick} sx={{ ...sx }}>
        {!Boolean(truncate) ? message : `${message.substring(0, truncate)}...`}
    </Typography>
);

export default Text;