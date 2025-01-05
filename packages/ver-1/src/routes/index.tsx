import { createBrowserRouter } from 'react-router-dom';
import Intro from './Intro';

const router = createBrowserRouter([
  { path: '', element: <Intro /> },
])

export default router
