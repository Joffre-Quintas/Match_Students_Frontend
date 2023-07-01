import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/routes';
import Header from './components/Header/Header';
import AuthProvider from './context/AuthContext';
import StudentsProvider from './context/StudentsContext';

function App() {
  

  return (
    <AuthProvider>
      <Router>
        <Header/>
        <StudentsProvider>
          <AppRoutes/>
        </StudentsProvider>
      </Router>
    </AuthProvider>
  )
}

export default App
