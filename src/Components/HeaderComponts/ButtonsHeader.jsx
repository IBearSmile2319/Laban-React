import React from 'react'
import { ButtonGroup, Hidden, Typography, Button, IconButton, Badge } from '@material-ui/core';
import { ShoppingCartOutlined, Person as PersonIcon } from '@material-ui/icons';
import { Link } from 'react-router-dom';
function ButtonsHeader() {
    return (
        <ButtonGroup aria-label="outlined primary button group" className="HeaderButtons">
            {/* lst link */}
            <Hidden mdUp>
                <Link to="/login" className="header__link">
                    <IconButton aria-label="" className="header__seacrhIcon">
                        <PersonIcon />
                    </IconButton>
                </Link>
            </Hidden>

            <Hidden smDown>
                <Link to="/login" className="header__link">
                    <Button aria-label="" className="header__seacrhIcon">

                        <div className="header__option">
                            <Typography variant="span" className="header__optionLineOne">Hello Maicol</Typography>
                            <Typography variant="span" className="header__optionLineTwo">SignIn</Typography>
                        </div>

                    </Button>
                </Link>
                {/* 2st link */}
                <Link to="/" className="header__link">
                    <Button aria-label="" className="header__seacrhIcon">

                        <div className="header__option">
                            <span className="header__optionLineOne" >Devoluciones</span>
                            <span className="header__optionLineTwo">& pedidos</span>
                        </div>

                    </Button>
                </Link>
                {/* 3st link */}
            </Hidden>
            {/* 4st link */}
            <Link to="/checkout" className="header__link">
                <IconButton aria-label="" className="header__seacrhIcon">
                    <Badge badgeContent={9} color="secondary">
                        <ShoppingCartOutlined />
                    </Badge>
                </IconButton>
            </Link>
        </ButtonGroup>
    )
}

export default ButtonsHeader
