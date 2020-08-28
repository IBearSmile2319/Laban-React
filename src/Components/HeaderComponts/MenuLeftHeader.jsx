import React from 'react'
import {
    makeStyles,
    Drawer,
} from '@material-ui/core';
import CategoriasMenuleft from './MenuLeftComponent/CategoriasMenuleft';
const useStyle=makeStyles(theme=>({
    drawer:{
        width:240,
        flexShrink:0,
    },
    drawePaper:{
        width:240,
    },
    toolbar: theme.mixins.toolbar,
}));
function MenuLeftHeader(props) {
    const classes=useStyle();
    const {variant,open,onClose} = props;
    return (
        <Drawer
        className={classes.drawer}
        classes={
            {paper:classes.drawePaper}
        }
        anchor='left'
        variant={variant}
        open={open}
        onClose={onClose ? onClose:null}
        >
        <CategoriasMenuleft></CategoriasMenuleft>
        </Drawer>
    )
}

export default MenuLeftHeader;
