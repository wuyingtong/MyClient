/**
 * Created by wuyingtong on 2017/4/21.
 */
import React, {Component} from 'react';
import {StyleSheet, View, Image, Text, TouchableOpacity, ToastAndroid} from 'react-native';

import ImagePicker from 'react-native-image-picker';

export default class MinePageHeader extends Component {

    state = {
        avatarSource: null,
        videoSource: null
    };

    selectPhotoTapped() {
        const options = {

            quality: 1.0,
            maxWidth: 500,
            maxHeight: 500,
            storageOptions: {
                skipBackup: true
            }
        };

        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled photo picker');
            }
            else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            }
            else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            }
            else {
                let source = {uri: response.uri};

                // You can also display the image using data:
                // let source = { uri: 'data:image/jpeg;base64,' + response.data };

                this.setState({
                    avatarSource: source
                });
            }
        });
    }

    selectVideoTapped() {
        const options = {
            title: 'Video Picker',
            takePhotoButtonTitle: 'Take Video...',
            mediaType: 'video',
            videoQuality: 'medium'
        };

        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled video picker');
            }
            else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            }
            else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            }
            else {
                this.setState({
                    videoSource: response.uri
                });
            }
        });
    }

    render() {
        return (
            <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
                <View style={styles.container}>
                    { this.state.avatarSource === null ?
                        <Image style={styles.headerImg} source={require('../image/mine/header.png')}/> :
                        <Image style={styles.avatar} source={this.state.avatarSource}/>
                    }


                    <View style={{marginLeft: 8, flex: 1}}>
                        <Text style={{color: "black", fontSize: 14}}>Aimin</Text>
                        <Text style={{fontSize: 12, marginTop: 3}}>个人中心：银行卡、会员</Text>
                    </View>

                    <Image style={styles.codeImg} source={require('../image/mine/qrcoe.png')}/>
                    <Image style={{width: 20, height: 18, resizeMode: 'stretch'}}
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