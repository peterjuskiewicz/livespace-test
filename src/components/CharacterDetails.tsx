import { Box, styled } from "@mui/material";
import { Link } from "react-router-dom";

// TODO: Improve styling

const StyledTitle = styled("p")(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: "1.5rem",
  fontWeight: "bold",
}));

const StyledContent = styled("p")(({ theme }) => ({
  color: theme.palette.primary.main,
  marginBottom: "1rem",
}));

export const CharacterDetails = ({
  name,
  homeworld,
  wiki,
  species,
}: {
  name: string;
  homeworld: string;
  wiki: string;
  species: string;
}) => {
  return (
    <>
      <StyledTitle>Name</StyledTitle>
      <StyledContent>{name}</StyledContent>
      <StyledTitle>Planet of origin</StyledTitle>
      <Box
        sx={{
          textDecoration: "none",
          color: (theme) => theme.palette.primary.main,
        }}
        component={Link}
        to={`/planet/${homeworld}`}
      >
        {homeworld}
      </Box>
      <StyledTitle>Vehicles</StyledTitle>
      <Box
        sx={{
          textDecoration: "none",
          color: (theme) => theme.palette.primary.main,
        }}
        component={Link}
        to={wiki}
      >
        {
          // TODO: Add link for Vehicles
          wiki
        }
      </Box>
      <StyledTitle>Race</StyledTitle>
      <StyledContent>{species}</StyledContent>
    </>
  );
};
