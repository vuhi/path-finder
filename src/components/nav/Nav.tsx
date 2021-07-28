import { FunctionComponent } from 'react';
import './Nav.scss';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

import { ReactComponent as AppIcon } from '../../assests/app-icon.svg';
import { Typography } from '@material-ui/core';

const Nav: FunctionComponent<any> = () => {
  return (
    <AppBar className={'nav'} color={'warning'} position={'static'}>
      <Toolbar>
        <Button
          style={{ display: 'grid' }}
          className={'app-icon-btn'}
          variant={'text'}
          color={'info'}>
          <AppIcon className={'app-icon'} width={40} height={40}/>
          <Typography className={'app-name-1'} variant={'subtitle1'}>
            Path
          </Typography>
          <Typography className={'app-name-2'} variant={'subtitle1'}>
            Finder
          </Typography>
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Nav;
