import { create } from "zustand";
import type { GameSettings, GameSettingsStoreAction } from "../types/types";

export const useGameSettingsStore = create<GameSettings & GameSettingsStoreAction>((set) => ({
    ...createInitialGameSettings(),
    resetSettings: (newAppWidth?: number, newAppHeight?: number) => set((_) => ({
        ...createInitialGameSettings(newAppWidth, newAppHeight)
    }))
}));

function createInitialGameSettings(appW?: number, appH?: number) {
    const defaultAppWidth = 480;
    const defaultAppHeight = 640;
    const appWidth = appW ?? defaultAppWidth;
    const appHeight = appH ?? defaultAppHeight;
    const sizeScale = appWidth / appHeight * 1.65;
    const groundHeight = 112;
    const backgroundSpeed = 0.7;
    const groundSpeed = 2.95;

    return {
        appWidth,
        appHeight,
        sizeScale,
        groundHeight,
        backgroundSpeed,
        groundSpeed
    };
}