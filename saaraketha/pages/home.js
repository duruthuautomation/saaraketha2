import * as React from 'react';
import { List, MD3Colors, Divider, Card } from 'react-native-paper';
import { styles } from '../styles/style';
import { Text } from 'react-native-paper';
import { View} from 'react-native';
import { Image } from 'react-native';
import { Button } from 'react-native-paper';
import { Button1 } from '../components/buttons/home_page/button1'
import { Button2 } from '../components/buttons/home_page//button2'
import { Button3 } from '../components/buttons/home_page/button3'
import { Button4 } from '../components/buttons/home_page/button4'
import { Button5 } from '../components/buttons/home_page/button5'

const Home = () => (
    <View style={styles.margine_container}>
        <Text marginTop={20} marginBottom={20} variant="titleLarge">Disease Detection</Text>
        <View marginBottom={20}>
            <Button1/>
        </View>
        <View marginBottom={20}>
            <Button2/>
        </View>
        <View marginBottom={20}>
            <Button3/>
        </View>
        <View marginBottom={20}>
            <Button4/>
        </View>
        <Text marginTop={20} marginBottom={20} variant="titleLarge">Disease Detection</Text>
        <Divider  marginBottom={20} />

        <Card style={{ margin:0 }}>
  <Card.Content style={{ flexDirection: 'row', alignItems: 'center' }}>
    <View style={{ alignItems: 'flex-start', justifyContent: 'center' }}>
      <Image
        source={require('../assets/images/blast.jpg')}
        style={{ width: 75, height: 53, borderRadius: 5 }}
      />
    </View>
    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
      <Text marginTop={20} marginBottom={20} variant="titleMedium" style={{ textAlign: 'center', marginLeft: 10 ,fontSize:14}}>
        Rice blast
      </Text>
      <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center' }}>
        <Button5 />
      </View>
    </View>
  </Card.Content>
</Card>



<Card style={{ marginTop:15 }}>
  <Card.Content style={{ flexDirection: 'row', alignItems: 'center' }}>
    <View style={{ alignItems: 'flex-start', justifyContent: 'center' }}>
      <Image
        source={require('../assets/images/trips.jpg')}
        style={{ width: 75, height: 53, borderRadius: 5 }}
      />
    </View>
    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
      <Text marginTop={20} marginBottom={20} variant="titleMedium" style={{ textAlign: 'center', marginLeft: 10 , fontSize:14}}>
      Trips Damage
      </Text>
      <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center' }}>
        <Button5 />
      </View>
    </View>
  </Card.Content>
</Card>



<Card style={{ marginTop:15}}>
  <Card.Content style={{ flexDirection: 'row', alignItems: 'center' }}>
    <View style={{ alignItems: 'flex-start', justifyContent: 'center' }}>
      <Image
        source={require('../assets/images/blast2.jpg')}
        style={{ width: 75, height: 53, borderRadius: 5 }}
      />
    </View>
    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
      <Text marginTop={20} marginBottom={20} variant="titleMedium" style={{ textAlign: 'center', marginLeft: 10 ,fontSize:14}}>
        Rice blast
      </Text>
      <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center' }}>
        <Button5 />
      </View>
    </View>
  </Card.Content>
</Card>

        
    </View>
);

export {Home};