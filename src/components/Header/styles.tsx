import styled from 'styled-components';

export const Container = styled.div`
	// position: fixed;
	width: 100%;
	height: 50px;
	background: #495057;
	padding-left: 20px;
	padding-right: 20px;
`;

export const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	line-height: 50px;
`;

export const Logo = styled.div`
	font-size: 36px;
	color: #f9f9f9;
	transition: 0.35s;
	cursor: pointer;
`;

export const Menu = styled.div`
	display: flex;
	padding-left: 52px;
	align-items: center;
	flex: 1;

	li {
		display: inline-block;
		font-size: 16px;
		font-weight: bold;
		color: #fff;
		margin-right: 16px;
		cursor: pointer;
		transition: 0.35s;

		&:hover {
			color: #909090;
			transition: 0.35s;
		}
	}
`;

export const SideMenu = styled.div`
	display: flex;
`;

export const Icon = styled.i`
	position: relative;
	font-size: 30px;
	cursor: pointer;
	color: #fff;
	margin-top: 10px;
	margin-left: 15px;
	transition: 0.35s;

	&:hover {
		transition: 0.35s;
		color: #909090;
	}
`;
