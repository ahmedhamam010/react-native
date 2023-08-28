import React from 'react';
import { StyleSheet, View , Image , Text , FlatList ,Dimensions } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'; 

export default function SlotsList() {
  const slots = [
    { id: 1 , time : '07:00' , price : '100' , duration : '60' },
    { id: 2 , time : '08:00' , price : '90' , duration : '80' },
    { id: 3 , time : '09:00' , price : '80' , duration : '40' },
    { id: 4 , time : '09:00' , price : '80' , duration : '40' },
    { id: 5 , time : '09:00' , price : '80' , duration : '40' },
    { id: 6 , time : '09:00' , price : '80' , duration : '40' },
  ]
 
  return (
    <View style={styles.allSlots}>

          <FlatList
          
          data={slots}
          keyExtractor={ (item) => item.id }     //has to be unique   
          renderItem={ ({item}) => (
          <View  style={styles.slotContainer}>
            <View style={styles.addSession}>
              <View>
                <Text style={{ textAlign: 'center' }}>+</Text>
                <Text style={{ textAlign: 'center' }}>Add</Text>
                <Text style={{ textAlign: 'center' }}>Session</Text>
              </View>
            </View>
            
            <View style={{ flex : 1 }}>
              
              <View>
                <Text style={{ textAlign : 'center' }}>07:00 Am</Text>
                <View style={[styles.slotDetails]}>
                <Text>100 USD</Text>
                <Text>
                  <View style={styles.dFlex}>
                  <Image source={require('./clock.png')}  style={styles.image} />
                  <Text>60 min</Text>
                  </View>
                </Text>
                
              </View>
              </View>

            
            </View>      
          </View>

          ) }
          
          numColumns={2}
          />
      
        
      
    </View>  
  );
}
 
const styles = StyleSheet.create({
  dFlex:{
    flexDirection: 'row',
  },
  allSlots:{
    
  },
  slotContainer: {
    width: Dimensions.get('window').width / 2,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 20,
    paddingBottom: 0,
    paddingRight:5,
    backgroundColor: '#fff',
    borderColor: '#fb5456',
    borderStyle: 'solid',
    borderWidth: 2,
    borderRadius: 15,
  },
  addSession:{
    backgroundColor : '#fceded',
    borderTopLeftRadius: 15,
    borderBottomLeftRadius:15,
    padding: 10
  },
  slotDetails: {
    fontSize: 19,
    fontWeight: 'bold',
    flexDirection: 'row',
    justifyContent: 'space-between',
   
    
    
  },
  image:{
    width: 30,
    height: 30,
    borderRadius: 50,
  },
  

});