import './App.css'
import { NextUIProvider } from "@nextui-org/react";
import Screen from "./Screen";

function App() {
  return (
    <NextUIProvider>
      <Screen />
    </NextUIProvider>
  )
}

export default App;
