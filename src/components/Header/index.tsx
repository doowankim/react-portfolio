import React from 'react';
import * as Styled from './styles';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<Styled.Container>
			<Styled.Wrapper>
				<Styled.Logo>
					<div>PORTFOLIO</div>
				</Styled.Logo>
				<Styled.Menu>
					<Link to="/home">
						<li>HOME</li>
					</Link>
					<Link to="/about">
						<li>ABOUT</li>
					</Link>
					<Link to="contact">
						<li>CONTACT</li>
					</Link>
				</Styled.Menu>
				<Styled.SideMenu>
					<Styled.Icon className="fas fa-moon" />
					<Styled.Icon className="far fa-lightbulb" />
					<a href="https://github.com/doowankim">
						<Styled.Icon className="fab fa-github-square"></Styled.Icon>
					</a>
				</Styled.SideMenu>
			</Styled.Wrapper>
		</Styled.Container>
	);
};

export default Header;
