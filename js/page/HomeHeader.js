/**
 * Created by wuyingtong on 2017/4/19.
 */
import React, {Component} from 'react';
import {
    Image, Text, View, StyleSheet, TextInput,Platform
} from 'react-native';

export default class HomeHeader extends Component {
    render() {
        return (
            <View style={styles.rootContainer}>
                <View style={styles.container}>
                    <View style={styles.searchBox}>
                        <Image style={styles.searchImg} source={require('../image/home_header/search.png')}/>
                        <TextInput style={styles.inputText}
                                   autoFocus={false}
                                   underlineColorAndroid={'transparent'}
                                   numberOfLines={1}
                                   placeholder={'啦啦啦啦啦绿绿绿'}
                                   placeholderTextColor={'white'}/>

                        <Image style={styles.voiceImg} source={require('../image/home_header/voice.png')}/>
                    </View>

                    <Image style={styles.friendImg} source={require('../image/home_header/friend.png')}/>
                    <Image style={styles.addImg} source={require('../image/home_header/add.png')}/>
                </View>

                <View style={styles.functionImgContainer}>
                    <Image style={styles.saoImg} source={require('../image/home_header/sao.png')}>
                    </Image>
                    <Image style={styles.saoImg} source={require('../image/home_header/money.png')}/>
                    <Image style={styles.saoImg} source={require('../image/home_header/money.png')}/>
                    <Image style={styles.saoImg} source={require('../image/home_header/qianbao.png')}/>
                </View>

                <View style={styles.functionTextContainer}>
                    <Text style={styles.text}>扫一扫</Text>
                    <Text style={styles.text}>付 钱</Text>
                    <Text style={styles.text}>收 钱</Text>
                    <Text style={styles.text}>卡 包</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    rootContainer: {
        height: 140,
        backgroundColor: '#1296db'
    },
    container: {
        paddingTop: Platform.OS === 'ios' ? 20 : 0,   // 处理iOS状态栏
        height: Platform.OS === 'ios' ? 68 : 48,   // 处理iOS状态栏
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 10
    },
    searchBox: {
        backgroundColor: '#1f72b3',
        borderRadius: 4,
        height: 32,
        flexDirection: 'row',
        alignItems: 'center',
        width: 260
    },
    searchImg: {
        width: 16,
        height: 16,
        marginLeft: 10
    },
    inputText: {
        flex: 1,
        backgroundColor: 'transparent',
        fontSize: 12,
        height: 44,
    },
    voiceImg: {
        width: 16,
        height: 16,
        resizeMode: 'stretch',
        marginRight: 10
    },
    friendImg: {
        width: 22,
        height: 22,
        resizeMode: 'stretch',
        marginLeft: 20
    },
    addImg: {
        width: 24,
        height: 24,
        resizeMode: 'stretch',
        marginLeft: 10
    },
    functionImgContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        justifyContent: 'space-around'
    },
    saoImg: {
        width: 40,
        height: 40,
        resizeMode: 'stretch'
    },

    functionTextContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingLeft: 8,
        paddingRight: 10
    },
    text: {
        color: 'white',
    }
});