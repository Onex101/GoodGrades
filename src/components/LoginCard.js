import React from 'react';
import logo from '../logo.png';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Divider,
  Typography
} from '@material-ui/core';

const useStyles = makeStyles({
  card: {
    maxWidth: 440,
    marginBottom: 32
  },
  media: {
    height: 210,
    margin: 32,
    marginTop: 40
  }
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={logo}
          title='Good Grades Logo'
        />
        <Divider variant='middle' />
        <CardContent>
          <Typography
            gutterBottom
            variant='h4'
            className={classes.secondaryTextLight}
            color='textSecondary'
            component='h2'>
            Welcome to the next step in your academics
          </Typography>
          {/* <Typography variant='body2' color='textSecondary' component='p'>

          </Typography> */}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}