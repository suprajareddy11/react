import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import PrimaryButton from './PrimaryButton';


storiesOf('Buttons', module)
  .add('basic', () => (
    <PrimaryButton onClick={action('button-click')} title='Button' />
  ))
  .add('disabled', () => (
    <PrimaryButton onClick={action('button-click')} title='Button' disabled />
  ))
  .add('loading', () => (
    <PrimaryButton onClick={action('button-click')} title='Button' loading />
  ))
  .add('secondary', () => (
    <PrimaryButton onClick={action('button-click')} title='Button' color='secondary' />
  ))
  .add('outline', () => (
    <PrimaryButton onClick={action('button-click')} title='Button' variant='outlined' />
  ))
  .add('left icon', () => (
    <PrimaryButton onClick={action('button-click')} title='Back' IconLeft={KeyboardArrowLeft} />
  ))
  .add('right icon', () => (
    <PrimaryButton onClick={action('button-click')} title='Next' IconRight={KeyboardArrowRight} />
  ))
  .add('right icon loading', () => (
    <PrimaryButton onClick={action('button-click')} title='Next' loading IconRight={KeyboardArrowRight} />
  ))