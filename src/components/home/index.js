import React from "react";
import styled from "styled-components";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <HomeContainer>
        <h1>Hello</h1>
      </HomeContainer>
    );
  }
}
