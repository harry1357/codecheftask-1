import React, { Component } from 'react';

import { StyleSheet, View, Button, Text } from 'react-native';
 
export default class App extends Component {

  constructor(){

    super();

    this.state={

      NumberHolder : 1

    }
  }

Generator=()=>
{

var random  = Math.floor(Math.random() * 6) + 1 ;

this.setState({

  NumberHolder : random

})
}

  render() {
    return (
   
      <View style={styles.MainContainer} >

       <Text style={{marginBottom: 10,color: "cyan", fontSize: 20}}>{this.state.NumberHolder}</Text>

       <Button color= "red" title="Press ME" onPress={this.Generator} />
        
      </View>

    );
  }
}

const styles = StyleSheet.create(
{
  MainContainer: {
    flex: 1,
    backgroundColor: "#000000",
    justifyContent: 'center',
    alignItems: 'center',
  }

});