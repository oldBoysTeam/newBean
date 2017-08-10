/**
 * Created by sunbiao on 2017/7/27.
 */

import React, { PureComponent } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
export default class NavigationItem extends PureComponent{
    render(){
        let icon = this.props.icon && <Image style={[styles.icon,this.props.iconStyle]} source={this.props.icon }/>
        let title = this.props.title && <Text style={[styles.title,this.props.titleStyle]}>{this.props.title}</Text>
        return(
            <TouchableOpacity style={styles.container} onPress={this.props.onPress}>
                {icon}
                {title}
            </TouchableOpacity>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    },
    icon:{
        width:27,
        height:27,
        margin:8
    },
    title:{
        fontSize:15,
        color:'#333333',
        margin:8,
    }


})