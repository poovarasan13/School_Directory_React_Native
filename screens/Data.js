import { Button } from '@react-native-material/core';
import { FlatList, Text, View, Image } from 'react-native';


const Data = ({ navigation }) => {

    const data = [
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

    const handleView = (item) => {
        navigation.push('Details', { item });
    };

    return (
        <View className="flex-1 bg-black" >
            <Text className="text-3xl font-bold text-white text-center py-4">School Directory</Text>
            
            <FlatList
                data={data}
                contentContainerStyle={{ paddingBottom: 20 }}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View className="bg-white mx-4 my-2 p-6 rounded-lg border border-gray-300">
                        <View className="flex-row items-start">
                            <Image 
                                source={{ uri: `https://mui.com/static/images/avatar/${(item.id) % 7 + 1}.jpg` }} 
                                className="w-20 h-20 rounded-full"
                            />
                            <View className="ml-4 flex-1">
                                <Text className="text-xl font-bold">{item.name}</Text>
                                <Text className="text-lg text-gray-600">{item.role}</Text>
                            </View>
                        </View>
                        <View className="mt-4 self-center w-24">
                            <Button 
                                title="View" 
                                onPress={() => handleView(item)}
                                color="#3b82f6"
                            />
                        </View>
                    </View>
                )}
            />
        </View>
    );
};

export default Data;