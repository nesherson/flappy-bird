import { Stage, withPixiApp } from '@pixi/react'
import './App.css'

import Game from './features/game/components/Game'
import { useGameSettingsStore } from './features/game/stores/gameSettingsStore';

function App() {
  const appWidth = useGameSettingsStore(state => state.appWidth);
  const appHeight = useGameSettingsStore(state => state.appHeight);
  const Component = withPixiApp(Game);

  return (
    <Stage width={appWidth} height={appHeight} options={{ background: 0x1099bb }}>
      <Component />
    </Stage>
  )
}

export default App
