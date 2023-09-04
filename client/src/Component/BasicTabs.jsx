import React, { useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import MediaControlCard from "./MediaControlCard";
import Grid from "@mui/material/Grid";
import {useDispatch, useSelector} from 'react-redux';

import homePageCards from './BasicTabsData.js'



function CustomTabPanel(prop) {
  const { children, value, index, ...other } = prop;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = useState(0);
  // const homePageCards = useSelector(state=>state)

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }} style={{marginTop:'60px'}}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }} 
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Most Popular" {...a11yProps(0)} />
          <Tab label="Newest" {...a11yProps(1)} />
          <Tab label="Highest rating" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0} >
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
          {homePageCards.filter((card) => (card.tag === 'Most Popular')).map((card, index) =>{
            return(
              <Grid item xs={4} key={index}>
              <MediaControlCard data={card}/>
            </Grid>
            )
            
          })}
          </Grid>
        </Box>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
          {homePageCards.filter((card) => (card.tag === 'Newest')).map((card, index) =>{
            return(
              <Grid item xs={4} key={index}>
              <MediaControlCard data={card}/>
            </Grid>
            )
            
          })}
          </Grid>
        </Box>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
          {homePageCards.filter((card) => (card.tag === 'Highest rating')).map((card, index) =>{
            return(
              <Grid item xs={4} key={index}>
              <MediaControlCard data={card}/>
            </Grid>
            )
            
          })}
          </Grid>
        </Box>

      </CustomTabPanel>
    </Box>
  );
}


