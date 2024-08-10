
import { Route, Routes } from 'react-router-dom';
import './App.css';
import axios from 'react';
import Dashboard from './Dashboard/Dashboard';
import Allcourse from './AllCourse/Allcourse';
import Syllabus from './Syllabus/Syllabus';
import Student from './Student/Student';
import Certificate from './Certificate/Certificate';
import Allfee from './AllFee/Allfee';
import Allbranch from './AllBranch/Allbranch';
import Blog from './Blog/Blog';
import Placement from './Placement/Placement';
import Gallery from './Gallery/Gallery';
import Video from './Video/Video';
// import FontAwesomeIcon from 
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Dashboard/>} />
        <Route path='/allcourse' element={<Allcourse/>}/>
        <Route path='/syllabus' element={<Syllabus/>}/>
        <Route path='/student' element={<Student/>}/>
        <Route path='/certificate' element={<Certificate/>}/>
        <Route path='/allfees' element={<Allfee/>}/>
        <Route path='/allbranch' element={<Allbranch/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/placement' element={<Placement/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
        <Route path='/video' element={<Video/>}/>
      </Routes>
    </div>
  );
}

export default App;