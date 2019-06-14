import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TouchableOpacity, 
  TextInput,
  Button } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import { Switch, ScrollView } from 'react-native-gesture-handler';
import Constants from 'expo-constants';


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

//HOME SCREEN===========================================================================================
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

//OVERVIEW=============================================================================================
// let id=0
//  
// react-native IMPLIMENTATION OF TODO-LIST from CS50m
// 
// const Todo = props => (
// 	<View style={styles.todoContainer}>
// 		<Switch value={props.data.checked} onValueChange={props.onChecked}/>
// 		<Button onPress={props.onDelete} title="delete"/>
// 		<Text>{props.data.text}</Text>
// 	</View>
// )

// export default class App extends React.Component {
// 	constructor() {
// 		super()
//      		this.state = {
//        		todolist:[]
//      }
// }
// 	handleAddNote(){
// 			id++
//      		const todo = `Todo id:${id}`
//      		this.setState({
//        		todolist:[...this.state.todolist,{text:todo,id:id,checked:false}]
//      })
//   }

//   handleDelete(id){
//      		this.setState({
//        		todolist:this.state.todolist.filter(todo=>todo.id !== id)
//      })
//   }

//   handleChecked(id){
// 	this.setState({
// 	  todolist:this.state.todolist.map(todo=>{
// 		if (todo.id===id) {
// 		  return {id:todo.id,text:todo.text,checked:!todo.checked}
// 		}
// 		return todo
// 	  })
// 	})
// 	}


//   render() {
// 		return (
// 			<View style={[styles.appcontainer,styles.fill]}>
// 				<Text>Todo Count:{this.state.todolist.length}</Text>
// 				<Text>total unchecked todos:{this.state.todolist.filter(todo=>!todo.checked).length}</Text>
// 				<Button onPress={()=> this.handleAddNote()} title="Add Note"/>
// 				<ScrollView style={styles.fill}>
// 						{this.state.todolist.map(todo => <Todo data={todo}
// 							onDelete={()=>this.handleDelete(todo.id)}
// 							onChecked={()=>this.handleChecked(todo.id)}
// 						/>)}
// 				</ScrollView>
// 			</View>
//     )
//   }
// }

//TODO: IMPLIMENT FORMS BEFORE IMPLIMENTING TODO

let id = 0;

const Internal = props => (
  <View style={styles.todoContainer}>
    <Switch value={props.data.opinions} onValueChange={props.onOpinionChecked}/>
    <Switch value={props.data.aims} onValueChange={props.onAimChecked}/>
    <Switch value={props.data.desires} onValueChange={props.onDesireChecked}/>
    <Switch value={props.data.aversions} onValueChange={props.onAversionChecked}/>
    <Text>{props.data.text}</Text>
    <Button onPress={props.onDelete} title="delete"/>
  </View>
)

class OverviewScreen extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      text: "Enter your internals",
      internalslist:[],
    }
  }

  handleAddNote(){
    id++;
    const internal = this.state.text;
    this.setState({
      internalslist:[...this.state.internalslist,
        {text:internal,
        id:id,
        opinions:false,
        aims:false,
        desires:false,
        aversions:false,
      }]
    });
  }

  handleDelete(id){
    this.setState({
      internalslist:this.state.internalslist.filter(internal=>internal.id!=id)
    })
  }

  handleOpinions(id){
	this.setState({
	  internalslist:this.state.internalslist.map(internal=>{
		if (internal.id===id) {
		  return {
        id:internal.id,
        text:internal.text,
        opinions:!internal.opinions,
        aims: internal.aims,
        desires:internal.desires,
        aversions: internal.aversions
      }
		}
		return internal
	  })
	})
  }
  
  handleAims(id){
    this.setState({
      internalslist:this.state.internalslist.map(internal=>{
      if (internal.id===id) {
        return {
          id:internal.id,
          text:internal.text,
          opinions:internal.opinions,
          aims: !internal.aims,
          desires:internal.desires,
          aversions: internal.aversions
  
        }
      }
      return internal
      })
    })
    }
    
  handleDesires(id){
    this.setState({
      internalslist:this.state.internalslist.map(internal=>{
      if (internal.id===id) {
        return {
          id:internal.id,
          text:internal.text,
          opinions:internal.opinions,
          aims: internal.aims,
          desires:!internal.desires,
          aversions: internal.aversions  
        }
      }
      return internal
      })
    })
    }
  
  handleAversions(id){
      this.setState({
        internalslist:this.state.internalslist.map(internal=>{
        if (internal.id===id) {
          return {
            id:internal.id,
            text:internal.text,
            opinions:internal.opinions,
            aims: internal.aims,
            desires:internal.desires,
            aversions: !internal.aversions    
          }
        }
        return internal
        })
      })
      }
  


  render(){
    return(
    <View style={styles.container}>
      <Text>Overview screen!</Text>
      <Text>Total internals:{this.state.internalslist.length}</Text>
      <Text>Total opinions:{this.state.internalslist.filter(internal=>internal.opinions).length}</Text>
      <Text>Total aims:{this.state.internalslist.filter(internal=>internal.aims).length}</Text>
      <Text>Total desires:{this.state.internalslist.filter(internal=>internal.desires).length}</Text>
      <Text>Total aversions:{this.state.internalslist.filter(internal=>internal.aversions).length}</Text>
      <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}/>
      <Button onPress={()=> this.handleAddNote()} title="Add Note"/>

      <ScrollView style={styles.fill} >
 						{this.state.internalslist.map(internal => <Internal data={internal}
 							onDelete={()=>this.handleDelete(internal.id)}
              onOpinionChecked={()=>this.handleOpinions(internal.id)}
              onAimChecked={()=>this.handleAims(internal.id)}
              onDesireChecked={()=>this.handleDesires(internal.id)}
              onAversionChecked={()=>this.handleAversions(internal.id)}
              key={internal.id}
 						/>)}
 			</ScrollView>
    </View>
    )
  }
}

//NAVIGATION============================================================================================
const AppNavigator = createStackNavigator({
  Home: HomeScreen,
  Overview: OverviewScreen,
},
{
  initialRouteName:"Home",
}
);
const AppContainer = createAppContainer(AppNavigator);

//APP ==================================================================================================
export default function App() {
  return (
    <AppContainer/>
  );
}

// STYLING - ============================================================================================
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
  
  todoContainer:{
    flexDirection:'row',
    alignItems:'center'
  },
    
  appcontainer:{
    paddingTop:Constants.statusBarHeight
  },
    
  fill:{
    flex:1
  }
    
});
