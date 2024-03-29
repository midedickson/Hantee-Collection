import { Card, CardMedia, CardContent, Typography, CardActions, Grow, Button } from '@material-ui/core';
import React from 'react';
import useStyles from './styles';
import { useHistory } from 'react-router';


const Product = ({ product, checked, setProductDetail }) => {
    const classes = useStyles();
    const history = useHistory();
    return (
        <Grow in={checked} {...(checked ? { timeout: 1000 } : {})}>
            <Card className={classes.root}>
                <CardMedia className={classes.media} image={product.media.source} title={product.name} />
                <CardContent>
                    <div className={classes.cardContent}>
                        <Typography variant="h5" gutterBottom>
                            {product.name}
                        </Typography>
                        <Typography variant="h5">
                            {product.price.formatted_with_symbol}
                        </Typography>
                    </div>
                    <Typography dangerouslySetInnerHTML={{ __html: product.description }} variant="body2" color="textSecondary" />

                </CardContent>
                <CardActions disableSpacing className={classes.CardActions}>
                    <Button type="button" color="primary" size="small" aria-label="Add To Cart" onClick={() => { setProductDetail(product); history.push("/product-detail") }}>
                        View
                    </Button>
                </CardActions>
            </Card>
        </Grow>
    )
}

export default Product;
