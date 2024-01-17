import React from 'react'

import { Paper, Grid } from '@mui/material'

import idImg from '../assets/img/id-image.png'

export default function TopScorer({data}) {

    const containerStyle = {
        padding: '10px 20px',
        margin:'10px 0',
        bgcolor: 'rgb(198, 202, 203, 0.5)'
    };

    return (
        <Paper className= "top-scorer-container" sx={containerStyle} elevation={2}>

            <Grid className='header-container-top'  sx={{display: 'flex', alignItems:'center'}} marginBottom={1}>
                <Grid className='header-container-top-left' sx={{color:'#303133', fontWeight:'bold'}}>
                    <h3>Top Scorer</h3>
                </Grid>
                <Grid className='header-container-top-right' 
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
                    <Grid className='top-scorer' 
                        sx={{display: 'flex', 
                        alignItems: 'center', 
                        bgcolor:'white', 
                        borderRadius:'10px',
                        padding:'10px',
                        marginBottom:'17px' 
                        }}>

                        <Grid className='top-scorer-id' sx={{display: 'flex', alignItems: 'center'}}>
                            <img src={idImg} alt="id-img" />
                        </Grid>

                        <Grid sx={{display: 'flex', flexDirection:'column', paddingLeft:'20px'}}>
                            <Grid sx={{display: 'flex', alignItems: 'center', height:'30px'}} textTransform='capitalize'>
                                <p>{data.title}</p>
                            </Grid>
                            <Grid sx={{display: 'flex', alignItems: 'center', color:'#C6CACB', fontWeight:'bold', height:'30px'}} textTransform='uppercase'>
                                <p>{data.subTitle}</p>
                            </Grid>
                        </Grid>
                        <Grid sx={{display: 'flex', alignItems: 'center', marginLeft: 'auto', bgcolor:'#C6CACB', color:'#303133', borderRadius:'50%', padding:'6px 8px'}}>
                            {data.score}
                        </Grid>
                    
                    </Grid>
                ))}
        </Paper>
    )
}
