import React from 'react'
import {
    makeStyles,
    Drawer,
} from '@material-ui/core';
import SearchHeader from './SearchHeader';
const useStyle=makeStyles(theme=>({
    drawer:{
        flexShrink:0,
    },
    drawePaper:{
        background:'white',
        width:'auto'
    },
    toolbar: theme.mixins.toolbar,
}));
function MenuTopHeader(props) {
    const classes=useStyle();
    const {variant,open,onClose} = props;
    return (
        <Drawer
        className={classes.drawer}
        classes={
            {paper:classes.drawePaper}
        }
        anchor='top'
        variant={variant}
        open={open}
        onClose={onClose ? onClose:null}
        >
           <SearchHeader></SearchHeader>
        </Drawer>
    )
}

export default MenuTopHeader;