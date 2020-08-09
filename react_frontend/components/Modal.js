import React, { Component } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from "react-native";
import results from './results'

export default class Modal extends Component {
    contructor(props){
        super(props);
        this.state={
            modalVisible: false,
            groupName: '',
        }
    }

  postGroupHandler = (e) => {
    e.preventDefault();
    const Data = {
        groupName: this.state.groupName,
        groupNumber: 10,
    }
    results.post('/groups.json', Data).then(response => {
        alert("You have added successfully")
        this.props.navigation.navigate("Home")
    })

}

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }

  render() {
    const { modalVisible } = this.state;
    return (
      <View style={styles.centeredView}>
        <Modal
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Create a New Study Group!</Text>
              <TextInput
                onChange={(e)=>this.setState({groupName:e.target.value})}
                value={this.state.groupName}
                placeholder="Enter a Group Name"
                style={[styles.input,{width:285, marginRight:10}]}></TextInput>

              <TouchableHighlight
                style={styles.button2}
                onPress={this.postGroupHandler}
              >
                <Text style={styles.textStyle}>Create</Text>
              </TouchableHighlight>

              <TouchableHighlight
                style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                onPress={() => {
                  this.setModalVisible(!modalVisible);
                }}
              >
                <Text style={styles.textStyle}>Cancel</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>

        <TouchableHighlight
          style={styles.openButton}
          onPress={() => {
            this.setModalVisible(true);
          }}
        >
          <Text style={styles.textStyle}>Show Modal</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  input:{
    flex:1,
    borderColor: '#F28482',
    borderRadius:15,
    borderWidth: 1,
    width: 600,
    height: 60,
    fontSize: 20,
    fontFamily: 'Avenir-Light',
    padding: 10,
    fontColor: '#A1A1A1'

},
button2:{
    width: 100,
    fontSize:30,
    fontFamily: 'Avenir-Medium',
    fontColor:'#000000',
    backgroundColor:'#FFCA74',
    borderRadius:15,
    padding: 10,
    margin:20,
    textAlign: 'center'
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});


