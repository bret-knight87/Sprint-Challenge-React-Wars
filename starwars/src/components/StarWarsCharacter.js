import React, { useState, useEffect } from "react";
import axios from "axios";
import SWCharacterInfo from "./SWCharacterInfo";
import styled from "styled-components";

export default function StarWarsCharacter() {
  const [character, setCharacter] = useState([]);

  const ContainerDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: 800px;
    margin: 0 auto;
  `;

  useEffect(() => {
    axios.get("https://swapi.co/api/people/").then(response => {
      console.log(response.data.results);
      setCharacter(response.data.results);
    });
  }, []);

  return (
    <ContainerDiv>
      {character.map(item => (
        <SWCharacterInfo
          key={item.name}
          characterName={item.name}
          dob={item.birth_year}
          hair={item.hair_color}
          gender={item.gender}
        />
      ))}
    </ContainerDiv>
  );
}
