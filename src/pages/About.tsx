import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";
import { useParams } from "react-router-dom";
import { Data } from "../types";
import { CharacterDetails } from "../components";

export const About = () => {
  let { userId } = useParams();

  const [data, setData] = useState<Data | undefined>();

  useEffect(() => {
    if (!userId) {
      return;
    }

    // TODO: Fetch data from API

    fetch("/output.json")
      .then((response) => response.json() as Promise<Data[]>)
      .then((jsonData) =>
        setData(jsonData.filter((item) => item.id === Number(userId))[0])
      )
      .catch((error) => console.error("Error fetching data: ", error));
  }, [userId]);

  return (
    <Grid container spacing={5} sx={{ margin: "0 2rem", minHeight: 500 }}>
      <Grid item xs={4}>
        <Box
          sx={{
            height: "100%",
            backgroundImage: `url(${data?.image})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        ></Box>
      </Grid>
      <Grid item xs={8}>
        {data ? (
          <CharacterDetails
            name={data.name}
            species={data.species}
            homeworld={data.homeworld}
            wiki={data.wiki}
          ></CharacterDetails>
        ) : null}
      </Grid>
    </Grid>
  );
};
