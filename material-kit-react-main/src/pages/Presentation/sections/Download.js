
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
// import Tooltip from "@mui/material/Tooltip";
import MailOutlineIcon from "@mui/icons-material/MailOutline"; // Import the email icon
import LocationOnIcon from "@mui/icons-material/LocationOn";
// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

// Images
import bgImage from "assets/images/shapes/waves-white.svg";
// import { Margin } from "@mui/icons-material";

function Download() {
  return (
    <MKBox component="section" py={{ xs: 0, sm: 12 }}>
      <MKBox
        variant="gradient"
        bgColor="dark"
        position="relative"
        borderRadius="xl"
        sx={{ overflow: "hidden" }}
      >
        <MKBox
          component="img"
          src={bgImage}
          alt="pattern-lines"
          position="absolute"
          top={0}
          left={0}
          width="100%"
          zIndex={1}
          opacity={0.2}
        />
        <Container sx={{ position: "relative", zIndex: 2, py: 12 }}>
          <Grid container item xs={12} md={7} justifyContent="center" mx="auto" textAlign="left">
            <MKTypography variant="h3" color="white">
              Do you love this awesome
            </MKTypography>
            <MKTypography variant="h3" color="white" mb={1}>
              UI Kit for ReactJS &amp; MUI?
            </MKTypography>
            <MKTypography variant="body2" color="white" mb={6}>
              Cause if you do, it can be yours for FREE. Hit the button below to navigate to
              Creative Tim where you can find the Design System in HTML. Start a new project or give
              an old Bootstrap project a new look!
            </MKTypography>
            <MKButton
              variant="gradient"
              color="info"
              size="large"
              component="a"
              href="https://www.creative-tim.com/product/material-kit-react"
              sx={{ mb: 2 }}
            >
              Download Now
            </MKButton>
          </Grid>
        </Container>
      </MKBox>
      <Container>
        <Grid container item xs={12} justifyContent="center">
          <Grid container item xs={12} lg={4} justifyContent="flex-start">
            <MKBox textAlign="left">
            <MKTypography variant="h3" mt={6} mb={3}>
                Photos
              </MKTypography>
              <MKBox component="img" src="https://ubisysresearch.github.io/home/photos/PHOTO-2022-05-12-15-44-02.jpg" width="350px" height="250px" />
            </MKBox>
          </Grid>
          <Grid container item xs={12} lg={4} justifyContent="flex-start">
            <MKBox textAlign="left">
            
              <MKBox component="img" src="https://ubisysresearch.github.io/home/photos/gallery00005.jpg" width="350px" height="250px" sx={{ marginLeft: '-60px' ,marginTop:'115px'}}/>
            </MKBox>
          </Grid>
          <Grid container item xs={12} lg={4} justifyContent="flex-start">
  <MKBox textAlign="left">
   
    <MKTypography variant="body1" mt={4}>
                <MailOutlineIcon />{" "}
                <a href="mailto:suchetana@iitj.ac.in">suchetana@iitj.ac.in</a>
              </MKTypography>
              <MKTypography variant="body1">
                <LocationOnIcon /> Department of Computer Science,  IIT   Jodhpur, India
              </MKTypography>
              <MKTypography variant="body1">Room 215, 1st Floor</MKTypography>
    <iframe
      width="110%"
      height="400"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15434.987909360808!2d73.00530567554889!3d26.270122112275576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39631d63b086b455%3A0x8cdd0bc72ce2f9a3!2sIndian%20Institute%20of%20Technology%20Jodhpur!5e0!3m2!1sen!2sin!4v1666839641866!5m2!1sen!2sin"
      loading="lazy"
    />
    
  </MKBox>
</Grid>
        </Grid>
        <Grid container item xs={12} justifyContent="center">
          <Grid container item xs={1} lg={4} justifyContent="flex-start">
            <MKBox textAlign="left">
            
              <MKBox component="img" src="https://ubisysresearch.github.io/home/photos/PHOTO-2022-05-12-15-44-03.jpg" width="350px" height="250px" sx={{ marginLeft: '-210px' , marginTop :'-200px' }}/>
            </MKBox>
          </Grid>
          <Grid container item xs={12} lg={4} justifyContent="flex-start">
            <MKBox textAlign="left">
            
              <MKBox component="img" src="https://ubisysresearch.github.io/home/photos/PHOTO-2022-10-29-13-36-16.jpg" width="350px" height="250px" sx={{ marginLeft: '-270px' , marginTop :'-200px'}}/>
            </MKBox>
          </Grid>
          </Grid>
      </Container>

    </MKBox>
  );
}

export default Download;
