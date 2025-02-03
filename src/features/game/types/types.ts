export type GameSettings = {
    appWidth: number
    appHeight: number
    sizeScale: number
    groundHeight: number
    backgroundSpeed: number
    groundSpeed: number
}

export type GameSettingsStoreAction = {
    resetSettings: (newAppWidth?: number, newAppHeight?: number) => void
}