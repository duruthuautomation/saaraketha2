import * as React from 'react';
import { Text,Badge, Avatar,Divider  } from 'react-native-paper';
import { View } from 'react-native';
import { styles } from '../styles/style';
// import { VideoPlayer } from '../components/VideoPlayer';


const UploadImage = () => (
  <View style={styles.margine_container}>
  <>
  <View style={styles.badge_container}>
  <Text variant="titleLarge" style={styles.text_pand}>
    Live stream by Smart Device
  </Text>
  <Avatar.Icon size={24} icon="progress-question"  style={{ backgroundColor: '#BBFF4D' }} />
</View>
<Divider style={styles.divider_padding}/>
    <Text variant="bodyLarge">The live stream from the smart IoT device, can be accessed through the mobile application by clicking on the ‘Connect to Device’ button. </Text>

    <View style={[styles.badge_container, { marginTop: 40 }]}>

  <Text variant="titleLarge" style={styles.text_pand}>
  Live stream by  Mobile Phone 
  </Text>
  <Avatar.Icon size={24} icon="progress-question"  style={{ backgroundColor: '#BBFF4D' }} />
    </View>
    <Divider style={styles.divider_padding}/>
    <Text variant="bodyLarge">Same process happen like the live stream given by the smart device. </Text>


    <View style={[styles.badge_container, { marginTop: 40 }]}>

  <Text variant="titleLarge" style={styles.text_pand}>
  Capturing an image during the live stream 
  </Text>
  <Avatar.Icon size={24} icon="progress-question"  style={{ backgroundColor: '#BBFF4D' }} />
    </View>
    <Divider style={styles.divider_padding}/>
    <Text variant="bodyLarge">Same process happen like the live stream given by the smart device.</Text>


 </>
 </View>
);

export {UploadImage};
