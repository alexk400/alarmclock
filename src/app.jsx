/*import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text>Welcome to React Native with Vite!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
*/
//import { Platform } from 'react-native';
import React,{useState} from 'react';
import { ThemeProvider } from 'react-native-elements';
import ThemeToggleSwitch from './ThemeToggleSwitch';


import {
  //SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Button,
  useColorScheme,
  View,
} from 'react-native';


import { SafeAreaView } from 'react-native-safe-area-context'
import { SafeAreaProvider } from 'react-native-safe-area-context';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


/*
const {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} = Platform.OS === 'web' ? { Header: null, LearnMoreLinks: null, ReloadInstructions: null,DebugInstructions:null, Colors:null }  : require('react-native/Libraries/NewAppScreen');
*/



function Section({children, title,color, theme}) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor:color,margin:5 }}>
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: theme.color,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: theme.backgroundColor,
          },
        ]}>
        {children}
      </Text>
    </View>
    </SafeAreaView>
   
  );
}

function LinkSection({title,color, theme}) {
  return (
    <SafeAreaView style={{ backgroundColor:color,margin:2}}>
    <View style={styles.sectionDescription}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: theme.backgroundColor,
          },
        ]}>
        {title}
      </Text>
    </View>
    </SafeAreaView>
  );
}

function App(){




  const lightTheme = {
    type: 'light',
    backgroundColor: '#ddd',
    color:"#000",
    primaryTextColor: '#000',
    secondaryTextColor: '#fff',
    content: '#783',
    opacity:1
  };

  const darkTheme = {
    type: 'dark',
    backgroundColor: '#000',
    color: '#fff',
    primaryTextColor: '#fff',
    secondaryTextColor: '#000',
    content: '#f43',
    opacity:100
  };

  const [useDark, setUseDark] = useState(false);
  const theme = useDark ? darkTheme : lightTheme;
  const inversetheme = useDark ?  lightTheme: darkTheme;

  return (
    
<SafeAreaProvider>
  <SafeAreaView style={{ flex: 1}}>
  
  <ThemeProvider useDark={false} theme={theme} >
      <SafeAreaView style={{ flex: 1, backgroundColor: theme.backgroundColor }}>
      <View style={{ flex: 1 }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: theme.backgroundColor }}>
          <Text style={{ color: theme.color }}>Hello, Theme!</Text>
          <Button title="Toggle Theme" onPress={() => setUseDark(!useDark)} />
        </View>
      </View>
      </SafeAreaView>

      <StatusBar
        barStyle={theme.content}
        backgroundColor={inversetheme.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={{ flex:1,backgroundColor: 'green'}} >
        <View style={{ flex:1,margin:10}}>
            <Header    />
        </View>
        <View
          style={{
            backgroundColor:theme.backgroundColor,
          }}>
               <View
          style={{
            opacity:theme.opacity
          }}>
          <Section title="Step One" color="orange" theme={theme}>
            Edit <Text style={styles.highlight}>App.tsx</Text> to change this
            screen and then come back to see your edits 13.
          </Section>
          <Section title="See Your Changes"  color="orange" theme={theme}>
            <ReloadInstructions />
          </Section>
          <Section title="Debug"  color="orange" theme={theme}>
            <DebugInstructions />
          </Section>
          <Section title="Learn More"  color="orange" theme={theme}>
            Read the docs to discover what to do next:
          </Section>
           <LinkSection title={ <LearnMoreLinks />}  theme={inversetheme} />
          </View>
        </View>
      </ScrollView>
      </ThemeProvider>

    </SafeAreaView>
    </SafeAreaProvider>
    



  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
    opacity:.95
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
