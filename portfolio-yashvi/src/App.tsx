import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';

const App = () => {
  return (
    <Router>
      <div className="bg-primary min-h-screen text-white selection:bg-accent/30">
        <AppRoutes />
      </div>
    </Router>
  );
}

export default App;