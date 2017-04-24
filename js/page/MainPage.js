/**
 * Created by wuyingtong on 2017/4/18.
 */
'use strict';

import React, {Component} from 'react';
import {
    Text,
    View,
    BackAndroid,
    ToastAndroid,
    StatusBar
} from 'react-native';

import WebViewPage from '../page/MainPage';
import IndividualPage from './MessagePage';
import TabBar from '../component/TabBar'

export default class MainPage extends Component {

    constructor(props) {
        // 父类属性
        super(props);
        // 理解为初始化方法
        MainPage.switchToWebViewPage = MainPage.switchToWebViewPage.bind(this);
        MainPage.switchToIndividualPage = MainPage.switchToIndividualPage.bind(this);
    }

    static switchToWebViewPage(rowData) {
        // 获取父类属性，调用父类导航器将页面push进来
        this.props.navigator.push({
            // 要显示的组件
            component: WebViewPage,
            // 传递的参数
            args: {rowData: rowData}
        });
    }

    static switchToIndividualPage(userInfo) {
        // 获取父类属性，调用父类导航器将页面push进来
        this.props.navigator.push({
            // 要显示的组件
            component: IndividualPage,
            // 传递的参数
            args: {user: userInfo}
        });
    }

    // 理解为 Android中的布局填充
    render() {
        return (
            <View style={{flex:1,justifyContent:'flex-end'}}>
               {/* // 自定义组件，底部tab导航
                // 需要传入导航器*/}
                <StatusBar backgroundColor={'#1296db'}/>
                <TabBar navigator={this.props.navigator}/>
            </View>
        );
    }
}