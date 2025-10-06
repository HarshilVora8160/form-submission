import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddMarksForm from './AddMarksForm';
import SubjectChanger from './components/GptSolutionCode';

function App() {

  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<AddMarksForm />} />
          <Route path='/home' element={<SubjectChanger />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
