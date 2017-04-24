/**
 * Created by wuyingtong on 2017/4/18.
 * Day01
 * A stop watch
 */

import React, {Component} from 'react';
import {Platform, ListView, StyleSheet, StatusBar, Text, TouchableHighlight, View} from 'react-native';
import Util from './Utils';

class WatchFace extends Component {
    static defaultProps = {
        sectionTime: React.propTypes.string.isRequired,
        totalTime: React.propTypes.string.isRequired,
    };

    constructor(props) {
        super(props);
        this.state = {
            watchOn: false,
            startBtnText: '启动',
            startBntColor: '#60B644',
            stopBtnText: '暂停',
            underlayColor: '#fff'
        };
    }

    render() {
        return (
            <View style={styles.watchFaceContainer}>
                <Text style={styles.sectionTime}>{this.props.sectionTime}</Text>
                <Text style={styles.sectionTime}>{this.props.totalTime}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    watchFaceContainer: {
        width: Util.size.width,
        paddingTop: 50, paddingLeft: 30, paddingRight: 30, paddingBottom: 40,
        backgroundColor: '#fff',
        borderBottomWidth: 1, borderBottomColor: '#ddd',
        height: 170
    },
    sectionTime: {
        fontSize: 20,
        fontWeight: 100,
        paddingRight: 30,
        color: '#555',
        position: 'absolute',
        left: Util.size.width - 140,
        top: 30
    },
    totalTime: {
        fontSize: Util.size.width === 375 ? 70 : 60,
        fontWeight: "100",
        color: "#222",
        paddingLeft: 20
    },


});