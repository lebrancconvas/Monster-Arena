import styled, { createGlobalStyle } from 'styled-components';

export const MonsterButton = styled.div`
	width: 10%;
	height: 30px;
	background-color: green;
	border-radius: 10px;
	box-shadow: 1px 1px 1px 1px black;
	margin: 10px;
	cursor: pointer;
	padding: 5px;

	&:active {
		transform: scale(0.98);
	}
`;

export const SubmitButton = styled.div`
	width: 10%;
	height: 30px;
	background-color: orange;
	border-radius: 10px;
	box-shadow: 1px 1px 1px 1px black;
	margin: 10px;
	cursor: pointer;
	padding: 5px;

	&:active {
		transform: scale(0.98);
	}
`;

export const WhiteFont = styled.div`
	color: white;
	font-size: 16px;
`;