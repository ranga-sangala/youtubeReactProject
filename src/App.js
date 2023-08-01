import Header from './components/Header';
import './App.css';
import Container from './components/Container';
import { Provider } from 'react-redux';
import {RouterProvider, createBrowserRouter, } from 'react-router-dom'
import store from './utils/store'
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';
 

const appRouter = createBrowserRouter([{
    path:"/",
    element:<Container/>,
    children:[{
      path:'/',
      element:<MainContainer/>
    },
   {
    path:"watch",
    element:<WatchPage/>
   }

  ]
}])
function App() {
  return (
    <Provider store={store}>
      <Header/>
    <RouterProvider router={appRouter}/>
    </Provider>
  );
}

export default App;
