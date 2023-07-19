import React, { useState } from 'react';
import { View, Image, Text, Button, StyleSheet } from 'react-native';

const App = () => {

  const [displayText, setDisplayText] = useState(''); 
  const [count, setCount] = useState(0)
  const handleButtonPress = () =>
  {
    setCount(count+1);
    if(count % 2 == 0)
    {
      setDisplayText('');
    }
    else
    {
      setDisplayText('Mujhe Press Krne Se Kia Hoga Bai? Jao Koi Dhung Ka Kaam Kro.');
    }
  };

  return (
    <View style = {styles.container}>
      <Image
        source = {require('./doge.png')}
        style = {styles.image}
      />
      <Text style = {styles.heading}>Doge App</Text>
      <Text style = {styles.text}>hui hui hui</Text>
      <Button
        title = "Mujhe Press Kro"
        onPress = {handleButtonPress}
        style = {styles.button}
        textStyle = {styles.buttonText}
      />
      {displayText !== '' && <Text numberOfLines = {2} style = {styles.text}>{displayText}</Text>}

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    textAlign: "center"
  },
  button: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 200,
    paddingVertical: 20,
    paddingBottom: 20,
    borderRadius: 20,
    textAlign: "center"
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: "center",
    width: 10
  },
});

export default App;
