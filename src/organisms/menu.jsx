import React from 'react'

import { AssignmentOutlined, HomeOutlined, ImageOutlined, PieChartOutlineOutlined, VideocamOutlined} from '@mui/icons-material';

import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import Paper from '@mui/material/Paper';

import '../styles/styles.css';

export default function Menu() {
    const iconStyle = {color: '#EEF3FD', py: '15px'};
    
    return (
        <Paper container className="container menu" sx={{bgcolor: '#3730A2', height: '100%', display:"flex", justifyContent:"center", alignItems:"center"}}>
            <MenuList>
                <MenuItem className="option" sx={iconStyle}>
                    <HomeOutlined/>
                </MenuItem>

                <MenuItem className="option" sx={iconStyle}>
                    <ImageOutlined/>
                </MenuItem>

                <MenuItem className="option" sx={iconStyle}>
                    <VideocamOutlined/>
                </MenuItem>

                <MenuItem className="option" sx={iconStyle}>
                    <PieChartOutlineOutlined/>
                </MenuItem>

                <MenuItem className="option" sx={iconStyle}>
                    < AssignmentOutlined/>
                </MenuItem>
            </MenuList>
        </Paper>
    )
}
