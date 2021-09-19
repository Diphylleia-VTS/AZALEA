import React, { FunctionComponent } from "react"
import Link from "next/link"
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    linkButton: {
        width: "25%",
        backgroundColor: "maroon",
        color: "white",
        padding: "10px",
        display: "block",
        textDecoration: "none"
    },
}));

type Props = {
    linkTarget: string,
    message: string
};

const LinkButton: FunctionComponent<Props> = (Props) => {
    const classes = useStyles();
    return (
        <Link href={Props.linkTarget} passHref={true}>
            <a className={classes.linkButton}>
                {Props.message}
            </a>
        </Link>
    )
};

export default LinkButton;