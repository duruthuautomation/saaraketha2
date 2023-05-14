import React from 'react';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';
import { Card, Button } from 'react-native-paper';

const VideoComponent = () => {
      const droidCamUrl = 'http://192.168.180.70:4747/video';
  // Replace <IP_ADDRESS> with the IP address of the device running DroidCam, and <PORT_NUMBER> with the corresponding port number.
  return <WebView source={{ uri: droidCamUrl }} style={{ flex: 1 }} />;
};

export {VideoComponent};