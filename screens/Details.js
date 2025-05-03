import { Text, View, StyleSheet, Image } from 'react-native';

const Details = ({ route }) => {

    const { item } = route.params
    console.log(item);
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.header}>Details</Text>

                <View style={styles.image}>
                    <Image source={{ uri: `https://mui.com/static/images/avatar/${(item.id) % 7 + 1}.jpg` }} style={{ width: 250, height: 150 }} resizeMode='contain' />
                </View>
                <View style={styles.content}>
                    <Text style={styles.subcontent}>
                        <Text style={styles.bold}>Name : </Text>{item.name}</Text>
                    <Text style={styles.subcontent}>
                        <Text style={styles.bold}> Age :</Text> {item.age}</Text>
                    <Text style={styles.subcontent}>
                        <Text style={styles.bold}>Role :</Text> {item.role}</Text>
                    <Text style={styles.subcontent}>
                        <Text style={styles.bold}>Mobile : </Text>{item.mobile}</Text>
                    <Text style={styles.subcontent}>
                        <Text style={styles.bold}>Language : </Text>{item.language}</Text>
                    <Text style={styles.subcontent}>
                        <Text style={styles.bold}>Address : </Text>{item.address}</Text>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        paddingTop: 30,
        alignItems: 'center',
    },
    card: {
        backgroundColor: 'white',
        paddingHorizontal: 60

    },
    content: {

    },
    bold:{
       fontWeight:'bold'
    },
    image: {
        alignSelf: 'center',
    },
    header: {
        fontSize: 30,
        fontWeight: 'bold',
        alignSelf: 'center',
        marginBottom: 15,
    }
    , subcontent: {
        paddingVertical: 10,
        fontSize: 20,
    }
})
export default Details
