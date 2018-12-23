import React, { Component } from 'react';

// React Native
import { StyleSheet, Text, View, Alert } from 'react-native';
// Utils
import params from './src/params';
import { 
  createMinedBoard,
  openField,
  hasExplosion,
  wowGame,
  showMines,
  invertFlag,
  cloneBoard,
  flagUsed
}from './src/logic';
// Components
import MineField from './src/components/MineField';
import Header from './src/components/Header';
// Screens
import LevelSelection from './src/screens/LevelSelection';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  board: {
    alignItems: 'center',
    backgroundColor: '#AAA'
  },
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = this.createState();
  }

  render() {
    return (
      <View style={styles.container}>
        <LevelSelection
          isVisible={this.state.showLevelSelection}
          onLevelSelected={this.onLevelSelected}
          onCancel={() => this.setState({ showLevelSelection: false })}
        />
        <Header 
          flagsLeft={this.minesAmount() - flagUsed(this.state.board)} 
          onNewGame={() => this.setState(this.createState())}
          onFlagPress={() => this.setState({ showLevelSelection: true })}
        />
        <View styles={styles.board}>
          <MineField 
            board={this.state.board}
            onOpenField={this.onOpenField}
            onSelectField={this.onSelectField}
          />
        </View>
      </View>
    );
  }

  createState = () => {
    const cols = params.getColumnsAmount();
    const rows = params.getRowsAmount();
    return {
      board: createMinedBoard(rows, cols, this.minesAmount()),
      won: false,
      lost: false,
      showLevelSelection: false
    }
  }
  
  minesAmount = () => {
    const cols = params.getColumnsAmount();
    const rows = params.getRowsAmount();
    return Math.ceil(cols * rows * params.difficultLevel);
  }

  onOpenField = (row, col) => {
    const board = cloneBoard(this.state.board);
    openField(board, row, col);
    const lost = hasExplosion(board);
    const won = wowGame(board);
    if (lost) {
      showMines(board);
      Alert.alert('Perdeeeu!!!', 'Que burro!')
    }
    if (won) {
      Alert.alert('Parabéns!!!', 'Você venceu!')
    }
    this.setState({ board, lost, won });
  }

  onSelectField = (row, col) => {
    const board = cloneBoard(this.state.board);
    invertFlag(board, row, col);
    const won = wowGame(board);
    if (won) {
      Alert.alert('Parabéns!!!', 'Você venceu!')
    }
    this.setState({ board, won });
  }

  onLevelSelected = level => {
    params.difficultLevel = level;
    this.setState(this.createState());
  }

};

export default App;
