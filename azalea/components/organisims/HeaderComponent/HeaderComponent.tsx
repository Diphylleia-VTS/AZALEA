import React, { FunctionComponent } from 'react';
import { HeroLogo } from '../../atoms/HeroLogo/HeroLogo';
import HeaderLinks from '../../molecules/HeaderLinks/HeaderLinks';
import { makeStyles } from '@material-ui/core/styles';

const backgroundColor = '#64121D';

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: backgroundColor,
    width: '100%',
    paddingTop: '1vh',
  },
}));

export const HeaderComponent: FunctionComponent = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <HeroLogo />
      <HeaderLinks />
    </div>
  );
};
