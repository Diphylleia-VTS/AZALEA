import React, { FunctionComponent } from "react"
import LinkButton from "../../atoms/LinkButton/LinkButton"
import { makeStyles } from '@material-ui/core/styles';

const borderColor = "#866266"

const useStyles = makeStyles(() => ({
    root: {
        width: "100%",
        "& ul": {
            flexBasis: "25%",
            listStyle: "none",
            display: "flex",
            justifyContent: "space-between",
            paddingLeft: "0",
            "& li": {
                "&:first-child": {
                    borderLeft: "none"
                },
                flex: "auto",
                borderLeft: `solid ${borderColor} 2px`,
                marginBottom: "5px"
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