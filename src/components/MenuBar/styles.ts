import styled, { css } from 'styled-components';

import { MdHome, MdFavoriteBorder, MdEmail, MdPerson, MdNotifications, MdExitToApp } from '../../icons/ReactIcons';
import { RocketseatIcon as Rocketseat } from '../../icons/RocketseatIcon';
// import Button from '../Button';

export const Container = styled.div`
	display: none;

	@media (min-width: 500px) {
		display: flex;
		flex-direction: column;
		justify-content: space-between;

		position: sticky;
		top: 0;
		left: 0;

		padding: 9px 19px 20px;

		max-height: 100vh;
		overflow-y: auto;
	}
`;
export const TopSide = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	@media (min-width: 1280px) {
		align-items: flex-start;
	}
`;

export const Logo = styled(Rocketseat)`
	width: 41px;
	height: 41px;

	> path {
		fill: var(--twitter);
	}

	margin-bottom: 20px;
`;

export const MenuButton = styled.button`
	display: flex;
	align-items: center;

	flex-shrink: 0;

	padding: 8.25px 0;
	outline: 0;

	cursor: pointer;
	border-radius: 25px;

	&:hover {
		background: var(--twitter-dark-hover);
	}

	&:hover,
	&.active {
		span,
		svg {
			color: var(--twitter);
			fill: var(--twitter);
		}
	}

	> span {
		display: none;
	}

	& + button {
		margin-top: 16.5px;
	}

	& + button:last-child {
		margin-top: 33px;

		width: 40px;
		height: 40px;

		> span {
			display: none;
		}

		@media (min-width: 1280px) {
			width: 100%;
			height: unset;

			> span {
				display: inline;
			}
		}
	}

	@media (min-width: 1280px) {
		> span {
			display: inline;
			margin-left: 19px;

			font-weight: bold;
			font-size: 19px;
		}

		padding-right: 15px;
	}
`;

const iconCSS = css`
	flex-shrink: 0;

	width: 30px;
	height: 30px;
	color: var(--white);
`;

export const HomeIcon = styled(MdHome)`
	${iconCSS}
`;

export const BellIcon = styled(MdNotifications)`
	${iconCSS}
`;

export const EmailIcon = styled(MdEmail)`
	${iconCSS}
`;

export const FavoriteIcon = styled(MdFavoriteBorder)`
	${iconCSS}
`;

export const ProfileIcon = styled(MdPerson)`
	${iconCSS}
`;

export const BotSide = styled.div`
	margin-top: 20px;

	display: flex;
	align-items: center;
`;

export const Avatar = styled.div`
	width: 39px;
	height: 39px;

	flex-shrink: 0;

	border-radius: 50%;
	background-color: var(--gray);
`;

export const ProfileData = styled.div`
	display: none;

	@media (min-width: 1280px) {
		display: flex;
		flex-direction: column;

		margin-left: 10px;
		font-size: 14px;

		> span {
			color: var(--gray);
		}
	}
`;

export const ExitIcon = styled(MdExitToApp)`
	display: none;

	@media (min-width: 1280px) {
		display: inline-block;
		width: 25px;
		height: 25px;
		color: var(--white);
		margin-left: 30px;
		cursor: pointer;

		&:hover {
			> path {
				color: var(--like);
			}
		}
	}
`;
