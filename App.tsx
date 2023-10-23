import { StatusBar } from 'expo-status-bar';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import COLORS from './constants';
import IMAGES from './assets/images';
import { useState } from 'react';
import { FileSystemCancellableNetworkTask } from 'expo-file-system';

const App = () => {

  const [isLoad, setIsLoad] = useState(false);

  const changeLoad = () => setIsLoad(!isLoad);
// https://jsonplaceholder.typicode.com/photos

  


  return (
    <View style={styles.container}>
      <Text>Download cat image!</Text>
      <Pressable onPress={changeLoad} >
        <View>
          <Image 
            source={{ uri: IMAGES.download }}
            style={{ width: 50, height: 50 }}
          />
        </View>
      </Pressable>
      {isLoad && (
        <Image
          style={{ width: 50, height: 50 }}
          source={{ uri: IMAGES.loading }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
