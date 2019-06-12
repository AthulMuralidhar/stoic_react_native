import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Clock extends React.Component{
  constructor(props){
    super(props);
    this.state = {date :new Date()}
  }

  componentDidMount(){
    this.timerId = setInterval(
      ()=> this.tick(),
      1000
    );
  }

  componentWillUnmount(){
    clearInterval(this.timerId);
  }

  tick(){
    this.setState({
      date: new Date()
    });
  }
  render(){
    return(
        <Text>Local time:{this.state.date.toLocaleTimeString()}</Text>
    )
  }
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Clock/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
