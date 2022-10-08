import { Routes, Route } from 'react-router-dom';
import BookContainer from './components/BookContainer';
import NavBar from './components/NavBar';
import Categories from './pages/Categories';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<BookContainer />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </>
  );
}

export default App;
