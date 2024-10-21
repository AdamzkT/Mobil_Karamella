import { useState } from 'react';
import { Button, StyleSheet, Text, View, Image} from 'react-native';

export default function App() {
  const italok = ['Karamellás Tej','Sör','Bor','Pálinka','Unicum','Vodka','Jäeger']
  const [id, setId] = useState(0)

  function sorsol(){
    let vel = id
    while(vel == id){
      vel = Math.floor(Math.random()*italok.length)
    }
    setId(vel)
  }

  return (
    <View style={styles.container}>
      
      <View style={{alignItems: 'center', flex: 1}}>
        <Text style={styles.szoveg}>{italok[id]}</Text>
        <Button title='Sorsol' onPress={sorsol}/>
      </View>
      {id == 0 ? <View style={styles.win}><Text style={styles.szoveg}>Győztél!</Text><Image source={require('./karamella.jpg')} style={styles.kep}/></View> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 100,
  },
  win: {
    alignItems: 'center',
    flex: 4,
  },
  szoveg: {
    fontSize: 30,
  },
  kep: {
    height: 300,
    width: 300,
    borderWidth: 5,
    borderColor: 'green',
    marginTop: 20,
  }
});
