/**
 * Created by wuyingtong on 2017/4/18.
 */
import React, {Component} from 'react';
import {
    Text,
    Alert,
    ListView,
    ToastAndroid,
    StyleSheet,
    View,
    Image,
    TouchableOpacity,
    ProgressBarAndroid,
    RefreshControl
} from 'react-native';

import TitleView from '../page/CommonHeader';

const REQUEST_URL = 'http://api.douban.com/v2/movie/top250?';
let start = 0;
let count = 10;
export default class MovieTopPage extends Component {
    //http://www.anzhuang100.com/ibn-eaz-master/order/ordermanagenew/search.do

    constructor(props) {
        super(props);

        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (r1, r2) => r1 !== r2
            }),

            load: false,
            refreshing: false,
        };
    }


    componentWillMount() {
        this._getMovieData();
    }

    _searchClick() {
        Alert.alert("提示", "搜索");
    }

    _friendClick() {
        //Alert.alert("提示", "添加");
        ToastAndroid.show("添加", ToastAndroid.SHORT);
    }

    _itemClick(url) {

        Alert.alert("提示", url);
    }

    _onRefresh() {
        this.setState({refreshing: true});
        start = count;
        count += 10;

        this._getMovieData();
    }

    _getMovieData() {
        //'http://wthrcdn.etouch.cn/weather_mini?city=北京'
        fetch(REQUEST_URL + 'start=' + start + '&count=' + count)
            .then((response) => response.json())
            .then((responseJson) => {
                console.log("数据呢：", responseJson);


                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(responseJson.subjects),
                    load: true,
                    refreshing: false
                });


            })
            .catch((error) => {
                console.error("错误：" + error);
            })
            .done();
    }

    _renderRow(rowData) {
        return (

            <View style={styles.itemContainer}>

                <Image style={styles.itemImg} source={{uri:rowData.images.large}}/>

                <View style={{marginLeft:3,flex:1}}>
                    <Text style={{fontWeight:'bold',color:'#50535b',fontSize:16,marginTop:3}}>{rowData.title}</Text>
                    <Text style={{color:'#50535b',fontSize:12,marginTop:3}}>类型：{rowData.genres + "、"}</Text>
                    <Text style={{color:'#50535b',fontSize:12,marginTop:3}}>主演：{rowData.casts.name + "、"}</Text>
                    <Text style={{color:'#50535b',fontSize:12,marginTop:3}}>豆瓣评分：{rowData.rating.average}</Text>
                    <Text style={{color:'#21c129',marginTop:3, alignSelf:'flex-end',marginRight:8}}>详细介绍>></Text>
                </View>

            </View>

        );
    }


    render() {
        if (!this.state.load) {
            return (
                <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                    <ProgressBarAndroid ActivityIndicator={'Inverse'}/>
                </View>

            );
        }


        return (
            <View style={styles.container}>
                <TitleView
                    titleText={'豆瓣电影TOP榜'}
                    type = {'movie'}
                    searchClick={this._searchClick}
                    friendClick={this._friendClick}
                    />

                <ListView
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.refreshing}
                            onRefresh={this._onRefresh.bind(this)}/>}
                    style={{flex:1,marginBottom:35}}
                    dataSource={this.state.dataSource}
                    renderRow={this._renderRow}>

                </ListView>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#E5E5E5',
        flex: 1
    },
    itemContainer: {
        margin: 5,
        backgroundColor: '#fbf8f8',
        flexDirection: 'row'
    }
    ,
    itemImg: {
        width: 100,
        height: 100,
        resizeMode: 'stretch',
        margin: 3,
        borderRadius: 5
    }
});