import React from 'react';
import * as Styled from './styles';

const Header = () => {
	return (
		<Styled.Container>
			<Styled.Wrapper>
				<Styled.Logo>
					<div>PORTFOLIO</div>
				</Styled.Logo>
				<Styled.Menu>
					<li>HOME</li>
					<li>ABOUT</li>
					<li>CONTACT</li>
				</Styled.Menu>
				<Styled.SideMenu>
					<Styled.Icon className="fas fa-lightbulb"></Styled.Icon>
					<Styled.Icon className="far fa-lightbulb"></Styled.Icon>
					<Styled.Icon className="fab fa-github-square"></Styled.Icon>
				</Styled.SideMenu>
			</Styled.Wrapper>
		</Styled.Container>
	);
};

export default Header;
