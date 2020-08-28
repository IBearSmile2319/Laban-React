import React from 'react';
import Carrusel from 'react-slick';
const carruseImg = [
    {
        label: 'San Francisco – Oakland Bay Bridge, United States',
        imgPath:
            'https://ss-static-01.esmsv.com/id/81256/galeriaimagenes/obtenerimagen/?id=915&tipoEscala=stretch&width=1170&height=351',
    },
    {
        label: 'Bird',
        imgPath:
            'https://ss-static-01.esmsv.com/id/81256/galeriaimagenes/obtenerimagen/?id=911&tipoEscala=stretch&width=1170&height=351',
    },
    {
        label: 'Bali, Indonesia',
        imgPath:
            'https://ss-static-01.esmsv.com/id/81256/galeriaimagenes/obtenerimagen/?id=903&tipoEscala=stretch&width=1170&height=351',
    },
    {
        label: 'NeONBRAND Digital Marketing, Las Vegas, United States',
        imgPath:
            'https://ss-static-01.esmsv.com/id/81256/galeriaimagenes/obtenerimagen/?id=905&tipoEscala=stretch&width=724&height=218',
    },
    {
        label: 'Goč, Serbia',
        imgPath:
            'https://ss-static-01.esmsv.com/id/81256/galeriaimagenes/obtenerimagen/?id=907&tipoEscala=stretch&width=2000&height=600',
    },
];
function HomeCarrusel(props) {
    const carrusel = {
        accessibility:false,
        arrows:false,
        dots:false,
        autoPlatSpeed: 300,
        autoplay:true,

    };
    return (
        <div className="home__carrusel__container">
            <Carrusel
                className="carrusel"
                {...carrusel}
            >
                {carruseImg.map((i) => (
                    <div className="">
                        <img src={i.imgPath} alt={i.label} className="home__carrusel__img" />
                    </div>
                ))

                }
            </Carrusel>
        </div>

    )
}

export default HomeCarrusel;