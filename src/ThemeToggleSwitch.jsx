
import React, { useState, useContext } from 'react';
import { View, Switch, StyleSheet } from 'react-native';
import { ThemeContext, useTheme } from 'react-native-elements';

const ThemeToggleSwitch = () => {
  const { theme, updateTheme } = useContext(ThemeContext);
  const isThemeDark = theme.type === 'dark';

  const toggleTheme = () => {
    if (isThemeDark) {
 
updateTheme({ type: 'light' });
    } else {
      updateTheme({ type: 'dark' });
    }
  };

  return (
    <View style={styles.container}>
      <Switch
        value={isThemeDark}
        onValueChange={toggleTheme}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginRight: 15,
  },
});

export default ThemeToggleSwitch;