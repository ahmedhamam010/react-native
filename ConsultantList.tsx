import React from 'react';
import { View, Text, StyleSheet, Image,  SafeAreaView, ScrollView } from 'react-native';

function ConsultantList(): JSX.Element {
  const courses = [
  { id: 1, title: 'Introduction to React', rate: '2', type: '1', price: '$20' },
  { id: 2, title: 'Advanced JavaScript', rate: '3', type: '0', price: '$20' },
  { id: 3, title: 'React Native Basics', rate: '4', type: '1', price: '$20' },
  { id: 4, title: 'React Native Basics', rate: '5', type: '0', price: '$20' },
];
  return (
    <View style={styles.body}>
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
        >
        <View style={styles.container}> 
              {courses.map(course => (
              <View key={course.id} style={styles.courseContainer}>
                <Text 
                
                
                style={[styles.type, course.type == '1' ?
                        styles.red :
                        styles.blue ]}
                >{course.type == '1' ? 'Live' : 'Recorded'}</Text>
                <Image source={require('./course.png')}  style={styles.image} />
                <View>
                <Text style={styles.price}>{course.price}</Text>
                <Text style={styles.title}>{course.title}</Text>
                <Text style={styles.rate}>{course.rate} rate</Text>
                </View>
              </View>
            
          ))}
        </View>
        </ScrollView>
      </SafeAreaView>
      
    </View>
    
  );
};

const styles = StyleSheet.create({
  body:{
    backgroundColor: '#f5f7fa',
  },
  container: {
    flex: 1,
    marginTop:20,
    padding: 10,
  
  },
  courseContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    paddingTop: 50,
    paddingBottom: 40,
    paddingRight:20,
    paddingLeft:20,
    backgroundColor: '#fff',
    borderRadius: 15,
  },
  type:{
    position: 'absolute',
    top: 0,
    right:0,
    fontSize: 18,
    paddingLeft:20,
    paddingRight:20,
    paddingTop:5,
    paddingBottom:5,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    color:'#fff',
    fontWeight:'500'
  },
  red:{
    backgroundColor: 'red',
  },
  blue:{
    backgroundColor: '#07b2bd',
  },
  image:{
    width: 100,
    height: 80,
    marginRight:15,
    borderRadius: 10,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    backgroundColor:'#07b2bd',
    color:'#fff',
    alignSelf:'flex-start',
    paddingTop:5,
    paddingBottom:5,
    paddingLeft:10,
    paddingRight:10,
    borderRadius:5,
    marginBottom:10
  },
  title: {
    fontSize: 19,
    fontWeight: 'bold',
  },
  rate: {
    fontSize: 17,
    color: '#666',
  },
});

export default ConsultantList;
