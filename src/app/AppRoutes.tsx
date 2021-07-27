import { FunctionComponent } from 'react';
import { useRoutes } from 'react-router-dom';
import Home from '../components/home/Home';

const AppRoutes: FunctionComponent<any> = () => {
  return useRoutes([
    {
      path: '/', element: <Home/>
    },
    // {
    //   path: '/parent/*',
    //   element: ...,
    //   children: [
    //     {
    //       path: '/something', element: ...
    //     }
    //   ]
    // }
  ]);
}

export default AppRoutes;