import { Fragment, FunctionComponent } from 'react';
import Nav from '../nav/Nav';

const Home: FunctionComponent<any> = () => {
  return (
    <Fragment>
      <Nav/>
      <div>Home</div>
    </Fragment>
  )
}

export default Home;