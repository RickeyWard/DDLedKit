
import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import {ColorWheel} from 'react-native-color-wheel';
import { hsv_to_rgb } from 'colorsys';
import {Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text} from 'native-base';


export default class App extends React.Component {
 state={
    color: `red`,
    renderWidth: 100
  }

  async componentWillMount(){
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });
  }

  render() {
    return (

      <Container>
        <Header>
        <Body><Title>DDLedKit</Title></Body>
        </Header>
        <Content bounces={false} scrollEnabled={false}>
          <View style={{flex:0.2}}>
            <Text style={{marginTop:50}}>Select a color!</Text>
            <Text>Color: {this.state.color}</Text>
          </View>
          <View style={{flex: 0.8, alignItems:'center'}} onLayout={
            (event)=> {
              let {x, y, width, height} = event.nativeEvent.layout;
              this.setState({
                renderWidth: width
              });
            }
          }>
            <ColorWheel
              initialColor="#ee0000"
              onColorChange={color => {
                let {h, s, v} = color;
                this.setState({color:`${JSON.stringify(hsv_to_rgb(h, s, v))}`});
              }}
              style={{marginTop:20, width: this.state.renderWidth - this.state.renderWidth * 0.20, height: this.state.renderWidth - this.state.renderWidth * 0.20}}
              thumbStyle={{height: 30, width:30, borderRadius:30}}/>
          </View>
        </Content>
        <Footer>
          <FooterTab>
            <Button vertical>
              <Icon name="ios-color-palette" />
              <Text>Color</Text>
            </Button>
            </FooterTab>
        </Footer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
