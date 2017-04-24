/**
 * Created by wuyingtong on 2017/4/18.
 */
'use strict';

import React,{Component} from 'react';
import {Navigator} from 'react-native';

import MainPage from '../page/MainPage';

export default class Navigation extends Component{
    render(){
        return(
            <Navigator
                //初始化路由，主界面
                initialRoute={{component:MainPage}}
                renderScene={(route,navigator) => {
                   // 不是很明白
                   return <route.component navigator={navigator} {...route.args}/>
                }}
            />
        );
    }

    componentDidMount(){

    }
}