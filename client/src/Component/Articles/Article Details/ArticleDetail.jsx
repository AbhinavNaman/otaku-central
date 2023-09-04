import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import {
  Grid,
 
} from "@mui/material";
import Navbar from "../../Navbar";
import SideBar from "../../SideBar";
import ArticleDetailCard from "./ArticleDetailCard";
import ArticleDetailCommentSection from "./Article_Detail_Comment/ArticleDetailCommentSection";
import { useDispatch, useSelector } from "react-redux";
import { useParams} from "react-router-dom";
// import { fetchArticle } from "../actions/jobs";

const article = {title:'title 14', fiction:'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels,if you like. This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels,if you like. This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup aella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels,if you like.This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels,if you ', ratingValue:1, date:'September 14, 2016', tag:'Most Popular'}
export default function ArticleDetail() {

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  // const [userId, setUserId] = useState(user.result._id);

  const dispatch = useDispatch();
  // const { article } = useSelector((state) => state.article);
  const { id } = useParams();
 

  // useEffect(() => {
  //   dispatch(fetchArticle(id));
  // }, [id]);

  // useEffect(() => {
  //   setUser(JSON.parse(localStorage.getItem("profile")));
  //   if (user) {
  //     setUserId(user.result._id);
  //   }
  // }, [article]);

  // if (!article) return null;

  return (
    <div>
      <Box sx={{ flexGrow: 1 }} style={{ margin: 0, padding: 0 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Navbar />
          </Grid>
          <Grid item xs={1}>
            <SideBar />
          </Grid>

          <Grid item xs={11}>
            {/* ArticleDetails component start         */}

            <Box sx={{ flexGrow: 1 }}>

              <Grid container spacing={2}>
                <Grid item xs={8} sx={{ flexGrow: 1, mt: 8 }}>
                {console.log("====??", article)}
                 <ArticleDetailCard  prop={article}/>
                
                </Grid>

                {/* //comment */}
                <Grid item xs={4} style={{ position: "fixed", right: "10px" }}>
                 <ArticleDetailCommentSection />
                </Grid>
                {/* //comment */}

              </Grid>
            </Box>

            {/* ArticleDetail component end         */}
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
