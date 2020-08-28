import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import {
    Menu as MenuIcon,
    Search as SearchIcon
} from '@material-ui/icons';
import { IconButton, Button, Hidden } from '@material-ui/core';
import ButtonsHeader from './HeaderComponts/ButtonsHeader';
import SearchHeader from './HeaderComponts/SearchHeader';
import MenuLeftHeader from './HeaderComponts/MenuLeftHeader';
import MenuTopHeader from './HeaderComponts/MenuTopHeader';

function Header(props) {
    const [abrirLeft, setAbrirLeft] = useState(false);

    const accionAbrirLeft = () => {
        setAbrirLeft(!abrirLeft)
    }
    const [abrirTop, setAbrirTop] = useState(false)
    const accionAbrirTop = () => {
        setAbrirTop(!abrirTop)
    }
    return (
        <nav className="header" accionAbrirTop={accionAbrirTop}>
            {/* menus desplegable Left y top */}
            <Hidden xlDown>
                <MenuLeftHeader
                    variant="permanent"
                    open={true}
                />
            </Hidden>
            <Hidden xlUp>
                <MenuLeftHeader
                    variant="temporary"
                    open={abrirLeft}
                    onClose={accionAbrirLeft}
                />
            </Hidden>
            <Hidden xlDown>
                <MenuTopHeader
                    variant="temporary"
                    open={true}
                />
            </Hidden>
            <Hidden xlUp>
                <MenuTopHeader
                    variant="temporary"
                    open={abrirTop}
                    onClose={accionAbrirTop}
                />
            </Hidden>
            {/* Buton de navegac ion */}
            <IconButton color="secondary">
                <MenuIcon
                    onClick={() => accionAbrirLeft()}
                />
            </IconButton>

            {/* logo on the left -> img  */}
            <Link to="/" className="header__link__logo">
                <Button aria-label="">
                    <img
                        className="header-logo"
                        src="https://ss-static-01.esmsv.com/id/81256/galeriaimagenes/obtenerimagen/?width=203&height=64&id=sitio_logo&ultimaModificacion=2020-08-27+21%3A46%3A04"
                        alt="" />
                </Button>
            </Link>
            {/* search */}
            <Hidden smDown>
                <SearchHeader />
            </Hidden>
            {/* para cuendo este en mobil o tabled */}
            <Hidden mdUp>
                <IconButton className="header__seacrhIcon">
                    <SearchIcon
                        onClick={() => accionAbrirTop()}
                    />
                </IconButton>
            </Hidden>
            <div className="header__Nav">
                <ButtonsHeader />
            </div>
            {/* basket icon with number */}
        </nav>
    )
}

export default Header;
