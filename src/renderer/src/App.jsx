import Versions from './components/Versions'
import electronLogo from './assets/electron.svg'
import { Routes } from 'react-router-dom'
import { homeRoutes } from './pages/home/routes'

function App() {
  const ipcHandle = () => window.electron.ipcRenderer.send('ping')

  return (
    <Routes>
      {homeRoutes}
    </Routes>
  )
}

export default App

