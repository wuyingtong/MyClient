/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
'use strict';
import React, {Component} from 'react';
import {AppRegistry, Image, View, Text, StyleSheet} from 'react-native';
import Navigation from './js/config/entry';

export default class MyClient extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'home',
        }
    }


    render() {
        return (
            <Navigation/>
        );
    }
}

AppRegistry.registerComponent('MyClient', () => MyClient);
