import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Layout from './Layout';


function App() {
  return (
  <>
    {/* <Header/>
    <Body/>
    <Footer/> */}
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Route>
    </Routes>
  
  </>
  );
}

export default App;
