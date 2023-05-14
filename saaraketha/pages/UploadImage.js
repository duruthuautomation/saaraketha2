import * as React from 'react';
import { Modal, Portal, Text, Button, Provider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const UploadImage = () => {



  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const modalStyle = {
    height: 500, // Set the desired height here
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 40,
    borderRadius: 40,
    width:400,
    margin: 6,
    
  };
  const textStyle = {
    fontSize: 20, // Set the desired font size here
  };


  return (
    <SafeAreaProvider >
    <Provider>
      <Portal>
        <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={modalStyle}>
        <Text>Live stream by smart Device 
The live stream from the smart IoT device, can be accessed through the mobile application by clicking on the ‘Connect to Device’ button. 
Live stream by  Mobile Phone 
Same process happen like the live stream given by the smart device.
Capturing an image During the live stream 
Capturing an image during the live stream 
Users also have the opportunity to conform the presence of a disease and obtain more information about it through AI-based prediction by capturing an image of a suspicious rice plant from the live stream. This can be done by clicking the ‘capture’ button during the live stream 
Same process happen like the live stream given by the smart device.
Start Live stream</Text>
        </Modal>
      </Portal>
      <Button style={{marginTop: 800}} onPress={showModal}>
        Show
      </Button>
    </Provider>
    </SafeAreaProvider> 
  );
};



export {UploadImage};