import React from 'react';
import { Card, CardActionArea, CardMedia, Typography, CardContent, Button, CardActions } from '@material-ui/core'
function Products(props) {
    const { title, image } = props;
    return (

        <div className="product">
            <Card className="card__product">
                <CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2" className="card__title_p">
                            {title}
                        </Typography>
                    </CardContent>
                    <CardMedia
                        className="card__media"
                        image={image}
                        title={title}
                    />
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Share
        </Button>
                    <Button size="small" color="primary">
                        Learn More
        </Button>
                </CardActions>
            </Card>
        </div>
    );
}
export default Products;