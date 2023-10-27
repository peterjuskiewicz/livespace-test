import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import { Data } from "../types";

export const Home = () => {
  const [data, setData] = useState<Data[] | []>([]);

  useEffect(() => {
    fetch("/output.json") // If your JSON file is in public folder
      .then((response) => response.json())
      .then((jsonData) => setData(jsonData))
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);
  return (
    <Grid container>
      {data &&
        data.map((d) => (
          <Grid
            key={d.id}
            sx={{
              width: 150,
              height: 200,
              margin: "2rem",
              "&:hover": {
                cursor: "pointer",
                opacity: [0.9, 0.8, 0.7],
              },
            }}
            component={Link}
            to={d.id.toString()}
          >
            <Box
              sx={{
                height: 200,
                backgroundImage: `url(${d.image})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "1.5rem 1.5rem 0 0 ",
              }}
            />

            <p
              style={{
                color: "white",
                fontSize: "small",
                textAlign: "center",
                margin: "0.5rem 0",
              }}
            >
              {d.name}
            </p>
          </Grid>
        ))}
    </Grid>
  );
};
