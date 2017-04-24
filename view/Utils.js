/**
 * Created by wuyingtong on 2017/4/18.
 */

import React, {Component} from 'react';
import {PixelRatio} from 'react-native';
import Dimensions from 'Dimensions';

const Util = {
    ratio: PixelRatio.get(),
    pixel: 1 / PixelRatio.get(),
    size: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },
    post(url, data, callback){
        const fetchOptions = {
            method: 'POST',
            header: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        };

        fetch(url, fetchOptions)
            .then((response) => {
                return response.json()
            })
            .then((responseData) => {
                callback(responseData);
            });
    },
    key: 'BDKHFSDKJFHSDKFHWEFH-REACT-NATIVE',
};

export default Util;