import React, { useReducer } from 'react';
import { SafeAreaView, StyleSheet, View, Text, TouchableOpacity } from 'react-native';

// Initial state
const initialState = {
  currentValue: '0',
  operator: null,
  previousValue: null
};

// Action types
const actionTypes = {
  PRESS_NUMBER: 'PRESS_NUMBER',
  PRESS_OPERATOR: 'PRESS_OPERATOR',
  PRESS_CLEAR: 'PRESS_CLEAR',
  PRESS_EQUAL: 'PRESS_EQUAL'
};

// Reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.PRESS_NUMBER:
      return {
        ...state,
        currentValue: state.currentValue === '0' ? action.payload : state.currentValue + action.payload
      };
    case actionTypes.PRESS_OPERATOR:
      return {
        ...state,
        operator: action.payload,
        previousValue: state.currentValue,
        currentValue: '0'
      };
    case actionTypes.PRESS_CLEAR:
      return initialState;
    case actionTypes.PRESS_EQUAL:
      if (state.operator && state.previousValue !== null) {
        const current = parseFloat(state.currentValue);
        const previous = parseFloat(state.previousValue);
        let result = 0;
        switch (state.operator) {
          case '+':
            result = previous + current;
            break;
          case '-':
            result = previous - current;
            break;
          case '*':
            result = previous * current;
            break;
          case '/':
            result = previous / current;
            break;
          default:
            return state;
        }
        return {
          ...state,
          currentValue: String(result),
          operator: null,
          previousValue: null
        };
      }
      return state;
    default:
      return state;
  }
};

// Main Calculator Component
const Calculator = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleNumberPress = (number) => {
    dispatch({ type: actionTypes.PRESS_NUMBER, payload: number });
  };

  const handleOperatorPress = (operator) => {
    dispatch({ type: actionTypes.PRESS_OPERATOR, payload: operator });
  };

  const handleClearPress = () => {
    dispatch({ type: actionTypes.PRESS_CLEAR });
  };

  const handleEqualPress = () => {
    dispatch({ type: actionTypes.PRESS_EQUAL });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.display}>
        <Text style={styles.displayText}>{state.currentValue}</Text>
      </View>
      <View style={styles.buttonRow}>
        <Button text="7" onPress={() => handleNumberPress('7')} />
        <Button text="8" onPress={() => handleNumberPress('8')} />
        <Button text="9" onPress={() => handleNumberPress('9')} />
        <Button text="/" onPress={() => handleOperatorPress('/')} />
      </View>
      <View style={styles.buttonRow}>
        <Button text="4" onPress={() => handleNumberPress('4')} />
        <Button text="5" onPress={() => handleNumberPress('5')} />
        <Button text="6" onPress={() => handleNumberPress('6')} />
        <Button text="*" onPress={() => handleOperatorPress('*')} />
      </View>
      <View style={styles.buttonRow}>
        <Button text="1" onPress={() => handleNumberPress('1')} />
        <Button text="2" onPress={() => handleNumberPress('2')} />
        <Button text="3" onPress={() => handleNumberPress('3')} />
        <Button text="-" onPress={() => handleOperatorPress('-')} />
      </View>
      <View style={styles.buttonRow}>
        <Button text="C" onPress={handleClearPress} />
        <Button text="0" onPress={() => handleNumberPress('0')} />
        <Button text="=" onPress={handleEqualPress} />
        <Button text="+" onPress={() => handleOperatorPress('+')} />
      </View>
    </SafeAreaView>
  );
};

// Button Component
const Button = ({ text, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#f5f5f5'
  },
  display: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: '#222',
    padding: 20
  },
  displayText: {
    fontSize: 48,
    color: 'white',
    textAlign: 'right'
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  button: {
    flex: 1,
    margin: 10,
    backgroundColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
    borderRadius: 10
  },
  buttonText: {
    fontSize: 24,
    color: 'white'
  }
});

export default Calculator;
