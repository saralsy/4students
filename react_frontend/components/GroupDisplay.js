import React, { Component } from 'react';

import { StyleSheet, Text, View, Dimensions, ScrollView, TextInput, TouchableOpacity} from 'react-native';

const GroupDisplay = (props) => {
    return (
        <View style={styles.container}>
            
            <Text style={styles.groupTitle}>{props.groupName}</Text>
            <Text style={styles.numMember}>{props.groupNumber}</Text>
            

        </View>
       

    )
    

}



const styles = StyleSheet.create({
    container:{
        backgroundColor: '#92C8BB',
        justifyContent: 'flex-start',
        width: 929,
        height: 100,
        marginBottom:30,
        marginTop:30,
        paddingTop:11,
    },
    groupTitle:{
        fontSize: 30,
        fontFamily: 'Avenir-Medium',
        marginLeft: 50,
        fontColor: '#000000',


    },
    numMember:{
        fontSize: 20,
        fontFamily: 'Avenir-Medium',
        marginLeft: 50,
        fontColor: '#000000',
    }


})

export default GroupDisplay;