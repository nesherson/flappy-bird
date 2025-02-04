export type GameSettings = {
	appWidth: number;
	appHeight: number;
	sizeScale: number;
	groundHeight: number;
	backgroundSpeed: number;
	groundSpeed: number;
};

export type GameSettingsStoreAction = {
	resetSettings: (newAppWidth?: number, newAppHeight?: number) => void;
};

export type GameState = {
	status: GameStatus;
	player: Player;
};

export type GameStateStoreAction = {
	playerJump: () => void;
	startGame: () => void;
	finishGame: () => void;
	restartGame: () => void;
	movePlayer: (deltaTime: number) => void;
};

export type Player = {
	x: number;
	y: number;
	width: number;
	height: number;
	isJumping: boolean;
	jumpHeight: number;
	jumpPower: number;
	jumpDirection: number;
	jumpTime: number;
	gravity: number;
	jumpPosY: number;
	angle: number;
};

export enum GameStatus {
	Initial = 0,
	Playing = 1,
	GameOver = 2,
}
