import React from "react";
import styled from "styled-components";

const SWCharacterInfo = props => {
  const CharacterInfoDiv = styled.div`
    background-color: #defbfc;
    padding: 20px;
    margin: 10px;
    border-radius: 20px;
    border: 1px solid gray;
    width: 40%;
    @media only screen and (max-width: 400px) {
      width: 80%;
    }
  `;

  const CharacterInfoH2 = styled.h2`
    color: red;
    font-family: lobster;
    border-bottom: .5px solid black;
    padding: 2px;
  `;

  const CharacterInfoP = styled.p`
    font-family: calibri;
  `;

  return (
    <CharacterInfoDiv>
      <CharacterInfoH2>{props.characterName}</CharacterInfoH2>
      <CharacterInfoP>Birth Year: {props.dob}</CharacterInfoP>
      <CharacterInfoP>Hair Color: {props.hair}</CharacterInfoP>
      <CharacterInfoP>Gender: {props.gender}</CharacterInfoP>
    </CharacterInfoDiv>
  );
};

export default SWCharacterInfo;
