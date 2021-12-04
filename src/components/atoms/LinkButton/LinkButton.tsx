import React, { FunctionComponent, useEffect, useState } from "react";
import Link from "next/link";
import router, { useRouter } from "next/router";
import { makeStyles, Theme } from "@material-ui/core/styles";

const backgroundColor = "#64121D";
const hoverColor = "#5E2F2F";

type Props = {
  linkTarget: string;
  message: string;
  pathName: string;
};

const useStyles = makeStyles<Theme, Props>(() => ({
  linkButton: {
    backgroundColor: (props) => props.pathName === props.linkTarget ? 'red' : 'black',
    color: "white",
    padding: "5px",
    display: "block",
    textDecoration: "none",
    textAlign: "center",
    "&:hover": {
      backgroundColor: hoverColor,
    },
  },
}));

const LinkButton: FunctionComponent<Props> = (Props) => {
  const router = useRouter();
  const [pathName, setPathName] = useState("")
  useEffect(
    () => {
      const setPath = (s: string) => setPathName(s)
      setPath(router.asPath);
    },
    [pathName, router.asPath, setPathName]
  );
  console.log(Props);
  const classes = useStyles(Props)
  return (
    <Link href={Props.linkTarget} passHref={true}>
      <a className={classes.linkButton}>{Props.message}</a>
    </Link>
  );
};

export default LinkButton;
