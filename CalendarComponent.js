import React from 'react';
import { StyleSheet, View } from 'react-native';
import WeeklyCalendar from 'react-native-weekly-calendar';

 
export default function App() {
 
 
  return (
    <View style={styles.container}>
      <WeeklyCalendar
        style={{ height: 110 , padding: 10 }}
        themeColor='#fb5456'
        />
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});