import React from 'react'

import { Paper, Grid } from '@mui/material'

import portoLogo from '../assets/img/porto-logo.png'
import chelseaLogo from '../assets/img/chelsea-logo.png'

export default function Result({data}) {

    // const {logo, team1, team2} = data ?? {};

    const containerStyle = {
        padding: '10px 20px',
        margin:'10px 0',
        marginLeft: '10px',
        bgcolor: 'rgb(198, 202, 203, 0.5)'
    };

    const TEAMSTYLE = {
        display: 'flex', 
        alignItems: 'center', 
        color:'white', 
        textTransform:'capitalize',
        gap:'15px'
    }

    // const imgTeam = data.team1.name === "porto" ? portoLogo : chelseaLogo;


    return (
        <Paper className= "result-container" sx={containerStyle} elevation={2}>

            <Grid className='header-container'  sx={{display: 'flex', alignItems:'center'}} marginBottom={1}>
                <Grid className='header-container-left' sx={{color:'#303133', fontWeight:'bold'}}>
                    <h3>Result</h3>
                </Grid>
                <Grid className='header-container-right' 
                    sx={{display: 'flex', 
                    alignItems: 'center', 
                    marginLeft: 'auto', 
                    color:'#303133', 
                    fontWeight:'bold',
                    borderRadius:'20px',
                    paddingX:'8px',
                    height:'20px'
                    }}>
                    <h5>view all</h5>
                </Grid>
            </Grid>
            
            {data.map((data) => (

                <Grid className='result' 
                        sx={{
                        display: 'flex', 
                        alignItems: 'center',
                        bgcolor:'#192534', 
                        borderRadius:'10px',
                        padding:'10px 15px',
                        marginBottom:'20px'
                        }}>

                        <Grid sx={TEAMSTYLE}>
                            <img src={portoLogo} alt="fcb-logo"/>
                            <p>{data.team1.name}</p>
                        </Grid>
                        <Grid sx={{display: 'flex', alignItems: 'center', textAlign:'center', marginLeft: 'auto', color:'white', bgcolor:'#1E4BD7', height:'30px', p:'7px', borderRadius:'10%'}}>
                            <p>{data.team1.score}</p>-<p>{data.team2.score}</p>
                        </Grid>
                        <Grid sx={TEAMSTYLE} marginLeft='auto'>
                            <p>{data.team2.name}</p>
                            <img src={chelseaLogo} alt="rm-logo" />
                        </Grid>
                </Grid>
            ))}
        </Paper>
    )
}
