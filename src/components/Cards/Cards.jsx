import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import classNames from 'classnames';

import styles from './Cards.module.css';


const Cards = ({ data : { confirmed, recovered, deaths }}) => {
    if(!confirmed) {
        return '';
    }
    
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} className={classNames(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography color="textPrimary" gutterBottom>Infected</Typography>
                        <Typography variant="h5">{confirmed.value}</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} className={classNames(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography color="textPrimary" gutterBottom>Recovered</Typography>
                        <Typography variant="h5">{recovered.value}</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} className={classNames(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography color="textPrimary" gutterBottom>Deaths</Typography>
                        <Typography variant="h5">{deaths.value}</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards;