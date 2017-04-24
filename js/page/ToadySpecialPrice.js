/**
 * Created by wuyingtong on 2017/4/20.
 */
import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

export default class extends Component {

    render() {
        return (
            <View style={{flexDirection:'row',flex:1,padding:8,marginBottom:50,alignItems:'center'}}>

                <View>
                    <View style={styles.itemTitle}>
                        <Text style={{color:'black',fontSize:18,fontWeight:'bold',marginRight:4}}>白菜秒杀</Text>
                        <Text style={styles.timeBg}>02</Text>
                        <Text style={{color:'#50535b'}}>:</Text>
                        <Text style={styles.timeBg}>59</Text>
                        <Text style={{color:'#50535b'}}>:</Text>
                        <Text style={styles.timeBg}>31</Text>
                        <Text style={{marginTop:3}}>全部商品></Text>
                    </View>

                    <View style={{flexDirection:'row',marginTop:5}}>
                        <Image style={styles.leftImg} source={require('../image/banner/1.jpg')}/>

                        <View>
                            <Text
                                style={styles.proDetail}
                                numberOfLines={2}
                                ellipsizeMode='tail'>
                                【雷霆手机】499抢真八核，腾讯雷霆手机，你值得拥有，赶快来抢吧！</Text>

                            <View style={{flexDirection:'row',alignItems:'center',marginTop:10,}}>
                                <Text style={styles.originalPrice}> ¥1499 </Text>
                                <Text style={{marginLeft:5}}>¥499</Text>
                                <Text style={styles.discount}>2.5折</Text>
                            </View>
                        </View>

                    </View>
                </View>

                <Image style={{flex:1,width:85,height:85,resizeMode:'stretch'}}
                       source={require('../image/banner/3.jpg')}/>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    itemTitle: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    timeBg: {
        backgroundColor: '#50535b',
        borderRadius: 3,
        marginLeft: 3,
        marginRight: 3,
        color: 'white',
        paddingLeft: 3,
        paddingRight: 3
    },
    leftImg: {
        width: 100,
        height: 60,
        resizeMode: 'stretch',
    },
    proDetail: {
        width: 160,
        flexWrap: 'wrap',
        fontSize: 12,
        marginLeft: 3,
        color: '#50535b',
    },
    originalPrice: {
        color: 'red',
        marginLeft: 3,
        textDecorationLine: 'line-through'
    },
    discount: {
        backgroundColor: 'red',
        borderRadius: 3,
        color: 'white',
        marginLeft: 3,
        paddingLeft: 1,
        paddingRight: 1,
        fontSize: 12
    }

});