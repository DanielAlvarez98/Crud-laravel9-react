import './App.css';

import { BrowserRouter, Routes,Route } from 'react-router-dom';

import ShowProducts from './componets/ShowProducts';
import CreateProduct from './componets/CreateProduct';
import EditProduct from './componets/EditProduct';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ShowProducts/>} />
          <Route path='/create' element={<CreateProduct/>} />
          <Route path='/edit/:id' element={<EditProduct/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
