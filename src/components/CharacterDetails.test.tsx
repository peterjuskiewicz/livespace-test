import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { CharacterDetails } from "./CharacterDetails";

describe("CharacterDetails", () => {
  it("renders the character's name", () => {
    render(
      <CharacterDetails
        name="Luke Skywalker"
        homeworld="Tatooine"
        wiki="https://starwars.fandom.com/wiki/Luke_Skywalker"
        species="Human"
      />
    );
    const nameElement = screen.getByText(/name/i);
    const nameValueElement = screen.getByText(/luke skywalker/i);
    expect(nameElement).toBeInTheDocument();
    expect(nameValueElement).toBeInTheDocument();
  });

  it("renders the character's planet of origin", () => {
    render(
      <CharacterDetails
        name="Luke Skywalker"
        homeworld="Tatooine"
        wiki="https://starwars.fandom.com/wiki/Luke_Skywalker"
        species="Human"
      />
    );
    const planetElement = screen.getByText(/planet of origin/i);
    const planetValueElement = screen.getByText(/tatooine/i);
    expect(planetElement).toBeInTheDocument();
    expect(planetValueElement).toBeInTheDocument();
  });

  it("renders the character's race", () => {
    render(
      <CharacterDetails
        name="Luke Skywalker"
        homeworld="Tatooine"
        wiki="https://starwars.fandom.com/wiki/Luke_Skywalker"
        species="Human"
      />
    );
    const raceElement = screen.getByText(/race/i);
    const raceValueElement = screen.getByText(/human/i);
    expect(raceElement).toBeInTheDocument();
    expect(raceValueElement).toBeInTheDocument();
  });

  it("renders the link to the character's planet of origin", () => {
    render(
      <CharacterDetails
        name="Luke Skywalker"
        homeworld="Tatooine"
        wiki="https://starwars.fandom.com/wiki/Luke_Skywalker"
        species="Human"
      />
    );
    const planetLinkElement = screen.getByRole("link", {
      name: /tatooine/i,
    });
    expect(planetLinkElement).toBeInTheDocument();
    expect(planetLinkElement).toHaveAttribute("href", "/planet/Tatooine");
  });

  it("renders the link to the character's wiki page", () => {
    render(
      <CharacterDetails
        name="Luke Skywalker"
        homeworld="Tatooine"
        wiki="https://starwars.fandom.com/wiki/Luke_Skywalker"
        species="Human"
      />
    );
    const wikiLinkElement = screen.getByRole("link", {
      name: /https:\/\/starwars\.fandom\.com\/wiki\/Luke_Skywalker/i,
    });
    expect(wikiLinkElement).toBeInTheDocument();
    expect(wikiLinkElement).toHaveAttribute(
      "href",
      "https://starwars.fandom.com/wiki/Luke_Skywalker"
    );
  });
});
