import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import * as ImagePicker from 'expo-image-picker';
import * as ImageManipulator from 'expo-image-manipulator';

class UploadNotes extends Component{
    constructor(props){
        super(props);
        this.state = {
            selectedImage:"" 
        }
        this.handledSelectedImage = this.handledSelectedImage.bind(this);
    }
    handledSelectedImage(val){this.setState({selectedImage:val})}

    async openImagePickerAsync() {
        let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();
    
        if(permissionResult.granted === false){
          alert("Permission to access camera roll is required");
          return;
        }
    
        let pickerResult = await ImagePicker.launchImageLibraryAsync();
    
        if(pickerResult.cancelled == false){
            this.handledSelectedImage(pickerResult.uri);
        } else {
          alert("Upload a picture please")
        }
    
    };
    
    async rotate () {
        const manipResult = await ImageManipulator.manipulateAsync(
          this.state.selectedImage,
          [{flip:""},{flip:ImageManipulator.FlipType.Vertical}],
          {compress: 1, format: ImageManipulator.SaveFormat.PNG}
        );
        this.handledSelectedImage(manipResult.uri);
    };

      render(){
        return (
            <View style={styles.container}>
              {this.selectedImage == "" ? (
                <View>
                  <TouchableOpacity
                    onPress={openImagePickerAsync}
                    style={styles.button}>
                      <Text style={styles.body}>Upload your notes</Text>
                  </TouchableOpacity>
                </View>
        
              ): (
                <View style={{alignItems: "center"}}>
                  <Image 
                    source={{uri:this.selectedImage}}
                    style={styles.image}
                  />
                  <TouchableOpacity
                    onPress={this.rotate}
                    style={styles.button}>
                      <Text style={styles.body}>Rotate image</Text>
                  </TouchableOpacity>
                </View>
        
              )}
            </View>
          );

      }
      
    

}

export default UploadNotes;

const styles = StyleSheet.create({
   container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#eaeaea"
   },
   title:{
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: "#20232a",
    borderRadius: 6,
    backgroundColor: "#61dafb",
    color: "#20232a",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold"
   },
   body:{
    color: "#20232a",
    fontSize: 16,
   },
   image: {

   },
   button: {

   }
})