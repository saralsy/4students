import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

const {width, height} = Dimensions.get('window');

class SignUp extends Component {
    render(){
        return (
            <View  style={styles.header}>
                <Text>I'm Sign Up page</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
        header: {
               height: height/10,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'red',
        },
});
export default SignUp;