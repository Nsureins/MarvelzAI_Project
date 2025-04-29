
import { Routes, Route } from 'react-router-dom';
import UploadCredit from './pages/UploadCredit';

function App() {
  return (
    <Routes>
      <Route path='/' element={<UploadCredit />} />
    </Routes>
  );
}

export default App;
