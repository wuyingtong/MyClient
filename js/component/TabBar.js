/**
 * Created by wuyingtong on 2017/4/18.
 */
'use strict';

import React, {Component} from 'react';
import {
    Text, StyleSheet, Image, View
} from 'react-native';
/**
 * 此处使用GitHub开源库，https://github.com/expo/react-native-tab-navigator
 * 用法：1️.导入库，npm install react-native-tab-navigator --save
 *      2.导包，import TabNavigator from 'react-native-tab-navigator'
 */
import TabNavigator from 'react-native-tab-navigator';
import HomePage from '../page/HomePage';
import MsgPage from '../page/MessagePage';
import MoviePage from '../page/MovieTopPage';
import MinePage from '../page/MinePage';

export default class TabBar extends Component {

    // 构造器
    constructor(props) {
        super(props);
        // 初始化状态
        this.state = {
            // 默认选中首页
            selectedTab: 'home',
        }
    }

    render() {

        return (
            <TabNavigator tabBarStyle={{ height: 48, backgroundColor:'#EDEDED',overflow: 'hidden' }}
                          sceneStyle={{ paddingBottom: 20 }}>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'home'}
                    title='首页'
                    renderIcon={() => <Image style={styles.tabImg} source={require('../image/tab/home_normal.png')}/>}
                    renderSelectedIcon={() => <Image style={styles.tabImg} source={require('../image/tab/home_selected.png')} />}
                    onPress={() => this.setState({ selectedTab: 'home' })}>
                    <HomePage/>
                </TabNavigator.Item>

                <TabNavigator.Item
                    selected={this.state.selectedTab === 'msg'}
                    title='消息'
                    renderIcon={() => <Image style={styles.tabImg} source={require('../image/tab/msg_normal.png')}/>}
                    renderSelectedIcon={() => <Image style={styles.tabImg} source={require('../image/tab/msg_selected.png')} />}
                    onPress={() => this.setState({ selectedTab: 'msg' })}>
                    <MsgPage/>
                </TabNavigator.Item>

                <TabNavigator.Item
                    selected={this.state.selectedTab === 'movie'}
                    title='电影top'
                    renderIcon={() => <Image style={styles.tabImg} source={require('../image/tab/order_normal.png')}/>}
                    renderSelectedIcon={() => <Image style={styles.tabImg} source={require('../image/tab/order_selected.png')} />}
                    onPress={() => this.setState({ selectedTab: 'movie' })}>
                    <MoviePage/>
                </TabNavigator.Item>

                <TabNavigator.Item
                    selected={this.state.selectedTab === 'mine'}
                    title='我'
                    renderIcon={() => <Image style={styles.tabImg} source={require('../image/tab/me_normal.png')}/>}
                    renderSelectedIcon={() => <Image style={styles.tabImg} source={require('../image/tab/me_selected.png')} />}
                    onPress={() => this.setState({ selectedTab: 'mine' })}>
                    <MinePage/>
                </TabNavigator.Item>

            </TabNavigator>
        );
    }
}

const styles = StyleSheet.create({
    tabber: {
        height: 48,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
    },
    tabStyle: {
        padding: 8
    },
    tabImg: {
        width: 22,
        height: 22,
        resizeMode:'stretch'
    }

});