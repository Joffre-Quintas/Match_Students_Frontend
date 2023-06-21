import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/routes';
import Header from './components/Header/Header';
import AuthProvider from './context/AuthContext';

function App() {
  

  return (
    <AuthProvider>
      <Router>
        <Header/>
        <AppRoutes/>
      </Router>
    </AuthProvider>
  )
}

export default App
