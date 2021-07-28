import { Fragment, FunctionComponent } from 'react';
import './Home.scss';

import Nav from '../nav/Nav';
import { ReactComponent as BackGroundImg } from "../../assests/background.svg";
import Container from "@material-ui/core/Container";

const Home: FunctionComponent<any> = () => {
  return (
    <Fragment>
      <Nav/>
      <Container fixed className={'home-body'}>
        <BackGroundImg width={400}/>
      </Container>
    </Fragment>
  )
}

export default Home;
