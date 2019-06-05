import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import Link from '@material-ui/core/Link';
import promotionStyles from './Promotion'

function PromotionCard(props) {
  const { classes, detail, small, large, boxed } = props;
  const sizeClass = small ? classes.small : large ? classes.large : classes.medium;
  let boxTitleClass = 'inherit';
  let halfBoxBgColor = classes.transparentBoxSection;
  if(boxed) {
    halfBoxBgColor = detail.bgColor;
    boxTitleClass = classes.boxSection;
  }

  return (
    <Card className={sizeClass}>
      <a href={detail.nextLink} className={classes.link}>
        <Grid container className={classes.container}>
            <Grid item lg={5} sm={5} xs={5} className={classes.title}>
            <svg width="141px" height="200px" viewBox="0 0 141 121" version="1.1" xmlns="http://www.w3.org/2000/svg">
                  <title>SmallBox</title>
                  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                      <g transform="translate(-27.000000, -425.000000)" fill={halfBoxBgColor}>
                          <g transform="translate(27.000000, 425.000000)">
                              <path d="M12.3405035,0.801740145 C11.5755297,0.60728048 10.7893032,0.508913613 10,0.508913613 C4.75329488,0.508913613 0.5,4.76220849 0.5,10.0089136 L0.5,111 C0.5,116.246705 4.75329488,120.5 10,120.5 L135.860048,120.5 C136.113866,120.5 136.367255,120.479164 136.617663,120.437701 C139.144636,120.019281 140.853957,117.631569 140.428821,115.022917 L140.428821,40.7495457 C140.428821,36.4042992 137.480634,32.6129054 133.269325,31.5423723 L12.3405035,0.801740145 Z" id="Rectangle"></path>
                          </g>
                      </g>
                  </g>
              </svg>
              <span className={boxTitleClass}>
                  {detail.title}
              </span>
            </Grid>
            <Grid item lg={7} sm={7} xs={7}>
              <Typography component="p" className={classes.desc}>
                  {detail.desc}
              </Typography>
              <Grid container>
                <Grid item lg={10} sm={8} xs={8}>
                </Grid>
                <Grid item lg={2} sm={4} xs={4}>
                    <Link component="button" href={detail.nextLink}>
                      <img src="/icons/right_arrow.svg" className={classes.icon}></img>
                    </Link>
                </Grid>
              </Grid>
            </Grid>
        </Grid>
      </a>
    </Card>
  );
}

PromotionCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(promotionStyles)(PromotionCard);
