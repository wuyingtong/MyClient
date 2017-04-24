/**
 * Created by wuyingtong on 2017/4/19.
 */
import React, {Component, PropTypes} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity,} from 'react-native';

export default class MenuButton extends Component {

    static propTypes = {
        renderIcon: PropTypes.number.isRequired,
        showText: PropTypes.string,
        tag: PropTypes.string,
        onClick: PropTypes.func
    };

    constructor(props) {
        super(props);

        this._onClick = this._onClick.bind(this);
    }

    _onClick() {
        if (this.props.onClick) {
            this.props.onClick(this.props.showText, this.props.tag);
        }
    }

    render() {
        return (
            <TouchableOpacity onPress={this._onClick}>
                <View style={{flex:1,alignItems:'center'}}>
                    <Image style={styles.iconImg} source={this.props.renderIcon}/>
                    <Text>{this.props.showText}</Text>
                </View>
            </TouchableOpacity>

        );
    }
}

const styles = StyleSheet.create({
    iconImg: {
        width: 38,
        height: 38,
        marginBottom: 2
    }
});