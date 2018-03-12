import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, FlatList } from 'react-native';

export default class App extends React.Component {
  


constructor(props){
    super(props);
    this.state = {text: '', data: []}
  }
  
render() {
    
return (
      <View style={styles.container}>

      <TextInput style={{marginBottom: 10, width: 200, borderColor: 'gray', borderWidth: 1}} onChangeText={(text) => this.setState({text})} value={this.state.text}></TextInput>

        <View style={styles.button}>
        <Button onPress={this.add} title='ADD' />
        <Button onPress={this.clear} title='CLEAR' />
        </View>

        <Text style = {{fontWeight: 'bold', color: 'blue'}}> Shopping List </Text>

        <FlatList data = {this.state.data} renderItem={({item}) => 
        <Text>{item.key}</Text>}></FlatList>

        </View>

    );
  }

add = () => {
  let text = this.state.text;
  this.setState({data: [...this.state.data, {key: text}], text});
}

clear = () => {
  this.setState({data: []});
}
}

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    flexDirection: 'row', 
    alignItems: 'center',
    justifyContent: 'space-around',
   },
  });

