import React from 'react'

import { Paper, Grid } from '@mui/material'


export default function News({data}) {
    const containerStyle = {
        margin:'10px 0',
        padding: '10px 20px',
        bgcolor: 'rgb(198, 202, 203, 0.5)'
    };
    const BODYSTYLE ={
        display: 'flex', alignItems: 'center', color:'#DDE1EA'
    }

    return (
        <Paper className= "news-container" sx={containerStyle} elevation={2}>

            <Grid className='header-container'  sx={{display: 'flex', alignItems:'center'}} marginBottom={1}>
                <Grid className='header-container-left' sx={{color:'#303133', fontWeight:'bold'}}>
                    <h3>News</h3>
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
                <Grid sx={{display: 'flex', flexDirection:'column', paddingLeft:'10px', bgcolor:'#372FA1', padding:'15px', borderRadius:'18px', marginBottom:'23px'}}>
                    <Grid sx={BODYSTYLE} height={25} fontWeight='bold' textTransform='capitalize'>
                        <p>{data.title}</p>
                    </Grid>
                    <Grid sx={BODYSTYLE} fontSize='small'>
                        <p>{data.body}</p>
                    </Grid>
                </Grid>
            ))}

        </Paper>
    )
}
