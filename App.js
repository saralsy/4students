import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import * as ImagePicker from 'expo-image-picker';
import * as ImageManipulator from 'expo-image-manipulator';

const [selectedImage, setSelectedImage] = React.useState("");

let openImagePickerAsync = async () => {
  let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

  if(permissionResult.granted === false){
    alert("Permission to access camera roll is required!");
    return;
  }

  let pickerResult = await ImagePicker.launchImageLibraryAsync();

  if(pickerResult.cancelled === false){
    setSelectedImage(pickerResult.uri);
  } else {
    alert("Upload a picture please")
  }
}

let rotate = async () => {
  const manipResult = await ImageManipulator.manipulateAsync(
    selectedImage,
    [{ flip : ""}, { flip : ImageManipulator.FlipType.Vertical }],
    { compress : 1, format: ImageManipulator.SaveFormat.PNG}
  );
  setSelectedImage(maniResult.uri);
}

export default function App() {
  
  return (
    <View style={styles.container}>
      { (selectedImage == "") ? 
      (
        <View>
          <TouchableOpacity
            onPress={openImagePickerAsync}
            style={styles.button}>
              <Text style={{color: '#eeb585'}}>Upload a picture</Text>
          </TouchableOpacity>
        </View>
      ) :
      (
        <View style={{alignItems:"center"}}> 
          <Image
            source={{ uri:selectedImage }}
            style={styles.image}
            >
              <TouchableOpacity
                onPress={rotate}
                style={styles.button}
              >
                <Text style={{color:"#eeb585"}}>Rotate image</Text>

              </TouchableOpacity>

          </Image>

        </View>
      )}

      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    
  }
});
