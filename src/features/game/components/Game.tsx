import { Container, useTick } from "@pixi/react";
import type { Application } from "pixi.js";
import Ground from "./Ground";
import { useGameSettingsStore } from "../stores/gameSettingsStore";
import { useGameStateStore } from "../stores/gameStateStore";
import Background from "./Background";
import Player from "./Player";
import { useEventListener } from "@react-hookz/web";
import { GameStatus } from "../types/types";

interface Props {
	app: Application;
}

export default function Game({ app }: Props) {
	const appWidth = useGameSettingsStore((state) => state.appWidth);
	const appHeight = useGameSettingsStore((state) => state.appHeight);
	const groundHeight = useGameSettingsStore((state) => state.groundHeight);
	const groundSpeed = useGameSettingsStore((state) => state.groundSpeed);
	const sizeScale = useGameSettingsStore((state) => state.sizeScale);
	const backgroundSpeed = useGameSettingsStore(
		(state) => state.backgroundSpeed,
	);
	const player = useGameStateStore((state) => state.player);
	const gameStatus = useGameStateStore((state) => state.status);

	const startGame = useGameStateStore((state) => state.startGame);
	const finishGame = useGameStateStore((state) => state.finishGame);
	const restartGame = useGameStateStore((state) => state.restartGame);
	const movePlayer = useGameStateStore((state) => state.movePlayer);
	const playerJump = useGameStateStore((state) => state.playerJump);

	useTick((deltaTime) => {
		if (gameStatus !== GameStatus.Playing) return;

		if (player.y >= appHeight - groundHeight) {
			finishGame();
			return;
		}

		movePlayer(deltaTime);
	});

	const playGame = () => {
		if (gameStatus === GameStatus.Initial) {
			startGame();
			return;
		}
		if (gameStatus === GameStatus.GameOver) {
			restartGame();
			return;
		}
		if (gameStatus === GameStatus.Playing) playerJump();
	};

	const handleKeyDown = (e: KeyboardEvent) => {
		if (e.key === " ") {
			playGame();
		}
	};

	useEventListener(window, "keydown", handleKeyDown, {
		passive: true,
	});

	return (
		<Container>
			<Background
				appWidth={appWidth}
				appHeight={appHeight}
				isGamePlaying={gameStatus === GameStatus.Playing}
				backgroundSpeed={backgroundSpeed}
			/>
			<Ground
				appWidth={appWidth}
				appHeight={appHeight}
				isGamePlaying={gameStatus === GameStatus.Playing}
				groundHeight={groundHeight}
				groundSpeed={groundSpeed}
				sizeScale={sizeScale}
			/>
			<Player
				player={player}
				isGamePlaying={gameStatus === GameStatus.Playing}
			/>
		</Container>
	);
}
