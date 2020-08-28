import React from 'react'
import { Paper, InputBase, Divider, IconButton } from '@material-ui/core';
import {Search as SearchIcon} from '@material-ui/icons';
function SearchHeader() {
    return (
        <Paper component="form" className="header__Search" id="search">
            <InputBase
                className="header__searchInput"
                placeholder="Search"
                inputProps={{ 'aria-label': 'search' }}
            />
            <Divider className="header-divider" orientation="vertical" />
            <IconButton type="submit" className="header__seacrhIcon" color="primary" aria-label="search">
                <SearchIcon />
            </IconButton>
        </Paper>
    )
}

export default SearchHeader
