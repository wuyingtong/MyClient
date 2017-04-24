/**
 * Created by wuyingtong on 2017/4/18.
 */
import React, {Component} from 'react';
import {
    Text, View, Image, StyleSheet, ListView
} from 'react-native';

import MsgHeader from './CommonHeader';


export default class MessagePage extends Component {

    _data = [{
        icon: require('../image/message/bdsh.png'),
        isShow: require('../image/message/red_point.png'),
        title: '生活号(原服务窗)',
        subTitle: '百世快递：壕！一人一个518元红包,先到先得...',
        date: '14:52'
    },
        {
            icon: require('../image/message/zfzs.png'),
            isShow: require('../image/message/red_point.png'),
            title: '支付助手',
            subTitle: '体现到账成功',
            date: '4月16日'
        },
        {
            icon: require('../image/message/xxzx.png'),
            isShow: require('../image/message/red_point.png'),
            title: '消息中心',
            subTitle: '信用卡还款提醒',
            date: '4月15日'
        },
        {
            icon: require('../image/mine/baoxian.png'),
            isShow: require('../image/message/red_point.png'),
            title: '保险服务',
            subTitle: '招商银行:小招保险,为您家人带份健康,么么哒！',
            date: '4月14日'
        },
        {
            icon: require('../image/mine/xinyong.png'),
            isShow: require('../image/message/red_point.png'),
            title: '芝麻信用',
            subTitle: '我有一个不会堵在路上的偏方,不知当讲不当讲?',
            date: '4月13日'
        },
        {
            icon: require('../image/message/msg_1.jpg'),
            title: '駡雲',
            subTitle: '【转账】向你转账888888888.88元',
            date: '4月1日'
        },
        {
            icon: require('../image/message/msg_2.jpg'),
            title: '馬埖騰',
            subTitle: '【转账】向你转账888888888.88元',
            date: '4月12日'
        },
        {
            icon: require('../image/message/msg_3.jpg'),
            title: '习近平',
            subTitle: '邀请您参加北京第十九次中共中央人民代表大会',
            date: '4月19日'
        },
        {
            icon: require('../image/message/msg_4.jpg'),
            title: '生活号(原服务窗)',
            subTitle: '百世快递：壕！一人一个518元红包,先到先得...',
            date: '14:52'
        },
        {
            icon: require('../image/message/msg_5.jpg'),
            title: '生活号(原服务窗)',
            subTitle: '百世快递：壕！一人一个518元红包,先到先得...',
            date: '14:52'
        },
        {
            icon: require('../image/message/msg_6.jpg'),
            title: '生活号(原服务窗)',
            subTitle: '百世快递：壕！一人一个518元红包,先到先得...',
            date: '14:52'
        }];

    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.state = {
            dataSource: ds.cloneWithRows(this._data)
        }
    }

    _renderRow(rowData) {
        return (
            <View style={{flex: 1}}>
                <View style={{flexDirection: 'row', padding: 10}}>
                    <Image style={styles.iconImg} source={rowData.icon}/>
                    <Image style={styles.redPoint} source={rowData.isShow}/>

                    <View style={{marginLeft: 5, flex: 1}}>
                        <Text style={{color: 'black', fontSize: 16}}>{rowData.title}</Text>
                        <Text style={{marginTop: 3}} numberOfLines={1}>{rowData.subTitle}</Text>
                    </View>

                    <Text>{rowData.date}</Text>
                </View>

                <View style={{backgroundColor: '#EDEDED', height: 1}}/>
            </View>
        );

    }


    render() {
        return (
            <View style={{marginBottom: 80}}>
                <MsgHeader
                    titleText={'朋友'}
                    type={'friend'}/>

                <ListView dataSource={this.state.dataSource}
                          renderRow={this._renderRow}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    iconImg: {
        width: 48,
        height: 44,
        resizeMode: 'stretch'
    },
    redPoint: {
        width: 12,
        height: 12,
        resizeMode: 'stretch',
    }

});