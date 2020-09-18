import React from 'react'
import HomeCarrusel from './HomeComponents/HomeCarrusel'
import Hidden from '@material-ui/core/Hidden'
import HomeOfertas from './HomeComponents/HomeOfertas';
import { Container} from '@material-ui/core';
import HomeProduct from './HomeComponents/HomeProduct';
import Product from './pages/Products';
function Home() {
    document.title = "Laban | ¡Somos parte de tu hogar!";
    return (
        <div className="home">
            {/* carrusel */}
            <Hidden xsDown>
                <HomeCarrusel />
            </Hidden>
            <Container fixed>
                {/* Ofertas como un carrusel */}
                <HomeOfertas />
                {/* Product id,title,price,rating,image */}
                <div className="toolbar"></div>
                <HomeProduct/>
           
                <Product
                            id={12345}
                            title="The learn Statup now constant innovation create"
                            price={11.96}
                            rating={3}
                            image={"https://images-na.ssl-images-amazon.com/images/I/71j2Zqi6BGL._AC_SL1250_.jpg"}
                        />
            {/* products */}

            </Container>
        </div>
    )
}

export default Home;
