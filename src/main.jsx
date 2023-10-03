import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "./error-page";
import ServicesPg from './pages/Services-pg.jsx';
import AboutUspg from './pages/AboutUs-pg.jsx';
import Homepg from './pages/Home-pg.jsx';
import QuestionsPg from './pages/Questions-pg.jsx';
import ArticlesPg from './pages/Articles-pg.jsx';
import {Article1} from "./componant/main articles/index.js"
import ConectPg from './pages/conect-pg.jsx';
import SendPg from './pages/send-pg.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },

  {
    path: "/الرئسية",
    element: <Homepg />,
    errorElement: <ErrorPage />,
  },
  
  {
    path: "/عن-الشركة",
    element: <AboutUspg />,
    errorElement: <ErrorPage />,
  },
  
  {
    path: "/الخدمات",
    element: <ServicesPg />,
    errorElement: <ErrorPage />,
  },

  {
    path: "/الاسئله-الشائعة",
    element: <QuestionsPg />,
    errorElement: <ErrorPage />,
  },

  {
    path: "/المدونة",
    element: <ArticlesPg />,
    errorElement: <ErrorPage />,
  },

  {
    path: "/نصائح-للشركات-الناشئة",
    element: <Article1 />,
    errorElement: <ErrorPage />,
  },

  {
    path: "/توصل-معنا",
    element: <ConectPg />,
    errorElement: <ErrorPage />,
  },

  {
    path: "/send",
    element: <SendPg />,
    errorElement: <ErrorPage />,
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)


