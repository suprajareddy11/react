import React from 'react';

import { Grid } from '@material-ui/core';
import PromotionCard from '../PromotionCard/PromotionCard'

function Home() {
    const data = [{title: 'Manage Campaign', desc: 'create, view & edit campaign', bgColor:"green", nextLink: '/campaign/'},
        {title: 'Manage Promotion', desc: 'create, view & edit promotion', bgColor:"blue", nextLink: '/promotion/'},
        {title: 'Manage Coupon', desc: 'create, view & edit coupon', bgColor:"orange", nextLink: '/coupon/'},
        {title: 'Bulk Upload', desc: 'bulk upload', bgColor:"pink", nextLink: '/bulkUpload/'},
        {title: 'Trigger Offers', desc: 'triggering offers', bgColor:"red", nextLink: '/triggerOffers/'}];

    return (
    <Grid container>
        <Grid item lg={1} sm={1} xs={1} />
        <Grid item lg={10} sm={10} xs={10}>
            <Grid container>
                {
                    data.map((d, i) =>
                        <Grid item lg={4} sm={6} xs={12} key={i} mb={5}>
                            <PromotionCard small boxed detail={d} />
                        </Grid>
                    )
                }
            </Grid>
        </Grid>
        <Grid item lg={1} sm={1} xs={1}/>
    </Grid>
  );
}

export default Home;
