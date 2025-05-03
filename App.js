import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Data from './screens/Data';
import { NavigationContainer } from '@react-navigation/native';
import ScreenStack from './routes/ScreenStack';

export default function App() {
  return (
   <>
   <NavigationContainer>
     <ScreenStack></ScreenStack>
   </NavigationContainer>
      <StatusBar style="auto" />
      </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
  },
});