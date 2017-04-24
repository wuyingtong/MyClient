/**
 * Created by wuyingtong on 2017/4/20.
 */
import React, {Component, PropTypes} from 'react';
import {View, Image, Text, StyleSheet, Platform, TouchableOpacity} from 'react-native';

export default class CommonHeader extends Component {

    static defaultProps = {
        titleText: PropTypes.string.isRequired,
        type: PropTypes.string,
        rightText: PropTypes.string,
        searchClick: PropTypes.func,
        friendClick: PropTypes.func
    };

    constructor(props) {
        super(props);

        this._searchClick = this._searchClick.bind(this);
        this._friendClick = this._friendClick.bind(this);
    }

    _searchClick() {
        if (this.props.searchClick) {
            this.props.searchClick();
        }
    }

    _friendClick() {
        if (this.props.friendClick) {
            this.props.friendClick();
        }
    }

    render() {

        if (this.props.type === 'mine') {
            return (
                <View style={styles.container}>
                    <Text style={styles.titleText}>{this.props.titleText}</Text>
                    <Text style={styles.rightText}>{this.props.rightText}</Text>
                </View>
            );
        } else {
            return (
                <View style={styles.container}>
                    <Text style={styles.titleText}>{this.props.titleText}</Text>
                    <TouchableOpacity onPress={this._searchClick}>
                        <Image style={styles.iconImg} source={require('../image/home_header/search.png')}/>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={this._friendClick}>
                        <Image style={styles.iconImg} source={require('../image/home_header/friend.png')}/>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={this._friendClick}>
                        <Image style={styles.iconImg} source={require('../image/home_header/add.png')}/>
                    </TouchableOpacity>

                </View>

            );
        }
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: Platform.OS === 'ios' ? 20 : 0,   // 处理iOS状态栏
        height: Platform.OS === 'ios' ? 68 : 48,   // 处理iOS状态栏
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: '#1296db',
    },
    titleText: {
        fontSize: 18,
        color: 'white',
        flex: 1
    },
    rightText: {
        fontSize: 18,
        color: 'white',
    },
    iconImg: {
        width: 24,
        height: 24,
        resizeMode: 'stretch',
        marginRight: 15
    }
});
