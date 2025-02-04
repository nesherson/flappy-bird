import { AnimatedSprite } from "@pixi/react";
import type { Player as PlayerType } from "../types/types";
import { Texture } from "pixi.js";

interface Props {
	player: PlayerType
    isGamePlaying: boolean
}

const textures = [
	Texture.from("/assets/bird/redbird-upflap.png"),
	Texture.from("/assets/bird/redbird-midflap.png"),
	Texture.from("/assets/bird/redbird-downflap.png")
];

export default function Player({ player, isGamePlaying }: Props) {
	return (
		<AnimatedSprite
			textures={textures}
			height={player.height}
			width={player.width}
			x={player.x}
			y={player.y}
			animationSpeed={0.3}
			isPlaying={isGamePlaying}
			angle={player.angle}
		/>
	);
}
