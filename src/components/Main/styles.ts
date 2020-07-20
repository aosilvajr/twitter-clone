import styled, { css } from 'styled-components';

import { MdKeyboardArrowLeft, MdHome, MdSearch, MdNotifications, MdEmail } from '../../icons/ReactIcons';

export const Container = styled.div`
	display: flex;
	flex-direction: column;

	width: min(601px, 100%);

	@media (min-width: 500px) {
		border-left: 1px solid var(--gray);
		border-right: 1px solid var(--gray);
	}
`;

export const Header = styled.div`
	position: sticky;
	top: 0;

	background: var(--primary);

	display: flex;
	align-items: center;

	text-align: left;
	border-bottom: 1px solid var(--outline);

	z-index: 2;

	> button {
		padding: 8px;
		border-radius: 50%;

		outline: 0;
		cursor: pointer;

		&hover {
			background: var(--twitter-dark-hover);
		}
	}
`;

export const BackIcon = styled(MdKeyboardArrowLeft)`
	width: 24px;
	height: 24px;

	fill: var(--twitter);
`;

export const ProfileInfo = styled.div`
	margin-left: 17px;

	display: flex;
	flex-direction: column;

	> strong {
		font-size: 19px;
	}

	> span {
		font-size: 20px;
		color: var(--gray);
	}
`;

export const BottomMenu = styled.div`
	position: fixed;
	bottom: 0;
	left: 0;

	background: var(--primary);
	width: 100%;
	border-top: 1px solid var(--outline);

	display: flex;
	justify-content: space-around;
	padding: 8px;

	@media (min-width: 500px) {
		display: none;
	}
`;

const iconCss = css`
	width: 31px;
	height: 31px;

	fill: var(--gray);

	&:hover,
	&:active {
		fill: var(--twitter);
	}
`;

export const HomeIcon = styled(MdHome)`
	${iconCss}
`;

export const SearchIcon = styled(MdSearch)`
	${iconCss}
`;

export const BellIcon = styled(MdNotifications)`
	${iconCss}
`;

export const EmailIcon = styled(MdEmail)`
	${iconCss}
`;
