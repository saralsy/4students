import React, { Component } from 'react';

import { StyleSheet, Text, View, Dimensions, ScrollView, TextInput, TouchableOpacity} from 'react-native';

class GroupDisplay extends Component {
    constructor(props){
        super(props);
        this.state={
            groups: []
        }
    }
    render(){
        <View style={styles.container}>
            <Text style={styles.groupTitle}></Text>
            <Text style={styles.numMember}></Text>
        </View>

    }

}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#92C8BB',
        justifyContent: 'flex-start',
        width: 929,
        height: 100,
    },
    groupTitle:{
        fontSize: 30,
        fontFamily: 'Avenir-Medium',
        marginLeft: 50,


    },
    numMember:{
        fontSize: 20,
        fontFamily: 'Avenir-Medium',
        marginLeft: 50,
    }


})

export default GroupDisplay;