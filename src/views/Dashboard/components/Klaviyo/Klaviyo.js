import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Card, CardContent, Grid, Typography, Avatar } from '@material-ui/core';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import EmailIcon from '@material-ui/icons/Email';
import { ApiContextConsumer } from '../../../../context/ApiContext';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%'
  },
  content: {
    alignItems: 'center',
    display: 'flex'
  },
  title: {
    fontWeight: 700
  },
  avatar: {
    backgroundColor: theme.palette.error.main,
    height: 56,
    width: 56
  },
  icon: {
    height: 32,
    width: 32
  },
  difference: {
    marginTop: theme.spacing(2),
    display: 'flex',
    alignItems: 'center'
  },
  differenceIcon: {
    color: theme.palette.error.dark
  },
  differenceValue: {
    color: theme.palette.error.dark,
    marginRight: theme.spacing(1)
  }
}));

const Klaviyo = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <ApiContextConsumer>
      {context => (
        <Card
          {...rest}
          className={clsx(classes.root, className)}
        >
          <CardContent>
            <Grid
              container
              justify="space-between"
            >
              <Grid item>
                <Typography
                  className={classes.title}
                  color="textSecondary"
                  gutterBottom
                  variant="body2"
                >
                  EMAILS CAPTURED{' '}
                </Typography>
                <Typography variant="h3">{
                context.emailCount}</Typography>
              </Grid>
              <Grid item>
                <Avatar className={classes.avatar}>
                  <EmailIcon className={classes.icon} />
                </Avatar>
              </Grid>
            </Grid>
            <div className={classes.difference}>
              {/* <ArrowDownwardIcon className={classes.differenceIcon} /> */}
              <Typography
                className={classes.differenceValue}
                variant="body2"
              >
                Since 03-20-20 Launch{' '}
              </Typography>
            </div>
          </CardContent>
        </Card>
      )}
    </ApiContextConsumer>
  );
};

Klaviyo.propTypes = {
  className: PropTypes.string
};

export default Klaviyo;
