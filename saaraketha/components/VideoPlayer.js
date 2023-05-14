import React from 'react';
import { StyleSheet, View } from 'react-native';
// import Video from 'react-native-video';


const VideoPlayer = ({ source }) => {
  return (
    <View style={styles.container}>
      <Video source={source} style={styles.video} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  video: {
    flex: 1,
  },
});

export {VideoPlayer};
