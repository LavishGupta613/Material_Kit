import React from 'react';
import { Link ,Route ,Routes} from 'react-router-dom'; // Remove the unnecessary 'Route' and 'Routes' imports
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import MKBadge from "components/MKBadge";
import MKTypography from "components/MKTypography";
import ExampleCard from "pages/Presentation/components/ExampleCard";
import data1 from './data';


function DesignBlocks1() {
  const renderData = data1.map(({ title, items }) => (
    <Grid container spacing={0} sx={{ mb: 0 }} key={title}>
      <Grid item xs={0} lg={0}>
        <MKBox position="sticky" top="100px" pb={{ xs: 2, lg: 8 }}>
          <MKTypography variant="h3" fontWeight="bold" mb={1}>
            {title}
          </MKTypography>
        </MKBox>
      </Grid>
      <Grid item xs={2} lg={12}>
        <Grid container spacing={3}>
          {items.map(({ image, name, count, des, route, pro }) => (
            <Grid item xs={1} md={3} sx={{ mb: 2 }} key={name}>
              <Link to={route}>
                <ExampleCard image={image} name={name} count={count} des={des} pro={pro} />
              </Link>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <div style={{ textAlign: 'center' }}>
        <Routes>
          <Route path='/publication' >dfghjk</Route>
        </Routes>
        <a href="http://127.0.0.1:3000/material-kit-react-main/src/pages/Presentation/sections/DC%20Publication/cse.iitkgp.ac.in/resgrp/ubinet/publications/index.html" style={{ textDecoration: 'underline' }}>See All Publications</a>
      </div>
    </Grid>
  ));

  return (
    <MKBox component="section" my={-20} py={6}>
      <Container>
     
        <Grid
          container
          item
          xs={1}
          lg={9}
          flexDirection="column"
          alignItems="center"
          sx={{ textAlign: "center", my: 6, mx: "auto", px: 0.75 }}
        >
          <MKBadge variant="contained" color="info" container sx={{ mb: 2 }} />
        </Grid>
      </Container>
      <Container sx={{ mt: 6 }}>{renderData}</Container>
    </MKBox>
  );
}

export default DesignBlocks1;
