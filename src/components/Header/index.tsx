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
					<li>CAREER</li>
					<li>CONTACT</li>
				</Styled.Menu>
			</Styled.Wrapper>
		</Styled.Container>
	);
};

export default Header;
