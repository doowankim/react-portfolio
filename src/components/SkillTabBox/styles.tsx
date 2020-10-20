import styled from 'styled-components';

export const Container = styled.div``;

export const SkillBox = styled.div`
	height: max-content;
	margin-top: 1em;
	margin-bottom: 1.5em;
`;

export const Skill = styled.div`
	width: max-content;
	padding: 0 0.3em 0 0.3em;
	font-size: 1.4em;
	font-weight: bold;
	color: #da3a6a;
	border: 1px solid #da3a6a;
	border-radius: 5px;
	text-align: center;
	margin-right: 0.7em;
	transition: 0.35s;

	&:hover {
		background: #da3a6a;
		color: #ffffff;
		transition: 0.35s;
	}
`;
