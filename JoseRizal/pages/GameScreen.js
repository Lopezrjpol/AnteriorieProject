import React, { Component } from 'react';
import { ImageBackground, StyleSheet, Text, View, Image, TouchableOpacity, Modal, Button} from 'react-native';

export default class GameScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      message: 'Coins Win:',
      urlBook1: require("./images/book.png"),
      urlBook2: require("./images/book.png"),
      urlBook3: require("./images/book.png"),
      urlBook4: require("./images/book.png"),
      urlBook5: require("./images/book.png"),
      urlBook6: require("./images/book.png"),
      disabled1: false,
      disabled2: false,
      disabled3: false,
      disabled4: false,
      disabled5: false,
      disabled6: false,
      bookCount:0,
      featherCount: 0,
      count: 0,
      coins: 0,
      scoreBoard: false,
    };
    
  }


  getRandomNumber = () => {
    let randomNumber = Math.floor(Math.random() * 9) + 1;
    return randomNumber;
  }

  getImage = (bookRandom) => {
    switch (bookRandom) {
      case 1:
      case 2:
      case 3:
        return require("./images/open.png")
        break;
      case 4:
        return require("./images/book2.png")
        break;
      case 5:
        return require("./images/book2.png")
        break;
        case 6:
        return require("./images/open.png")
        break;
      case 7:
        return require("./images/book2.png")
        break;
      case 8:
        return require("./images/book2.png")
        break;
      case 9:
        return require("./images/open.png")
        break;
      default:
        return require("./images/book2.png")
        break;
    }
  }

  showScore = () => {
    if (this.state.count == 5) {
      setTimeout(() => {
        this.setState({ scoreBoard: true });
      }, 500);
    }
  }

  coinsGained = () => {
    if (this.state.featherCount == 5 && this.state.bookCount == 1 ){
      this.setState({ coins: this.state.coins + 1000});
    } else if (this.state.featherCount == 4 || this.state.bookCount == 2){
      this.setState({ coins: this.state.coins + 500});
    } else if (this.state.featherCount == 3 || this.state.bookCount == 3){
      this.setState({ coins: this.state.coins + 200});
    }  else if (this.state.featherCountCount == 2 || this.state.bookCount == 4){
      this.setState({ coins: this.state.coins + 20});
    } 
}


  playAgain = () => {
    this.setState({
      message: 'Coins Win:',
      urlBook1: require("./images/book.png"),
      urlBook2: require("./images/book.png"),
      urlBook3: require("./images/book.png"),
      urlBook4: require("./images/book.png"),
      urlBook5: require("./images/book.png"),
      urlBook6: require("./images/book.png"),
      disabled1: false,
      disabled2: false,
      disabled3: false,
      disabled4: false,
      disabled5: false,
      disabled6: false,
      bookCount:0,
      featherCount: 0,
      count: 0,
      scoreBoard: false,
    })
    this.coinsGained();
  }


  showBook1 = () => {
    let random1 = this.getRandomNumber();
    
    this.setState({ urlBook1:this.getImage(random1),
                    disabled1: true,
                    count: this.state.count + 1, 
                  });
    this.showScore();
    
    if (random1 === 1 || random1 === 2 || random1 === 3) {
      this.setState({ featherCount: this.state.featherCount + 0})
    } else if (random1 === 4 || random1 === 5) {
      this.setState({ bookCount: this.state.bookCount + 1})
    } else {
      this.setState({ featherCount: this.state.featherCount + 1})
    }
  }

  showBook2 = () => {
    let random2 = this.getRandomNumber();
    this.setState({ urlBook2:this.getImage(random2),
                    disabled2: true,
                    count: this.state.count + 1, 
                 });        
    this.showScore();

    if (random2 === 1 || random2 === 2 || random2 === 3) {
      this.setState({ featherCount: this.state.featherCount + 0})
    } else if (random2 === 4 || random2 === 5) {
      this.setState({ bookCount: this.state.bookCount + 1})
    } else {
      this.setState({ featherCount: this.state.featherCount + 1})
    }
  }

  showBook3 = () => {
    let random3 = this.getRandomNumber();
    this.setState({ urlBook3:this.getImage(random3),
                    disabled3: true,
                    count: this.state.count + 1, 
                });
    this.showScore();
    if (random3 === 1 || random3 === 2 || random3 === 3) {
      this.setState({ featherCount: this.state.featherCount + 0})
    } else if (random3 === 4 || random3 === 5) {
      this.setState({ bookCount: this.state.bookCount + 1})
    } else  {
      this.setState({ featherCount: this.state.featherCount + 1})
    }
  }

  showBook4 = () => {
    let random4 = this.getRandomNumber();
    this.setState({ urlBook4:this.getImage(random4),
                    disabled4: true,
                    count: this.state.count + 1, 
                });
    this.showScore();
    if (random4 === 1 || random4 === 2 || random4 === 3) {
      this.setState({ featherCount: this.state.featherCount + 0})
    } else if (random4 === 4 || random4 === 5) {
      this.setState({ bookCount: this.state.bookCount + 1})
    } else  {
      this.setState({ featherCount: this.state.featherCount + 1})
    }
  }

  showBook5 = () => {
    let random5 = this.getRandomNumber();
    this.setState({ urlBook5:this.getImage(random5),
                    disabled5: true,
                    count: this.state.count + 1, 
                });
    this.showScore();
    if (random5 === 1 || random5 === 2 || random5 === 3) {
      this.setState({ featherCount: this.state.featherCount + 0})
    } else if (random5 === 4 || random5 === 5) {
      this.setState({ bookCount: this.state.bookCount + 1})
    } else  {
      this.setState({ featherCount: this.state.featherCount + 1})
    }
  }

  showBook6 = () => {
    let random6 = this.getRandomNumber();
    this.setState({ urlBook6:this.getImage(random6),
                    disabled6: true,
                    count: this.state.count + 1, 
                 });
    this.showScore();
    if (random6 === 1 || random6 === 2 || random6 === 3) {
      this.setState({ featherCount: this.state.featherCount + 0})
    } else if (random6 === 4 || random6 === 5) {
      this.setState({ bookCount: this.state.bookCount + 1})
    } else {
      this.setState({ featherCount: this.state.featherCount + 1})
    }
  }

  
