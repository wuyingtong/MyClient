/**
 * Created by wuyingtong on 2017/4/21.
 */
import React, {Component, PropTypes} from 'react';
import {
    StyleSheet, View, Text, Image
} from 'react-native';

export default class MinePageList extends Component {

    static defaultProps = {
        icon: PropTypes.number.isRequired,
        iconText: PropTypes.string,
        desc: PropTypes.string
    };

    render() {
        return (
            <View>
                <View style={styles.container}>
                    <Image style={styles.iconImg} source={this.props.icon}/>
                    <Text style={styles.text}>{this.props.iconText}</Text>
                    <Text style={{fontSize:12,marginRight:8}}>{this.props.desc}</Text>
                    <Image style={styles.arrow} source={require('../image/mine/arrow_right.png')}/>
                </View>

                <View style={{backgroundColor:'#EDEDED',paddingLeft:8,height:1}}/>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'white',
        padding: 10,
        alignItems: 'center'
    },
    iconImg: {
        width: 30,
        height: 30,
        resizeMode: 'stretch'
    },
    text: {
        color: 'black',
        marginLeft: 10,
        fontSize: 16,
        flex: 1,
    },
    arrow: {
        width: 20,
        height: 18,
        resizeMode: 'stretch'
    }

});