import React from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

const App = () => {
  
  return (
    <View style={styles.body}>
      <View  style={styles.consultantContainer}>
        <View style={styles.avatarContainer}>
          <Image source={require('./course.png')}  style={styles.image} />
          <View><Text style={[styles.name]} >Amire</Text></View>
        </View>
        
        <View>
          
          <View style={[styles.title,styles.contact]}>
            <Text style={{ color : '#fff' , fontSize: 19 }}>Contact now</Text>
            <Feather
            name="message-circle"
            style={{ 
              fontSize: 22,
              marginHorizontal: 10,
              color : '#fff',
            }}
          />
          </View>

          <View style={[styles.title,styles.request]}>
            <Text style={{ color : '#fff' , fontSize: 19 }}>Request Private Session</Text>
            <Feather
              name="file-text"
              style={{
                fontSize: 22,
                marginHorizontal: 10,
                color : '#fff',
              }}
            />
            
          </View>


        </View>      
      </View>
      
    </View>

    
    
  );
};

const styles = StyleSheet.create({
  body:{
    
  },
  consultantContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    paddingTop: 50,
    paddingBottom: 0,
    paddingRight:20,
    paddingLeft:20,
    backgroundColor: '#fff',
    borderRadius: 15,
  },
  avatarContainer:{
    marginRight: 10
  },
  image:{
    width: 80,
    height: 80,
    borderRadius: 50,
  },
  name:{
    textAlign: 'center',
    marginTop: 5,
    fontSize:20,
    fontWeight:'bold'
  },
  title: {
    fontSize: 19,
    fontWeight: 'bold',
    flexDirection: 'row',
    justifyContent: 'space-between',
    
  },
  contact:{
    backgroundColor: '#07b2bd',
    borderRadius: 15,
    paddingLeft:15,
    paddingRight:10,
    paddingBottom:5,
    paddingTop:5,
    color:'#fff',
    marginBottom:5, 
  },

  request:{
    backgroundColor: '#fb5456',
    borderRadius: 15,
    paddingLeft:20,
    paddingRight:10,
    paddingBottom:5,
    paddingTop:5,
    color:'#fff',
    
  },
});

export default App;
