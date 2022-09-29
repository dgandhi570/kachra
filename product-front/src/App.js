
import './App.css';
import Products from './components/Products';
import ProductPage from './components/ProductPage';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom'




function App() {
const handleChange = ()=>{
  console.log("IN APP.JS")
}
  return (
    <>
    <Products handleChange1 = {handleChange}/>
      <Router>
        <Routes>
            <Route exact path='/product' element={<ProductPage />}/>
            <Route exact path='/' element={<Products />}/>

        </Routes>
    </Router>
      </>
  );
}

export default App;
