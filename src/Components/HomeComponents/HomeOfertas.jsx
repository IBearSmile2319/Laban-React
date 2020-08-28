import React from 'react'
import Ofertas from 'react-slick';
import Typography from '@material-ui/core/Typography';

const OfertasList = [
    {
        title: 'ofertas',
        img:
            'https://ss-static-01.esmsv.com/id/81256/galeriaimagenes/obtenerimagen/?id=919&tipoEscala=crop&width=624&height=624',
    },
    {
        title: 'ofertas',
        img:
            'https://ss-static-01.esmsv.com/id/81256/galeriaimagenes/obtenerimagen/?id=921&tipoEscala=crop&width=624&height=624',
    },
    {
        title: 'ofertas',
        img:
            'https://ss-static-01.esmsv.com/id/81256/galeriaimagenes/obtenerimagen/?id=923&tipoEscala=crop&width=624&height=624',
    },
    {
        title: 'ofertas',
        img:
            'https://ss-static-01.esmsv.com/id/81256/galeriaimagenes/obtenerimagen/?id=925&tipoEscala=crop&width=624&height=624',
    },
];
function HomeOfertas() {
    var ofertas = {
        accessibility: true,
        dots: false,
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 2,
    };
    return (
        <div className="ofertas">
            <Typography variant="h2" color="initial" className="ofertas__title">
                ¡Ofertas!
            </Typography>
            <Ofertas
                className="ofertas__carrusel"
                {...ofertas}
            >
                {OfertasList.map((i) => (
                    <div className="ofertas__containes">
                        <img src={i.img} alt={i.title} className="ofertas__img" />
                    </div>
                ))

                }


            </Ofertas>
        </div>

    )
}

export default HomeOfertas
