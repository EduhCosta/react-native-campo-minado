import React from 'react';
import PropTypes from 'prop-types';

// React Native Components
import { StyleSheet, View, Text, TouchableWithoutFeedback } from 'react-native';
// Constants
import params from './../params';
// Container Components
import Mine from './Mines';
import Flag from './Flag';

const styles = StyleSheet.create({
    field: {
        height: params.blockSize,
        width: params.blockSize,
        borderWidth: params.borderSize
    },
    regular: {
        backgroundColor: '#999999',
        borderLeftColor: '#CCCCCC',
        borderTopColor: '#CCCCCC',
        borderRightColor: '#333333',
        borderBottomColor: '#333333',
    },
    opened: {
        backgroundColor: '#999999',
        borderColor: '#777777',
        alignItems: 'center',
        justifyContent: 'center'
    },
    label: {
        fontWeight: 'bold',
        fontSize: params.fontSize
    },
    exploded: {
        backgroundColor: 'red',
        borderColor: 'red'
    }
});

const Field = ({ onOpen, onSelect, mined, opened, nearMines, exploded, flagged }) => {
    const styleField = [styles.field];
    if (opened) styleField.push(styles.opened);
    if (!opened && !exploded) styleField.push(styles.regular);
    if (exploded) styleField.push(styles.exploded);
    if (flagged) styleField.push(styles.flagged);
    if (styleField.length === 1) styleField.push(styles.regular);

    let color = null;
    if (nearMines > 0) {
        if (nearMines == 1) color = '#2A28D7';
        if (nearMines == 2) color = '#2B520F';
        if (nearMines > 2 && nearMines < 6) color = '#F9F60A';
        if (nearMines >= 6) color = '#F221A9';
    }

    return (
        <TouchableWithoutFeedback onPress={onOpen} onLongPress={onSelect}>
            <View style={styleField}>
                {!mined && opened && nearMines > 0 ? 
                    <Text style={ [styles.label, { color: color }] }>
                        {nearMines}
                    </Text> :
                    false }
                {mined && opened ? <Mine /> : false}
                {flagged && !opened ? <Flag /> : false}
            </View>
        </TouchableWithoutFeedback>
    );
};

Field.propTypes = {
    
};

export default Field;