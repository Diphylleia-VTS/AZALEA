import React, { FunctionComponent } from 'react';
import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';

const backgroundColor = '#64121D';
const hoverColor = '#5E2F2F';

const useStyles = makeStyles(() => ({
  linkButton: {
    backgroundColor: backgroundColor,
    color: 'white',
    padding: '5px',
    display: 'block',
    textDecoration: 'none',
    textAlign: 'center',
    '&:hover': {
      backgroundColor: hoverColor,
    },
  },
}));

type Props = {
  linkTarget: string;
  message: string;
};

const LinkButton: FunctionComponent<Props> = Props => {
  const classes = useStyles();
  return (
    <Link href={Props.linkTarget} passHref={true}>
      <a className={classes.linkButton}>{Props.message}</a>
    </Link>
  );
};

export default LinkButton;
