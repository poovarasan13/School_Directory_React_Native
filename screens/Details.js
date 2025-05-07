import { Text, View, Image } from 'react-native';


const Details = ({ route }) => {
    const { item } = route.params;
  

    return (
        <View className="flex-1 bg-black" >
            <View className="bg-white mx-4 my-6 p-6 rounded-lg">
                <Text className="text-3xl font-bold text-center mb-4">Details</Text>

                <View className="items-center mb-6">
                    <Image 
                        source={{ uri: `https://mui.com/static/images/avatar/${(item.id) % 7 + 1}.jpg` }} 
                        className="w-64 h-40"
                        resizeMode="contain"
                    />
                </View>

                <View className="space-y-3">
                    <Text className="text-lg">
                        <Text className="font-bold">Name: </Text>{item.name}
                    </Text>
                    <Text className="text-lg">
                        <Text className="font-bold">Age: </Text>{item.age}
                    </Text>
                    <Text className="text-lg">
                        <Text className="font-bold">Role: </Text>{item.role}
                    </Text>
                    <Text className="text-lg">
                        <Text className="font-bold">Mobile: </Text>{item.mobile}
                    </Text>
                    <Text className="text-lg">
                        <Text className="font-bold">Language: </Text>{item.language}
                    </Text>
                    <Text className="text-lg">
                        <Text className="font-bold">Address: </Text>{item.address}
                    </Text>
                </View>
            </View>
        </View>
    );
};

export default Details;