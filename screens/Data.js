import { Button } from '@react-native-material/core';
import { FlatList, StyleSheet, Text, View ,Image} from 'react-native';

const Data = ({navigation}) => {
    const data=[
        {id: 1, name: "Alex Carter", role: "Student", age: 18, mobile: "+1 (555) 123-4567", address: "123 Maple St, Boston, USA", language: "English"},
        {id: 2, name: "Bella Thompson", role: "Teacher (Math)", age: 32, mobile: "+1 (555) 234-5678", address: "456 Oak Ave, New York, USA", language: "English, Spanish"},
        {id: 3, name: "Chris Wilson", role: "Principal", age: 45, mobile: "+1 (555) 345-6789", address: "789 Pine Rd, Chicago, USA", language: "English, French"},
        {id: 4, name: "Diana Martinez", role: "Janitor", age: 50, mobile: "+1 (555) 456-7890", address: "101 Elm Lane, Houston, USA", language: "Spanish"},
        {id: 5, name: "Ethan Brown", role: "Bus Driver", age: 38, mobile: "+1 (555) 567-8901", address: "202 Birch Blvd, Miami, USA", language: "English, Creole"},
        {id: 6, name: "Fiona Lee", role: "Teacher (Science)", age: 29, mobile: "+1 (555) 678-9012", address: "303 Cedar Dr, Seattle, USA", language: "English, Mandarin"},
        {id: 7, name: "George Adams", role: "Librarian", age: 42, mobile: "+1 (555) 789-0123", address: "404 Spruce Ct, Denver, USA", language: "English, German"},
        {id: 8, name: "Hannah Kim", role: "Counselor", age: 35, mobile: "+1 (555) 890-1234", address: "505 Redwood Way, Atlanta, USA", language: "English, Korean"},
        {id: 9, name: "Ian Patel", role: "Security Guard", age: 48, mobile: "+1 (555) 901-2345", address: "606 Willow Pl, Dallas, USA", language: "English, Hindi"},
        {id: 10, name: "Julia Garcia", role: "Teacher (Art)", age: 31, mobile: "+1 (555) 012-3456", address: "707 Aspen St, Phoenix, USA", language: "English, Spanish"},
        {id: 11, name: "Kevin Smith", role: "IT Technician", age: 27, mobile: "+1 (555) 112-2334", address: "808 Juniper Rd, San Francisco, USA", language: "English"},
        {id: 12, name: "Lily Johnson", role: "Nurse", age: 40, mobile: "+1 (555) 223-3445", address: "909 Magnolia Ave, Los Angeles, USA", language: "English, Tagalog"},
        {id: 13, name: "Mike Davis", role: "Teacher (History)", age: 37, mobile: "+1 (555) 334-4556", address: "110 Palm Blvd, Philadelphia, USA", language: "English"},
        {id: 14, name: "Nina Rodriguez", role: "Cafeteria Worker", age: 52, mobile: "+1 (555) 445-5667", address: "220 Olive St, San Diego, USA", language: "Spanish"},
        {id: 15, name: "Oscar White", role: "Teacher (PE)", age: 33, mobile: "+1 (555) 556-6778", address: "330 Cypress Ln, Austin, USA", language: "English"},
        {id: 16, name: "Paula Clark", role: "Secretary", age: 44, mobile: "+1 (555) 667-7889", address: "440 Maplewood Dr, Portland, USA", language: "English, Portuguese"},
        {id: 17, name: "Quinn Taylor", role: "Teacher (French)", age: 36, mobile: "+1 (555) 778-8990", address: "550 Chestnut Ave, Las Vegas, USA", language: "English, French"},
        {id: 18, name: "Ryan Evans", role: "Student", age: 17, mobile: "+1 (555) 889-9001", address: "660 Sycamore Rd, Nashville, USA", language: "English"},
        {id: 19, name: "Sara Ali", role: "Maintenance", age: 47, mobile: "+1 (555) 990-0112", address: "770 Poplar St, Orlando, USA", language: "English, Arabic"},
        {id: 20, name: "Tom Nguyen", role: "Substitute Teacher", age: 30, mobile: "+1 (555) 001-1223", address: "880 Cedar Ave, San Antonio, USA", language: "English, Vietnamese"}
    ];
   const handleView=(item)=>{
    // console.log(item);
    console.log("page is enter to detail page")
    navigation.push('Details',{item})
   }
    return (
        <View style={styles.main}>
            <Text style={styles.header}>School Directory</Text>
            <FlatList
                data={data}
                contentContainerStyle={styles.listContent}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) => (
                    <View style={styles.card}>
                        <View style={styles.maincard}>
                        <Image source={{uri:`https://mui.com/static/images/avatar/${(item.id)%7+1}.jpg`}} style={{width:100,height:100}}/>
                        <View  style={styles.subcard}>
                        <Text style={styles.name}>{item.name}</Text>
                        <Text style={styles.detail}> {item.role}</Text>
                        </View>
                        </View>
                        <View style={styles.button}>
                        <Button title='View' onPress={()=>handleView(item)}></Button>
                        </View>
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    button:{
        width:80,
        marginTop: 10,
        alignItems: 'center',
        alignSelf:'center'
    },
      main:{
        paddingTop:20,
        flex:1,
        backgroundColor:'black',
        alignItems:'center'
      },
      header:{
        fontSize:30,
        fontWeight:'bold',
        paddingBottom:15,
        color:'white',
      },
maincard:{
  flexDirection:'row'
},
listContent:{
    // backgroundColor:'#b0e0e6',
},
      card:{
       
        paddingVertical:20,
        borderColor:'grey',
        borderWidth:1,
        marginVertical:10,
        paddingHorizontal:25,
        borderRadius:8,
        backgroundColor:'white',
      }
      ,name:{
       fontWeight:'bold',
       fontSize:25,
       paddingTop:25,

      },
      subcard:{
        flexDirection:'column',
        paddingLeft:10,
      },
      detail:{
         fontSize:20,
      }
      

});

export default Data;