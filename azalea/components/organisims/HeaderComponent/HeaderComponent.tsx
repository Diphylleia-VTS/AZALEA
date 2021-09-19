import React, { FunctionComponent } from "react"
import { HeroLogo } from "../../atoms/HeroLogo/HeroLogo";
import HeaderLinks from "../../molecules/HeaderLinks/HeaderLinks"
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    root: {
        backgroundColor: "maroon",
        width: "100%"
    },
}));

export const HeaderComponent: FunctionComponent = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <HeroLogo />
            <HeaderLinks />
        </div>
    );
}