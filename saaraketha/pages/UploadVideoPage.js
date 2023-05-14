import * as React from 'react';
import { Text } from 'react-native-paper';
import { View } from 'react-native';
import { styles } from '../styles/style';
// import { VideoPlayer } from '../components/VideoPlayer';


const UploadVideoPage = () => (
  <View style={styles.margine_container}>
  <>
    <Text variant="titleLarge" style={styles.text_panding}>What is Aerial Video? </Text>

    <Text variant="bodyLarge">Aerial video is a type of video footage that is captured from an elevated position.</Text>

    <Text variant="titleLarge" style={styles.text_panding}>Sample Video </Text>

    {/* <VideoPlayer source="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4" /> */}


    <Text variant="titleLarge" style={styles.text_panding}>Aerial Video: Capturing a Bird's Eye View</Text>

    <Text variant="bodyLarge">Aerial video is a type of video footage that is captured from a high altitude or elevated position, usually from an aircraft, drone or helicopter. The camera used to capture aerial video is mounted on the aerial vehicle, and it captures the surroundings from a bird's eye view perspective. Aerial video is commonly used in cinematography, surveying, land mapping, real estate, news reporting, and tourism. With advancements in technology, aerial video has become more accessible and affordable, allowing more people to capture stunning aerial footage. Aerial video can provide unique and breathtaking views of landscapes, cities, and events that cannot be captured with ground-level cameras. It has become an essential tool for many industries that require a broader and more comprehensive view of their subject matter.</Text>

 </>
 </View>
);

export {UploadVideoPage};



