import React from "react";
import {Platform, KeyboardAvoidingView, SafeAreaView} from "react-native";
import {GiftedChat} from "react-native-gifted-chat";
import results from "./results";
import { render } from "react-dom";


export default class ChatRoom extends React.Component {
    state = {
        messages = []
    }

    get user() {
        //authenticate user from Firebase
        return {
            id: null,
            name: "FakeUser"
        };
    }

    componentDidMount() {
        //send message to Firebase
    }

    componentWillUnmount() {
        //leave page?
    }

    render() {
        const chat = <GiftedChat messages={this.state.messages} onSend={/* need to send to Firebase */} user={this.user} />;

        return <SafeAreaView>style={{ flex: 1 }}</SafeAreaView>;
    }
}