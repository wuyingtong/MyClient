/**
 * Created by wuyingtong on 2017/4/21.
 */
import React, {Component} from 'react';
import {StyleSheet, View, Image, Text, TouchableOpacity, ToastAndroid} from 'react-native';

export default class MinePageHeader extends Component {

    _selectImg() {
        ToastAndroid.show("选择照片/打开照相机", ToastAndroid.SHORT);
    }

    render() {
        return (
            <TouchableOpacity onPress={this._selectImg.bind(this)}>
                <View style={styles.container}>
                    <Image style={styles.headerImg} source={require('../image/mine/header.png')}/>

                    <View style={{marginLeft:8,flex: 1}}>
                        <Text style={{color:"black",fontSize:14}}>Aimin</Text>
                        <Text style={{fontSize:12,marginTop:3}}>个人中心：银行卡、会员</Text>
                    </View>

                    <Image style={styles.codeImg} source={require('../image/mine/qrcoe.png')}/>
                    <Image style={{width:20,height:18,resizeMode:'stretch'}}
                           source={require('../image/mine/arrow_right.png')}/>

                </View>

            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'white',
        padding: 10,
        alignItems: 'center',
    },
    headerImg: {
        width: 40,
        height: 40,
        resizeMode: 'stretch',
        borderRadius: 5
    },
    codeImg: {
        width: 26,
        height: 26,
        resizeMode: 'stretch',
        marginRight: 6
    }
});