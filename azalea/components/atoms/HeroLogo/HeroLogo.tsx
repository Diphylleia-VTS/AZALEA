import React, { FunctionComponent } from "react"
import Image from "next/image"
import logoImage from "../../../public/DiphylleiaPrototype.png"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(() => ({
    heroLogo: {
        maxWidth: "70vh",
        marginLeft: "auto",
        marginRight: "auto"
    },
}));


export const HeroLogo: FunctionComponent = () => {
    const classes = useStyles();
    return (
        <div className={classes.heroLogo}>
            <Image
                src={logoImage}
                alt=""
            />
        </div>
    );
};