import { FunctionComponent } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

import { ReactComponent as AppIcon } from '../../assests/app-icon.svg';
import { Typography } from '@material-ui/core';

const Nav: FunctionComponent<any> = () => {
  return (
    <AppBar color={'warning'}>
      <Toolbar>
        <Button
          variant={'text'}
          color={'info'}
          startIcon={<AppIcon width={40} height={40}/>}>
          <Typography variant={'h5'}>
            Nav
          </Typography>
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Nav;