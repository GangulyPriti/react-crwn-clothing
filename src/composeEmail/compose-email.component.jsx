import React from 'react';
import {
  AppBar,
  //   Button,
  Container,
  Toolbar,
  Typography,
} from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';
import MinimizeIcon from '@material-ui/icons/Minimize';
import ZoomOutMapIcon from '@material-ui/icons/ZoomOutMap';
import './compose-email.styles.scss';

const ComposeEmail = () => {
  return (
    <Container maxWidth='sm' className='new-message'>
      <AppBar position='static'>
        <Toolbar style={{ backgroundColor: '#404040' }}>
          <Typography variant='h6' className='title' style={{ flexGrow: 1 }}>
            New Message
          </Typography>
          {/* <Button color='inherit'></Button> */}
          <MinimizeIcon />
          <ZoomOutMapIcon />
          <ClearIcon />
        </Toolbar>
      </AppBar>
      <div>Hello</div>
    </Container>
  );
};

export default ComposeEmail;
