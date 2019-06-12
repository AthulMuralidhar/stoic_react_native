import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation';


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

//HOME SCREEN
class HomeScreen extends React.Component{
  render(){
    return(
      <View style={styles.container}>
      <Text>Welcome, practising Stoic, Welcome!</Text>
      <Clock/>
      <Text>{"\n"}</Text>
      <Text> In your daily travels, you might come </Text>
      <Text> across various situations that try to </Text>
      <Text> put your stoicabilities to the test. Here</Text>
      <Text> is a helper app to distinguish and keep</Text>
      <Text> track of the internals, the "real" things </Text>
      <Text> that you actually have to care about </Text>
      <Text>{"\n"}</Text>
      <TouchableOpacity 
              style={styles.btnStyle} 
              onPress={()=>{this.props.navigation.navigate('Overview')}}>
              <Text>Go!</Text>
      </TouchableOpacity>
    </View>
    
    )
  }
}

//OVERVIEW

const OverviewScreen = (props) => (
  <View style={styles.container}>
    <Text>Overview screen!</Text>
  </View>
)

//NAVIGATION
const AppNavigator = createStackNavigator({
  Home: HomeScreen,
  Overview: OverviewScreen,
},
{
  initialRouteName:"Home",
}
);
const AppContainer = createAppContainer(AppNavigator);

//APP 
export default function App() {
  return (
    <AppContainer/>
  );
}

// STYLING - HOMESCREEN
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnStyle:{
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
});
