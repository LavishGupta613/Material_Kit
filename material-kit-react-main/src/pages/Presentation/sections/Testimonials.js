/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import DefaultReviewCard from "examples/Cards/ReviewCards/DefaultReviewCard";

// Images
import appleLogo from "assets/images/logos/gray-logos/logo-apple.svg";
import facebookLogo from "assets/images/logos/gray-logos/logo-facebook.svg";
import nasaLogo from "assets/images/logos/gray-logos/logo-nasa.svg";
import vodafoneLogo from "assets/images/logos/gray-logos/logo-vodafone.svg";
import digitalOceanLogo from "assets/images/logos/gray-logos/logo-digitalocean.svg";

function Information() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid
          container
          item
          xs={12}
          lg={6}
          justifyContent="center"
          sx={{ mx: "auto", textAlign: "center" }}
        >
          <MKTypography variant="h3">Courses</MKTypography>
          {/* <MKTypography variant="h2" color="info" textGradient mb={2}>
            1,679,477+ web developers
          </MKTypography> */}
          {/* <MKTypography variant="body1" color="text" mb={2}>
            Many Fortune 500 companies, startups, universities and governmental institutions love
            Creative Tim&apos;s products.
          </MKTypography> */}
        </Grid>
        
        <Grid container spacing={3} sx={{ mt: 8 }}>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
              name="Current Courses"
             
              review=<div><a href="https://ubisysresearch.github.io/courses/mpc/index.html" >Mobile and Pervasive Computing (Jan 2023)</a></div>
              
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
            
              name="Undergraduate Courses"
              date="1 week ago"
              review=<div><ul>
                <li>Operating Systems [Monsoon 2021, Spring 2021, Monsoon 2022]</li>
                <li>Computer Networks [Monsoon 2020]</li>
                <li>Operating Systems [Spring2020]</li>
                <li>Algorithms [Monsoon 2019, 2018]</li>
                <li>Ubiquitous Computing [Spring 2018, 2017]</li>
                <li>Distributed Systems [Monsoon 2017]</li>
              </ul></div>
              rating={5}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
              name="Postgraduate Courses"
              date="3 weeks ago"
              review=<div><ul>
                <li>Computer Network Protocols and Applications [Monsoon 2022]</li>
                <li>Mobile and Pervasive Computing [Spring 2020]</li>
                <li>Object Oriented Programming</li>
                <li>Advanced Operating Systems</li>
              </ul></div>
              rating={5}
            />
          </Grid>
        </Grid>
        <Divider sx={{ my: 6 }} />
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={6} md={4} lg={2}>
            <MKBox component="img" src={appleLogo} alt="Apple" width="100%" opacity={0.6} />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox component="img" src={facebookLogo} alt="Facebook" width="100%" opacity={0.6} />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox component="img" src={nasaLogo} alt="Nasa" width="100%" opacity={0.6} />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox component="img" src={vodafoneLogo} alt="Vodafone" width="100%" opacity={0.6} />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox
              component="img"
              src={digitalOceanLogo}
              alt="DigitalOcean"
              width="100%"
              opacity={0.6}
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
