import React from 'react';

// React Native
import { StyleSheet, View } from 'react-native';
// Components
import Field from './Field';
// Styles
const styles = StyleSheet.create({
  container: { backgroundColor: '#EEE' },
  row: { flexDirection: 'row' }
});

const MineField = props => {
  const rows  = props.board.map((row, r) => {
    const columns = row.map((field, c) => {
      return (
        <Field 
          key={c} 
          {...field} 
          onOpen={() => props.onOpenField(r, c)} 
          onSelect={() => props.onSelectField(r, c)}
        />
      );
    });
    return <View key={r} style={styles.row}>{columns}</View>
  });

  return (
    <View style={styles.container}>
      {rows}
    </View>
  );
};

export default MineField;