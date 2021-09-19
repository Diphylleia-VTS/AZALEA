import React, { FunctionComponent } from "react"
import LinkButton from "../../atoms/LinkButton/LinkButton"
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    root: {
        width: "100%",
        "& ul": {
            display: "flex",
            "& last-child": {
                margin: "0"
            }
        }
    },
}));

const HeaderLinks: FunctionComponent = () => {
    const classes = useStyles();
    const result = (
        <div className={classes.root}>
            <ul>
                <li><LinkButton linkTarget={"/"} message={"HOME"} /></li>
                <li><LinkButton linkTarget={"/blog"} message={"BLOG"} /></li>
                <li><LinkButton linkTarget={""} message={"HOME"} /></li>
                <li><LinkButton linkTarget={""} message={"HOME"} /></li>
            </ul>
        </div>
    );
    return result;
};

export default HeaderLinks;