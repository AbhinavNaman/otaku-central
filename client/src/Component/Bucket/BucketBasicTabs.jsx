import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import BucketCard from "./BucketCard";
import Grid from "@mui/material/Grid";
import { useDispatch, useSelector } from "react-redux";
import { fetchBuckets, updateBuckets } from "../../actions/bucket";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

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

export default function BucketBasicTabs() {
  const dispatch = useDispatch();

  useEffect(() =>{
    dispatch(fetchBuckets());
  },[])

  const bucket = useSelector((state)=>state.bucket)
  const wiki = useSelector((state)=>state.wiki)
  const bucketListWiki = wiki?.filter((wiki)=>wiki._id === bucket._id);


  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }} style={{marginTop:'60px'}}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }} 
      // style={{position: "fixed",}}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="OnGoing" {...a11yProps(0)} />
          <Tab label="Completed" {...a11yProps(1)} />
          <Tab label="Dropped" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0} >
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
          {bucketListWiki?.filter((bucket) => bucket.tag === 'OnGoing').map((bucket) =>{
            <Grid item xs={4}>
              <BucketCard prop={prop}/>
            </Grid>
          })}
          </Grid>
        </Box>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
          {bucketListWiki?.filter((bucket) => bucket.tag === 'Completed').map((bucket) =>{
            <Grid item xs={4}>
              <BucketCard prop={prop}/>
            </Grid>
          })}
          </Grid>
        </Box>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
          {bucketListWiki?.filter((bucket) => bucket.tag === 'Dropped').map((bucket) =>{
            <Grid item xs={4}>
              <BucketCard prop={prop}/>
            </Grid>
          })}
          </Grid>
        </Box>

      </CustomTabPanel>
    </Box>
  );
}


