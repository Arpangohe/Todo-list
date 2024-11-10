//App.js

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Todo from './components/Todo';

interface HeadStyle {
  textAlign: TextAlign;
}

type TextAlign = 'center' | 'left' | 'right' | 'justify';

function App() {
  const headStyle: HeadStyle = {
    textAlign: 'center',
  }
  return (
    <div>
      <h1 style={headStyle}>Todo List</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Todo/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;