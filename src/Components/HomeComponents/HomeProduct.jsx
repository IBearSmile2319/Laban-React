import React from 'react';
import Slider from 'react-slick';
import Typography from '@material-ui/core/Typography'
import { Card, CardActionArea, CardContent, CardMedia, CardActions, Button } from '@material-ui/core';
var settings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                initialSlide: 3
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }
    ]
};
const produ = [
    {
        id: 12345,
        title: "The learn Statup now constant innovation create",
        price: 11.96,
        rating: 3,
        image: "https://images-na.ssl-images-amazon.com/images/I/71j2Zqi6BGL._AC_SL1250_.jpg"
    }
];
function HomeProduct() {
    return (
        <div className="TDC__A__V">
            <Typography variant="h1" color="initial" className="title">
                Tendencia en Audio y Video
            </Typography>
            <Slider {...settings} className="TDC__A__V__container">
                {[...Array(20)].map(i => (
                    <div key={i} className="TDC__A__V__Card___container">
                        {produ.map(p => (
                            <Card className="TDC__card__product">
                                <CardActionArea>
                                    <CardMedia
                                        className="TDC__card__media"
                                        image={p.image}
                                        title={p.title}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2" className="TDC__A__V__Card__Title">
                                            {p.title}
                                        </Typography>

                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" color="primary">
                                            Share
                                    </Button>
                                        <Button size="small" color="primary">
                                            Learn More
                                    </Button>
                                    </CardActions>
                                </CardActionArea>
                            </Card>
                        ))

                        }


                    </div>
                ))
                }

            </Slider>
        </div>
    )
}

export default HomeProduct;