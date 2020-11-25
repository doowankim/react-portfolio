import React from "react";
import * as Styled from "./styles";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Styled.Container>
      <Styled.Wrapper>
        <Styled.Logo>
          <Link to="/home">
            <div>creator kevin</div>
          </Link>
        </Styled.Logo>
        <Styled.Menu>
          <Styled.SLink to="/about">
            <li>ABOUT</li>
          </Styled.SLink>
          <Styled.SLink to="contact">
            <li>CONTACT</li>
          </Styled.SLink>
        </Styled.Menu>
        <Styled.SideMenu>
          <a href="https://github.com/doowankim">
            <Styled.Icon className="fab fa-github-square" />
          </a>
        </Styled.SideMenu>
      </Styled.Wrapper>
    </Styled.Container>
  );
};

export default Header;