// -------------------------------------------------------------------------------
  render() {
    const { navigate } = this.props.navigation;
    let totalPoints = 0;
    if (this.state.featherCount == 5  && this.state.bookCount == 1) {
      totalPoints = 1000;
    } else if (this.state.featherCount == 4 || this.state.bookCount == 2) {
      totalPoints = 500;
    } else if (this.state.featherCount == 3 || this.state.bookCount == 3) {
      totalPoints = 200;
    } else if (this.state.featherCount == 2 || this.state.bookCount ==  4) {
      totalPoints = 20;
    } else {
      totalPoints = totalPoints;
    }
      return (
        
        <ImageBackground source={require("./images/bg5.jpg")} style={styles.backgroundImage}>
         
         <View style={styles.topRightScore}>
           <Image style={styles.coinImage} source={require('./images/coin1.webp')}></Image>
           <Text style={styles.topRightScoreText}> {this.state.coins} </Text>
         </View>


          <View style={styles.container}>

            <Modal transparent = {true} visible = {this.state.scoreBoard} >
            
              <View style = {styles.modalContainer}>
              <ImageBackground source={require("./images/victory.png")} style={styles.backgroundImage} >
                  <View>
                      <Text style={styles.topText}>{this.state.message} {totalPoints}</Text>
                    
                          <TouchableOpacity onPress={() =>navigate('HomeScreen')}>
                          <Image source={require('./images/close.png')} style={styles.exitButton}></Image>
                          </TouchableOpacity>
                          </View>
                  </ImageBackground>
              </View>
              
            </Modal>


          <View style= {styles.boxesRow}>
            <View style= {styles.boxesSpace}>
              <TouchableOpacity disabled={this.state.disabled1} onPress={this.showBook1}>
                <Image style={styles.boxesImage} source={this.state.urlBook1}/>
              </TouchableOpacity>
            </View>
            
            <View style= {styles.boxesSpace}>
              <TouchableOpacity disabled={this.state.disabled4} onPress={this.showBook4}>
                <Image style={styles.boxesImage} source={this.state.urlBook4}/>
              </TouchableOpacity>
            </View>
          </View>


          <View style= {styles.boxesRow}>
            <View style= {styles.boxesSpace}>
              <TouchableOpacity disabled={this.state.disabled2} onPress={this.showBook2}>
                <Image style={styles.boxesImage} source={this.state.urlBook2}/>
              </TouchableOpacity>
            </View>

            <View style= {styles.boxesSpace}>
              <TouchableOpacity disabled={this.state.disabled5} onPress={this.showBook5}>
                <Image style={styles.boxesImage} source={this.state.urlBook5}/>
              </TouchableOpacity>
            </View>
          </View>


          <View style= {styles.boxesRow}>
            <View style= {styles.boxesSpace}>
              <TouchableOpacity disabled={this.state.disabled3} onPress={this.showBook3}>
                <Image style={styles.boxesImage} source={this.state.urlBook3}/>
              </TouchableOpacity>
            </View>

            <View style= {styles.boxesSpace}>
              <TouchableOpacity disabled={this.state.disabled6} onPress={this.showBook6}>
                <Image style={styles.boxesImage} source={this.state.urlBook6}/>
              </TouchableOpacity>
            </View>
          </View>
          
          </View>
        </ImageBackground>
      );
    }
  }

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  
  },
  modalContainer: {
    backgroundColor: "#000000aa", 
    flex: 1,
    paddingVertical: 100,
  },
  boxesRow: {
    flexDirection: 'row',
    
  },
  boxesSpace: {
    padding: 15,
  },
  boxesImage: {
    width: 160, 
    height: 160,
  },
  playButton: {
    marginTop: 30,
    fontSize: 22,
    fontWeight: 'bold',
    backgroundColor: 'white',
    color: 'black',
    textAlign: 'center',
    borderRadius: 20,
    paddingHorizontal: 25,
    paddingVertical: 10,
  },
  exitButton: {
    marginTop: 130,
    width: 30,
    height: 40,
    alignSelf: 'center',
    paddingHorizontal: 25,
    paddingVertical: 10,
  },
  topText: {
    textAlign: "center",
    color: 'black',
    fontWeight: 'bold',
    marginTop: 150,
    marginBottom: 5,
    fontSize: 20,
    fontWeight: 'bold',
  },
  closeText: {
    backgroundColor: "red",
    borderRadius: 30,
    width: 40,
    padding: 10,
    marginLeft: 235,
    textAlign: 'center',
    color: "white",
   },
   topRightScore: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
    paddingHorizontal: 5,
   },
   topRightScoreText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
   },
   coinImage: {
     marginTop: 4,
     width: 20,
     height: 20,
   }
});



