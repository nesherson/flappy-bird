import { TilingSprite, useTick } from "@pixi/react";
import { useState } from "react";

import { Texture } from "pixi.js";

const backgroundTexture = Texture.from("/assets/background/background-day.png");

interface Props {
    isGamePlaying: boolean,
    appWidth: number,
    appHeight: number,
    backgroundSpeed: number
}

function Background({ appWidth, appHeight, backgroundSpeed, isGamePlaying }: Props) {
    const [xPos, setXPos] = useState(0);

    useTick(d => {
        if (!isGamePlaying)
            return;

        setXPos(prev => prev - backgroundSpeed * d);
    });

    return <TilingSprite
        texture={backgroundTexture}
        width={appWidth}
        height={appHeight}
        tilePosition={{ x: xPos, y: 0 }}
        tileScale={{ x: 1, y: 1.25 }}
    />
}

export default Background;