import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Main from './components/layout/Main';
import Home from './components/Home';
import Login from './components/Login'; 
import Registration from './components/Registration'; 
import About from './components/About';
import Contact from './components/Contact';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'/home',
          element:<Home></Home>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/registration',
          element:<Registration></Registration>
        },
        {
          path:'/contact',
          element:<Contact></Contact>
        },
        {
          path:'/about',
          element:<About></About>
        }
      ]
    }
  ])
  return (
    <div className='App'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
