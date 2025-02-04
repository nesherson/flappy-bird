import { create } from "zustand";
import {
	GameStatus,
	type GameState,
	type GameStateStoreAction,
	type Player,
} from "../types/types";
import { useGameSettingsStore } from "./gameSettingsStore";

export const useGameStateStore = create<GameState & GameStateStoreAction>(
	(set) => {
		return {
			...createInitialGameState(),
			startGame: () =>
				set(() => {
					return {
						status: GameStatus.Playing,
					};
				}),
			finishGame: () =>
				set(() => {
					return {
						status: GameStatus.GameOver,
					};
				}),
			restartGame: () =>
				set(() => {
					return {
						...createInitialGameState(),
						status: GameStatus.Playing,
					};
				}),
			playerJump: () =>
				set((state) => {
					return {
						player: {
							...state.player,
							jumpPosY: state.player.y,
							jumpTime: 0,
						},
					};
				}),
			movePlayer: (deltaTime: number) =>
				set((state) => {
					const jumpHeight =
						(-state.player.gravity / 2) * state.player.jumpTime ** 2 +
						state.player.jumpPower * state.player.jumpTime;

					let angle = -jumpHeight * 0.3;

					if (angle < -30) {
						angle = -30;
					} else if (angle > 90) {
						angle = 90;
					}

					return {
						player: {
							...state.player,
							y:
								state.player.jumpPosY + jumpHeight * state.player.jumpDirection,
							jumpTime: state.player.jumpTime + deltaTime,
							angle,
						},
					};
				}),
		};
	},
);

function createInitialGameState() {
	const appWidth = useGameSettingsStore.getState().appWidth;
	const appHeight = useGameSettingsStore.getState().appHeight;
	const status = GameStatus.Initial;

	const player: Player = {
		x: appWidth * 0.15,
		y: appHeight / 2,
		width: 34,
		height: 24,
		isJumping: false,
		jumpHeight: 70,
		jumpPower: 12,
		jumpDirection: -1,
		gravity: 0.8,
		jumpTime: 0,
		jumpPosY: appHeight / 2,
		angle: 0,
	};

	return {
		player,
		status,
	};
}
