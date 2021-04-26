import 'react-native-gesture-handler';
import React, {useState, setState} from 'react';
import { Text, View}from 'react-native';
import {Button}from 'react-native-elements';
import {NavigationContainer}from '@react-navigation/native';
import {createStackNavigator}from '@react-navigation/stack';

function HomeScreen(props){
   return(
     <View style={{flex: 1, alighnItems: 'center', justifyContent: 'center'}}>
      <Text>Fitness Tracker</Text>
     
      <Button 
        title="Miles Ran"
        onPress={() => props.navigation.navigate('MilesScreen')}
        />
        <Button 
        title="Laps Swam"
        onPress={() => props.navigation.navigate('LapsScreen')}
        />
        <Button 
        title="Hurdles Jumped"
        onPress={() => props.navigation.navigate('HurdleScreen')}
        />
        <Button 
        title="Miles Biked"
        onPress={() => props.navigation.navigate('BikeScreen')}
        />
        <Button 
        title="Weights Lifted"
        onPress={() => props.navigation.navigate('WeightScreen')}
        />
        <Button 
        title="Goals Achieved"
        onPress={() => props.navigation.navigate('GoalScreen')}
        />
     </View>
   );

}

function MilesScreen (props) {
  const [incr, setIncr] = useState(0);

  return (
    <View style={{flex: 1, alighnItems: 'center', justifyContent: 'center'}}>
    <Text>{incr} Miles</Text>
    <Button
    title="Increase Miles Ran" 
    onPress={() => setIncr(incr + 1)}/>
    <Button 
    title="Reset Counter"
    onPress={() => setIncr(0)}/>
    <Button 
    title="Back to Start"
    onPress={() => props.navigation.navigate('Start')}/>
    </View>
  )
}


class LapsScreen extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          incr: 0
      };
  }




  render(){

    return(
      <View style={{flex: 1, alighnItems: 'center', justifyContent: 'center'}}>
           <Text>{this.state.incr} Laps</Text>
           <Button title="Increase Laps Swam" onPress={() => this.setState({incr: this.state.incr + 1})}/>
           <Button title="Reset Counter" onPress={() => this.setState({incr: 0})}/>
           <Button 
           title="Back to Start"
           onPress={() => this.props.navigation.navigate('Start')}/>
      </View>

    );
  }
}
//third screen
class HurdleScreen extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          incr: 0
      };
  }



//third screen
  render(){

    return(
      <View style={{flex: 1, alighnItems: 'center', justifyContent: 'center'}}>
           <Text>{this.state.incr} Hurdles</Text>
           <Button title="Increase Hurdles Jumped" onPress={() => this.setState({incr: this.state.incr + 1})}/>
           <Button title="Reset Counter" onPress={() => this.setState({incr: 0})}/>
           <Button 
           title="Back to Start"
           onPress={() => this.props.navigation.navigate('Start')}/>
      </View>

    );
  }
}

//Fourth Screen
class BikeScreen extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          incr: 0
      };
  }



//Fourth Screen
  render(){

    return(
      <View style={{flex: 1, alighnItems: 'center', justifyContent: 'center'}}>
           <Text>{this.state.incr} Miles Biked</Text>
           <Button title="Increase Miles Biked" onPress={() => this.setState({incr: this.state.incr + 1})}/>
           <Button title="Reset Counter" onPress={() => this.setState({incr: 0})}/>
           <Button 
           title="Back to Start"
           onPress={() => this.props.navigation.navigate('Start')}/>
      </View>

    );
  }
}

//Fifth Screen
class WeightScreen extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          incr: 0
      };
  }



//Fifth Screen
  render(){

    return(
      <View style={{flex: 1, alighnItems: 'center', justifyContent: 'center'}}>
           <Text>{this.state.incr} Weights Lifted</Text>
           <Button title="Increase Weights Lifted" onPress={() => this.setState({incr: this.state.incr + 1})}/>
           <Button title="Reset Counter" onPress={() => this.setState({incr: 0})}/>
           <Button 
           title="Back to Start"
           onPress={() => this.props.navigation.navigate('Start')}/>
      </View>

    );
  }
}

//Sixth Screen
class GoalScreen extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          incr: 0
      };
  }



//Sixth Screen
  render(){

    return(
     <View style={{flex: 1, alighnItems: 'center', justifyContent: 'center'}}>
           <Text>{this.state.incr} Goals Achieved</Text>
           <Button title="Increase Goals Achieved" onPress={() => this.setState({incr: this.state.incr + 1})}/>
           <Button title="Reset Counter" onPress={() => this.setState({incr: 0})}/>
           <Button 
           title="Back to Start"
           onPress={() => this.props.navigation.navigate('Start')}/>
      </View>

    );
  }
}


const Stack = createStackNavigator();

export default function App(){
 return (
   <NavigationContainer>
       <Stack.Navigator>
         <Stack.Screen name="Start" component={HomeScreen}/>
         <Stack.Screen name="MilesScreen" component={MilesScreen}/>
         <Stack.Screen name="LapsScreen" component={LapsScreen}/>
         <Stack.Screen name="HurdleScreen" component={HurdleScreen}/>
         <Stack.Screen name="BikeScreen" component={BikeScreen}/>
         <Stack.Screen name="WeightScreen" component={WeightScreen}/>
         <Stack.Screen name="GoalScreen" component={GoalScreen}/>
       </Stack.Navigator>
   </NavigationContainer>
 )
}