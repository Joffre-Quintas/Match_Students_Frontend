import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/routes';

//Components
import Header from './components/Header/Header';

function App() {
  

  return (
    <Router>
      <Header/>
      <AppRoutes/>
    </Router>
  )
}

export default App
