import * as React from 'react';
import { List, MD3Colors } from 'react-native-paper';
import { styles } from '../styles/style';

const Test = () => (
  <List.Section style={styles.margine_container}>
    <List.Subheader>Some title</List.Subheader>
    <List.Item title="First Item" left={() => <List.Icon icon="folder" />} />
  </List.Section>
);

export {Test};