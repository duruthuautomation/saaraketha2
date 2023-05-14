import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const BackAction = ({ title }) => { // <-- add title as a prop
  const navigation = useNavigation();


  const appbarStyle = {
    height: 50 // <-- set the desired height here
  };

  return (
    <Appbar.Header style={appbarStyle}>
      <Appbar.BackAction onPress={() => navigation.goBack()} />
      <Appbar.Content title={title} />
    </Appbar.Header>
  );
};

export { BackAction };
