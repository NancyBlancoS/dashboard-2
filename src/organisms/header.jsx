import React from 'react'

import {SearchOutlined, AccountCircleOutlined, NotificationsNoneOutlined} from '@mui/icons-material';
import {Grid, Box, IconButton } from '@mui/material';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';

import '../styles/styles.css';

export default function Header() {
    const iconStyle = {color: '#4B4E52'};
    
    return (
        <Box sx={{p: '2px 10px', display: 'flex'}}>
            <Grid>
                <Paper component="form" sx={{p: '2px 4px', display: 'flex', alignItems: 'center', width: 320, borderRadius: '10px', bgcolor: '#F3F4F6'}}>
                        <IconButton type="button" sx={{ p: '10px'}} aria-label="search">
                            <SearchOutlined sx={iconStyle}/>
                        </IconButton>
                        <InputBase sx={{ ml: 1, flex: 1, color: '#BFC3C6'}} placeholder="Search"/>
                </Paper>
            </Grid>
            <Grid sx={{display: 'flex', alignItems: 'center', justifyContent:'end'}} flex={1}>
                <IconButton>
                    <AccountCircleOutlined/>
                </IconButton>
                <IconButton>
                    <NotificationsNoneOutlined/>
                </IconButton>
            </Grid>

        </Box>
    )
}
