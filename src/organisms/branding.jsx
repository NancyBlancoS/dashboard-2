import React from 'react'

import {Grid, Box} from '@mui/material';

import '../styles/styles.css';

export default function Branding() {
    const containerStyle = {
        background: 'linear-gradient(to right, #4239C8, #322E83)',
        color: 'white',
        padding: '5px 20px',
        margin: '10px 0',
        borderRadius: '5px'
    };

    return (
        <Grid className= 'branding' direction="column" sx={containerStyle}>
            <Grid className='branding-title'>
                <h2>Champions League</h2>
            </Grid>
            <Grid className='branding-text' sx={{marginTop:'-20px'}}>
                <h6>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam numquam similique fugiat quia mollitia maxime</h6>
            </Grid>
        </Grid>
    )
}