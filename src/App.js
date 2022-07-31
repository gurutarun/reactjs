import './App.css';
import {Student} from './student/Student';
import Teacher from './teacher/Teacher';
import Header from './utils/Header';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      {/* <Header /> */}
      <Routes>
        <Route path='/students' element={<Student />} />
        <Route path='/teachers' element={<Teacher />} />
        <Route exact path='/' element={<Student />} />
      </Routes>
    </>
  );
}

export default App;
