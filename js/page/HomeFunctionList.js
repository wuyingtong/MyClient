/**
 * Created by wuyingtong on 2017/4/19.
 */
import React, {Component} from 'react';
import {View, Image, ListView, Text, StyleSheet,Alert} from 'react-native';
import MenuButton from '../page/MenuButton';

export default class HomeFunctionList extends Component {

    constructor(props) {
        super(props);

        //this._onMenuClick = this._onMenuClick.bind(this);
    }

    _onMenuClick(title, tag) {
        Alert.alert('提示', '你点击了：' + title + 'Tag:' + tag);
    }

    render() {
        return (
            <View style={{height:160}}>
                <View style={styles.menuView}>
                    <MenuButton renderIcon={require('../image/function/wdgz.png')}
                                tag={'wfgz'}
                                onClick={this._onMenuClick}
                                showText={'我的关注'}/>
                    <MenuButton renderIcon={require('../image/function/wlcx.png')}
                                tag={'wlcx'}
                                onClick={this._onMenuClick}
                                showText={'物流查询'}/>
                    <MenuButton renderIcon={require('../image/function/cz.png')}
                                tag={'wlcx'}
                                onClick={this._onMenuClick}
                                showText={'充值'}/>
                    <MenuButton renderIcon={require('../image/function/dyp.png')}
                                tag={'wlcx'}
                                onClick={this._onMenuClick}
                                showText={'电影票'}/>
                </View>

                <View style={styles.menuView}>
                    <MenuButton renderIcon={require('../image/function/yxcz.png')}
                                tag={'yxcz'}
                                onClick={this._onMenuClick}
                                showText={'游戏充值'}/>
                    <MenuButton renderIcon={require('../image/function/xjk.png')}
                                tag={'xjk'}
                                onClick={this._onMenuClick}
                                showText={'小金库'}/>
                    <MenuButton renderIcon={require('../image/function/ljd.png')}
                                tag={'ljd'}
                                onClick={this._onMenuClick}
                                showText={'领京豆'}/>
                    <MenuButton renderIcon={require('../image/function/gd.png')}
                                tag={'gd'}
                                onClick={this._onMenuClick}
                                showText={'更多'}/>
                </View>

                <View style={{backgroundColor:'#EDEDED',height:10}}/>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    menuView: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        flex: 1,
        marginTop: 10
    }

});