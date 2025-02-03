import { Container } from "@pixi/react";
import type { Application } from "pixi.js";
import Ground from "./Ground";
import { useGameSettingsStore } from "../stores/gameSettingsStore";
import Background from "./Background";


interface Props {
    app: Application
}

export default function Game({ app }: Props) {
    const appWidth = useGameSettingsStore(state => state.appWidth);
    const appHeight = useGameSettingsStore(state => state.appHeight);
    const groundHeight = useGameSettingsStore(state => state.groundHeight);
    const groundSpeed = useGameSettingsStore(state => state.groundSpeed);
    const sizeScale = useGameSettingsStore(state => state.sizeScale);
    const backgroundSpeed = useGameSettingsStore(state => state.backgroundSpeed);


    const isGamePlaying = true;

    return <Container>
        <Background
            appWidth={appWidth}
            appHeight={appHeight}
            isGamePlaying={isGamePlaying}
            backgroundSpeed={backgroundSpeed} />
        <Ground
            appWidth={appWidth}
            appHeight={appHeight}
            isGamePlaying={isGamePlaying}
            groundHeight={groundHeight}
            groundSpeed={groundSpeed}
            sizeScale={sizeScale} />
    </Container>
}