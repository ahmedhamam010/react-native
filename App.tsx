import React , { useState }  from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Tab from './Tab';

const App = () => {

  const [activeTab, setActiveTab] = useState(1);
  
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

      <View style={{ flexDirection: 'row' }}>

        <TouchableOpacity onPress={() => setActiveTab(0)}>
          <Text style={[activeTab === 0 ? styles.activeTab : styles.normalTab ]}>About</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setActiveTab(1)}>
          <Text style={[activeTab === 1 ? styles.activeTab : styles.normalTab ]}>Session Reservation</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setActiveTab(2)}>
          <Text style={[activeTab === 2 ? styles.activeTab : styles.normalTab ]}>Rates</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setActiveTab(3)}>
          <Text style={[activeTab === 3 ? styles.activeTab : styles.normalTab ]}>Follow-up Systems</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setActiveTab(4)}>
          <Text style={[activeTab === 4 ? styles.activeTab : styles.normalTab ]}>Courses</Text>
        </TouchableOpacity>

      </View>

      <Tab active={activeTab === 0}>
        {/* Content for Tab 1 */}
        <Text>Tab 1 Content</Text>
      </Tab>

      <Tab active={activeTab === 1}>
        {/* Content for Tab 2 */}
        <Text>Tab 2 sess</Text>
      </Tab>

      <Tab active={activeTab === 2}>
        {/* Content for Tab 2 */}
        <Text>Tab 3 Content</Text>
      </Tab>

      <Tab active={activeTab === 3}>
        {/* Content for Tab 2 */}
        <Text>Tab 3 Content</Text>
      </Tab>

      <Tab active={activeTab === 4}>
        {/* Content for Tab 2 */}
        <Text>Tab 4 Content</Text>
      </Tab>
      
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

  activeTab:{
    fontWeight : 'bold',
    fontSize: 15,
    padding:10,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: '#fdeded',
    borderRadius: 15,
    color: '#fb5456'

  },
  normalTab:{
    fontWeight : 'normal',
    fontSize: 15,
    padding:10,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 15,

  },
});

export default App;
