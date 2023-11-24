import Grid from "@mui/material/Unstable_Grid2";
import {Box, CssBaseline} from "@mui/material";

function Layout({children}) {
    const [menuComponent, headerComponent, brandingComponent] = children;

    return (
        <Box style={{display: "flex", height: "100vh", margin: "10px 0"}}>
        <CssBaseline />
        <Grid container sx={{flexGrow: 1}}>
            <Grid item flexBasis={57}>{menuComponent}</Grid>
            <Grid item flex={1}>
                <Grid xs={12}>{headerComponent}</Grid>
                <Grid xs={12} >{brandingComponent}</Grid>
                <Grid container spacing={3}>
                    <Grid xs={3}>PKI</Grid>
                    <Grid xs={3}>PKI</Grid>
                    <Grid xs={3}>PKI</Grid>
                    <Grid xs={3}>PKI</Grid>
                </Grid>
                <Grid container spacing={3}>
                    <Grid xs={4}>Container 1</Grid>
                    <Grid xs={4}>Container 2</Grid>
                    <Grid xs={4}>Container 3</Grid>
                </Grid>
            </Grid>
        </Grid>
        </Box>
    );
}

export default Layout;