import { StyleSheet, View, Animated, TouchableOpacity, Text } from 'react-native';
import { useRef, useState } from 'react';

export default function App() {

const [check,  setCheck] = useState(false);
const scale = useRef(new Animated.Value(0.1)).current;

const Valid = () => {
  if (check === false) {
    setCheck(true);
  } else {
    setCheck(false);
  }
}

if (check === true) {
  Animated.loop(Animated.timing(scale, 
    {
      toValue: 0.9,
      duration: 1500,
      useNativeDriver:  true,
  })).start();
} else if (check === false) {
  Animated.loop(Animated.timing(scale, 
    {
      toValue: 0.9,
      duration: 1500,
      useNativeDriver:  true,
  })).stop();
}

  return (
    <View style={styles.container}>

      <View style={{justifyContent: 'center',  alignItems:'center',  height: 300}}>
        <Text style={{fontSize: 35, marginTop: 40, color: 'rgba(151, 0, 255,0.6)', fontWeight: '800' }}>Happy Christmas! :)</Text>
      </View>
     

      <View style={styles.areaBalls}>

        <Animated.View style={{
          backgroundColor: 'rgb(255,0,0)',
          width: 45,
          height: 45,
          borderRadius: 100,
          justifyContent: 'space-around',
          alignItems: 'center',
          opacity: scale
        }}
        >
        </Animated.View>

        <Animated.View style={{
          backgroundColor: 'rgb(0,0,255)',
          width: 45,
          height: 45,
          borderRadius: 100,
          justifyContent: 'space-around',
          alignItems: 'center',
          opacity: scale
        }}
        >
        </Animated.View>
          
        <Animated.View style={{
          backgroundColor: 'rgb(0,255,0)',
          width: 45,
          height: 45,
          borderRadius: 100,
          justifyContent: 'space-around',
          alignItems: 'center',
          opacity: scale
        }}
        >
        </Animated.View>

        <Animated.View style={{
          backgroundColor: 'rgb(255,0,0)',
          width: 45,
          height: 45,
          borderRadius: 100,
          justifyContent: 'space-around',
          alignItems: 'center',
          opacity: scale
        }}
        >
        </Animated.View>

        <Animated.View style={{
          backgroundColor: 'rgb(0,255,0)',
          width: 45,
          height: 45,
          borderRadius: 100,
          justifyContent: 'space-around',
          alignItems: 'center',
          opacity: scale
        }}
        >
        </Animated.View>

        <Animated.View style={{
          backgroundColor: 'rgb(0,0,255)',
          width: 45,
          height: 45,
          borderRadius: 100,
          justifyContent: 'space-around',
          alignItems: 'center',
          opacity: scale
        }}
        >
        </Animated.View>
      </View>

      <View style={styles.areaButton}>
        <TouchableOpacity style={styles.button}
          onPress={() => Valid()}
        >
          <Text style={{color: 'rgb(255,255,255)'}}>Play/Off</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b2b2b2',
    justifyContent: 'center',
    width:'100%',
  },

  areaBalls: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    width:'100%',
    position: 'absolute'
  },

  button: {
    width: 110, 
    height: 45, 
    borderRadius: 8, 
    backgroundColor: 'rgb(151, 0, 255)', 
    alignItems: 'center', 
    justifyContent: 'center' 
  },

  areaButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',  
    marginTop: 250
  }
});