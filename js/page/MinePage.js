/**
 * Created by wuyingtong on 2017/4/19.
 */
import React, {Component} from 'react';
import {
    Text, View, StyleSheet, ScrollView
} from 'react-native';

import TitleView from '../page/CommonHeader';
import HeaderView from '../page/MinePageHeader';
import ContentView from '../page/MinePageList';

export default class MinePage extends Component {
    render() {
        return (

            <ScrollView style={{marginBottom:30}}>

                <View style={styles.container}>
                    <TitleView
                        titleText={'我的'}
                        rightText={'设置'}
                        type={'mine'}/>

                    <HeaderView/>

                    <View style={styles.divide}/>

                    <ContentView icon={require('../image/mine/zhangdan.png')} iconText={'账单'}/>
                    <ContentView icon={require('../image/mine/mayivip.png')} iconText={'蚂蚁会员'} desc={'赚积分享特权'}/>
                    <ContentView icon={require('../image/mine/money.png')} iconText={'总资产'}/>
                    <ContentView icon={require('../image/mine/yue.png')} iconText={'余额'}/>
                    <ContentView icon={require('../image/mine/yuebao.png')} iconText={'余额宝'}/>

                    <View style={styles.divide}/>

                    <ContentView icon={require('../image/mine/mayi.png')} iconText={'蚂蚁聚宝'}/>
                    <ContentView icon={require('../image/mine/xinyong.png')} iconText={'芝麻信用'}/>
                    <ContentView icon={require('../image/mine/baoxian.png')} iconText={'保险服务'}/>
                    <ContentView icon={require('../image/mine/bank.png')} iconText={'网商银行'}/>

                    <View style={styles.divide}/>

                    <ContentView icon={require('../image/mine/love.png')} iconText={'爱心捐赠'}/>
                    <ContentView icon={require('../image/mine/yule.png')} iconText={'娱乐宝'}/>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e8eeec'
    },
    divide: {
        height: 20
    }
});