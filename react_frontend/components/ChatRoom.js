import React from "react";
import {Platform, KeyboardAvoidingView, SafeAreaView} from "react-native";
import {GiftedChat} from "react-native-gifted-chat";
import results from "./results";
import { render } from "react-dom";


export default class ChatRoom extends React.Component {
    state = {
        messages: []
    };

    get user() {
        //authenticate user from Firebase
        const data = {}
        results.get('/users.json').then((response) => {
            console.log(response.data);
        });
        console.log(data);
        let user = {
            id:data.id, 
            name:data.first_name + " " + data.last_name
        };
        return user;
    }

    componentDidMount() {
        //get messages from Firebase
        results.get('/message.json').then((response) => {
            messages: GiftedChat.append(messages, response.data.text)
        });
    }

    componentWillUnmount() {
        //leave page?
    }

    render() {
        const chat = <GiftedChat messages={this.state.messages} onSend={messages => {
            messages.forEach(item => {
                const message = {
                    text: item.text,
                    user: this.user
                }
                results.post('/message.json', message);
            })
        }} user={this.user} />;
    return <SafeAreaView style={{ flex: 1 }}>{chat}</SafeAreaView>;
    }
}