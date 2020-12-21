import React from 'react';
import {
  Text,
  ScrollView,
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';

import Sound from 'react-native-sound';

const soundList = [
  require('./assets/one.wav'),
  require('./assets/two.wav'),
  require('./assets/three.wav'),
  require('./assets/four.wav'),
  require('./assets/five.wav'),
  require('./assets/six.wav'),
  require('./assets/seven.wav'),
  require('./assets/eight.wav'),
  require('./assets/nine.wav'),
  require('./assets/ten.wav'),
];
const App = () => {

  const playSound = (sound) => {
    const soundVar = new Sound(sound, Sound.MAIN_BUNDLE, (err)=> {
      if(err){
      console.log(err)
      }
    });
    setTimeout(() => {
      soundVar.play();
    }, 1000);
    soundVar.release();
  };

  return (
    <ScrollView>
      <Image source = {require('./assets/logo.png')} />
      <View>
        {soundList.map((sound) => (
          <TouchableOpacity 
          key = {sound}
          style = {{padding:20}}
          onPress = {() => {playSound(sound)}}
          >
          <Text> {sound} </Text>
        </TouchableOpacity>
        ))}
        
      </View>
    </ScrollView>
  )
};

export default App;