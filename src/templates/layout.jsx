import Grid from "@mui/material/Unstable_Grid2";
import {Box, CssBaseline} from "@mui/material";

function Layout({children}) {
    const [menuComponent, 
            headerComponent, 
            brandingComponent, 
            pkiOneComponent, 
            pkiTwoComponent, 
            pkiThreeComponent, 
            pkiFourComponent,
            TopScorerComponent,
            ResultComponent,
            NewsComponent
            ] = children;

    return (
        <Box style={{display: "flex", height: "100vh", margin: "10px 0"}}>
        <CssBaseline />
        <Grid container sx={{flexGrow: 1}}>
            <Grid item flexBasis={57}>{menuComponent}</Grid>
            <Grid item flex={1} sx={{margin:'0 20px'}}>
                <Grid xs={12}>{headerComponent}</Grid>
                <Grid xs={12} >{brandingComponent}</Grid>
                <Grid container spacing={3}>
                    <Grid flex={1}>{pkiOneComponent}</Grid>
                    <Grid flex={1}>{pkiTwoComponent}</Grid>
                    <Grid flex={1}>{pkiThreeComponent}</Grid>
                    <Grid flex={1}>{pkiFourComponent}</Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid flex={1}>{TopScorerComponent}</Grid>
                    <Grid flex={1}>{ResultComponent}</Grid>
                    <Grid flex={1}>{NewsComponent}</Grid>
                </Grid>
            </Grid>
        </Grid>
        </Box>
    );
}

export default Layout;