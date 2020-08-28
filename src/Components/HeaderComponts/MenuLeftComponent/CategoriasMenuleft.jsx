import React from 'react'
import {
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider, Avatar,
} from '@material-ui/core';
import Cajon from './Cajon';
function CategoriasMenuleft() {
    return (
        <List component="nav">
            <ListItem button>
                <ListItemIcon>
                    <Avatar>M</Avatar>
                </ListItemIcon>
                <ListItemText primary="Maicol" />
            </ListItem>
            <Divider></Divider>
            <Cajon></Cajon>
        </List>
    )
}

export default CategoriasMenuleft
