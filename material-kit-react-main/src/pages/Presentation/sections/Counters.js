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
// import Divider from "@mui/material/Divider";
// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import DefaultCounterCard from "examples/Cards/CounterCards/DefaultCounterCard";

function Counters() {
  return (
    <MKBox component="section" py={1}>
      <Container>
        <Grid container item xs={40} lg={30} sx={{ mx: "auto" }}>
          <Grid item xs={12} md={40}>
            <DefaultCounterCard  
              head="UbiSys"
              description="The Ubiquitous Systems (UbiSys) research lab, led by Dr. Suchetana Chakraborty, focuses on many areas of ubiquitous computing including novel user interface technology, health sensing, activity recognition, low-power sensing, and energy sensing by applying expertise in sensing, signal processing, embedded systems, circuits, and human-computer interaction.

The UbiSys lab consists of an interdisciplinary team of investigators that tackle challenging research problems both from building the enabling hardware and software systems to the deployment and evaluation of these technologies in real-world settings, especially around health. We collaborate very closely with IIT Professors in the Department of Computer Science & Engineering, and the Interdisciplinary department at the Indian Institute of Technology Jodhpur. In addition, we have close collaborations with many other institutions such as UMBC, IIT Kharagpur, IIT Bombay."
            />
           
          {/* </Grid>
          <Grid item xs={12} md={4} display="flex">
            <Divider orientation="vertical" sx={{ display: { xs: "none", md: "block" }, mx: 0 }} />
            <DefaultCounterCard
              count={15}
              suffix="+"
              title="Design Blocks"
              description="Mix the sections, change the colors and unleash your creativity"
            />
            <Divider orientation="vertical" sx={{ display: { xs: "none", md: "block" }, ml: 0 }} />
          </Grid>
          <Grid item xs={12} md={4}>
            <DefaultCounterCard
              count={4}
              title="Pages"
              description="Save 3-4 weeks of work when you use our pre-made pages for your website"
            />
          </Grid> */}
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Counters;
