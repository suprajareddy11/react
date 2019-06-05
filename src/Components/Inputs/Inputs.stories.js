import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import SuggestInput from './SuggestInput'
import TextInput from './TextInput'


const suggestions = [
  { label: 'Bundle Type' },
  { label: 'Calling Client Application (for CCA overrides)' },
  { label: 'Bundle\'s GroupID' },
  { label: 'Item Class ID' },
  { label: 'Manufacturer' },
  { label: 'OfferID' },
  { label: 'ProductID' },
  { label: 'Product Type' },
  { label: 'RH Path' },
  { label: 'SellerID' },
  { label: 'Submap type' },
  { label: 'Item is Consumable' },
  { label: 'Is Subscription' },
  { label: 'Item Vertical' },
  { label: 'Brand' },
  { label: 'Rh Path list' },
  { label: 'Shipping method' },
  { label: 'Two day shipping is' },
  { label: 'Product Class type' },
  { label: 'Postal Code' },
  { label: 'State or Province Code' },
  { label: 'Aisle' },
  { label: 'Shelf' },
  { label: 'Product Segment' },
  { label: 'is alcohol' },
  { label: 'is not a discounted item' },
  { label: 'is cpu post paid' },
  { label: 'is tobacco' },
  { label: 'is WARP' },
  { label: 'Shipping Zone' }
].map(suggestion => ({
  value: suggestion.label,
  label: suggestion.label
}));

storiesOf('Inputs', module)
  .add('outlined label', () => (
    <TextInput
      label="Name"
      onChange={action('onChange name')}
      margin="normal"
    />
  ))
  .add('outlined placeholder', () => (
    <TextInput
      placeholder='Enter a value'
      onChange={action('onChange name')}
      margin="normal"
    />
  ))
  .add('outlined placeholder and label', () => (
    <TextInput
      label="Amount"
      placeholder='Enter a value'
      onChange={action('onChange name')}
      margin="normal"
    />
  ))
  .add('disabled', () => (
    <TextInput
      label="Amount"
      placeholder='Enter a value'
      onChange={action('onChange name')}
      margin="normal"
      disabled
    />
  ))
  .add('disabled with default value', () => (
    <TextInput
      label="Amount"
      placeholder='Enter a value'
      onChange={action('onChange name')}
      margin="normal"
      disabled
      defaultValue='100'
    />
  ))
  .add('required', () => (
    <TextInput
      label="Amount"
      placeholder='Enter a value'
      onChange={action('onChange name')}
      margin="normal"
      required
    />
  ))
  .add('helper text', () => (
    <TextInput
      label="Amount"
      placeholder='Enter a value'
      onChange={action('onChange name')}
      margin="normal"
      helperText='This is helper text'
    />
  ))
  .add('error', () => (
    <TextInput
      label="Amount"
      placeholder='Enter a value'
      onChange={action('onChange name')}
      margin="normal"
      error
    />
  ))
  .add('error helper text', () => (
    <TextInput
      label="Amount"
      placeholder='Enter a value'
      onChange={action('onChange name')}
      margin="normal"
      error
      helperText='This is helper text'
    />
  ))
  .add('suggestion input', () => (
    <SuggestInput options={suggestions} label='Item Attribute' onChange={action('select option')} />
  ))