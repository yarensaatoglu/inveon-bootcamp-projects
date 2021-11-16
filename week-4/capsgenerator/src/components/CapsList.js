import React from "react";
import { useEffect, useState } from "react";
import CapsCard from "./CapsCard";
import { Link } from "react-router-dom";
import { CircularProgress, Grid } from "@mui/material";

function CapsList() {
  const [memes, setMemes] = useState();

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((result) => setMemes(result.data.memes));
  }, []);

  if (!memes){
    return (
        <CircularProgress />
    );
  }

  return (
    <div>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        {memes.map((meme) => (
          <Grid item md={4}>
            <Link to={`/single-caps/${meme.id}`}>
              <CapsCard img={meme.url} name={meme.name} />
            </Link>
          </Grid>
        ))}
      </Grid>
    </div>
      
  );
}

export default CapsList;
