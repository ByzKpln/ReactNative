/**
 Yorum
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Header from './src/components/Header';
import Listem from './src/components/Listem';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Header/>
        <Listem/>
      </View>
    );
  }
}
