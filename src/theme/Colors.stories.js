import React from 'react';
import { storiesOf } from '@storybook/react';
import Colors from './Colors';

const keys = Object.keys(Colors)
const width = 60, height = 60;
const textStyle = {position: 'absolute', marginLeft: width+5};
storiesOf('Colors', module)
  .add('All', () => (
    <>
      {keys.map((key,index) => <div style={{width, height, backgroundColor: Colors[key]}} key={index}><span style={textStyle}>{key}</span></div>)}
    </>
  ))
  .add('Grey', () => (
    <>
      {keys.map((key,index) => key.includes('grey') ? <div style={{width, height, backgroundColor: Colors[key]}} key={index}><span style={textStyle}>{key}</span></div> : null)}
    </>
  ))
  .add('Blue Grey', () => (
    <>
      {keys.map((key,index) => key.includes('blueGrey') ? <div style={{width, height, backgroundColor: Colors[key]}} key={index}><span style={textStyle}>{key}</span></div> : null)}
    </>
  ))
  .add('Blue', () => (
    <>
      {keys.map((key,index) => key.includes('Blue') ? <div style={{width, height, backgroundColor: Colors[key]}} key={index}><span style={textStyle}>{key}</span></div> : null)}
    </>
  ))
  .add('Green', () => (
    <>
      {keys.map((key,index) => key.includes('Green') ? <div style={{width, height, backgroundColor: Colors[key]}} key={index}><span style={textStyle}>{key}</span></div> : null)}
    </>
  ))
  .add('Black', () => (
    <>
      {keys.map((key,index) => key.includes('black') ? <div style={{width, height, backgroundColor: Colors[key]}} key={index}><span style={textStyle}>{key}</span></div> : null)}
    </>
  ))
  .add('White', () => (
    <>
      {keys.map((key,index) => key.includes('white') ? <div style={{width, height, backgroundColor: Colors[key]}} key={index}><span style={textStyle}>{key}</span></div> : null)}
    </>
  ))
  .add('Yellow', () => (
    <>
      {keys.map((key,index) => key.includes('Yellow') ? <div style={{width, height, backgroundColor: Colors[key]}} key={index}><span style={textStyle}>{key}</span></div> : null)}
    </>
  ))
  .add('Magenta', () => (
    <>
      {keys.map((key,index) => key.includes('Magenta') ? <div style={{width, height, backgroundColor: Colors[key]}} key={index}><span style={textStyle}>{key}</span></div> : null)}
    </>
  ))
  .add('Orange', () => (
    <>
      {keys.map((key,index) => key.includes('Orange') ? <div style={{width, height, backgroundColor: Colors[key]}} key={index}><span style={textStyle}>{key}</span></div> : null)}
    </>
  ))