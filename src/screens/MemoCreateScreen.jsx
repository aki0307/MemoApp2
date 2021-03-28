import React from 'react';
import {
  View, TextInput, StyleSheet,
} from 'react-native';

import Appbar from '../components/AppBar';
import Circlebotton from '../components/CircleButton';
import KeyboardSafeview from '../components/KeyboardSafeView';

export default function MemoCreateScreen() {
  return (
    <KeyboardSafeview style={styles.container}>
      <Appbar />
      <View style={styles.inputContainer}>
        <TextInput value="" multiline style={styles.input} />
      </View>
      <Circlebotton name="check" />
    </KeyboardSafeview>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    paddingHorizontal: 27,
    paddingVertical: 32,
    flex: 1,
  },
  input: {
    flex: 1,
    textAlignVertical: 'top',
    fontSize: 16,
    lineHeight: 24,
  },
});
