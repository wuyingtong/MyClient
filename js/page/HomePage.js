/**
 * Created by wuyingtong on 2017/4/18.
 */
import React, {Component} from 'react';
import {
    Text, View, Image, StyleSheet, ScrollView
} from 'react-native';

import ViewPager from 'react-native-viewpager';
import HomeHeader from '../page/HomeHeader';
import HomeFunctionList from  '../page/HomeFunctionList';
import ToadySpecialPrice from '../page/ToadySpecialPrice';

const BANNER_IMGS = [
    require('../image/banner/1.jpg'),
    require('../image/banner/2.jpg'),
    require('../image/banner/3.jpg'),
    require('../image/banner/4.jpg'),
    require('../image/banner/5.jpg'),
    require('../image/banner/6.jpg'),
    require('../image/banner/3.jpg'),
    require('../image/banner/4.jpg'),
];
export default class HomePage extends Component {

    constructor(props) {
        super(props);
        // 用于构建DataSource对象
        var dataSource = new ViewPager.DataSource({
            pageHasChanged: (p1, p2) => p1 !== p2
        });

        this.state = {
            dataSource: dataSource.cloneWithPages(BANNER_IMGS)
        }
    }

    _renderPage(data, pageId) {
        return (
            <Image source={data} style={styles.page}/>
        );
    }

    render() {
        return (
            <ScrollView>
                <View style={{flex:1,backgroundColor:'white'}}>

                    <HomeHeader/>

                    <HomeFunctionList/>

                    <ViewPager
                        style={{height:130}}
                        dataSource={this.state.dataSource}
                        renderPage={this._renderPage}
                        isLoop={true}
                        autoPlay={true}/>

                    <View style={{height:10,backgroundColor:'#EDEDED'}}/>

                    <Text style={styles.text}>今日特价</Text>
                    <ToadySpecialPrice/>



                </View>

            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        height: 130,
        resizeMode: 'stretch'
    },
    text: {
        fontSize: 16,
        color: 'red',
        padding: 8,
        fontWeight:'bold'
    }
});