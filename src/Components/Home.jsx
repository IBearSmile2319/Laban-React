import React from 'react'
import HomeCarrusel from './HomeComponents/HomeCarrusel'
import Hidden from '@material-ui/core/Hidden'
import HomeOfertas from './HomeComponents/HomeOfertas';

function Home() {
    document.title="Laban | ¡Somos parte de tu hogar!";
    return (
        <div className="home">
            {/* carrusel */}
            <Hidden xsDown>
                <HomeCarrusel />
            </Hidden>
            {/* Ofertas como un carrusel */}
            <HomeOfertas/>
            <HomeOfertas/>
            <HomeOfertas/>
            <HomeOfertas/>
            <HomeOfertas/>
        </div>
    )
}

export default Home
