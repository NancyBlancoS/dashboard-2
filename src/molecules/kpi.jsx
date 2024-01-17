import React from 'react'

import { Paper, Grid } from '@mui/material'

import fcbLogo from '../assets/img/fcb-logo.png'
import rmLogo from '../assets/img/rm-logo.png'

export default function Kpi({data}) {

    const {logo, title, barcelona, realMadrid} = data ?? {};

    return (
        <Paper className= "kpi-container" sx={{padding:'5px 20px', textTransform:'capitalize'}} elevation={5}>
            <Grid className='kpi-top'  sx={{display: 'flex', alignItems:'center'}}>
                <Grid className='kpi-top-left' sx={{color:'#353535', fontWeight:'bold'}}>
                    <p>{title}</p>
                </Grid>
                <Grid className='kpi-top-right' 
                    sx={{
                        display: 'flex', 
                        alignItems: 'center', 
                        marginLeft: 'auto',
                        bgcolor:'#D94949', 
                        color:'#FFFFFF', 
                        fontWeight:'bold',
                        borderRadius:'20px',
                        paddingX:'8px',
                        height:'22px'
                    }}>
                    <h5>{logo}</h5>
                </Grid>
            </Grid>

            <Grid className='kpi-bottom' sx={{display: 'flex', alignItems: 'center'}}>
                <Grid sx={{display: 'flex', alignItems: 'center'}}><img src={fcbLogo} alt="fcb-logo"/></Grid>
                <Grid sx={{display: 'flex', alignItems: 'center', textAlign:'center', marginLeft: 'auto', color:'#D94949'}}>
                    <p>{barcelona}</p>:
                    <p>{realMadrid}</p>
                </Grid>
                <Grid sx={{display: 'flex', alignItems: 'center', marginLeft: 'auto'}}><img src={rmLogo} alt="rm-logo" /></Grid>
            </Grid>

        </Paper>
    )
}
