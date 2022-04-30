import { StyleSheet, Text, View, Image, Button } from "react-native";
import { useState } from "react";
import { ScrollView } from "react-native-web";

export default function Items({name, totalPrice, setTotalprice, picture}) {
    const [price, setPrice] = useState(0);

    function lunch(){
        setPrice(price + 25)
        setTotalprice(totalPrice + 25);
    }

    function OrderCancelling(){
        setPrice(price - 25)
        setTotalprice(totalPrice - 25);
    }

    return(
        <ScrollView>
            <View style = {styles.Contact}>
                <View style = {styles.Image}/>
                <Image style = {styles.Image} source = {picture}/>
                    
                <View style = {styles.Details}>
                    <Text style = {{color: '#18FFFF', fontSize: 20, fontWeight: 'bold'}}> {name} </Text>
                    <Text> M {price}.00</Text>

                    <View style = {{marginBottom: 5, marginTop: 5}}>
                        <Button title="Make Order" onPress={lunch}/>
                    </View>
                    
                    <Button title="Cancel Order" onPress={OrderCancelling} />
                </View>

            </View>
        </ScrollView>

    )
}
const styles = StyleSheet.create({
    Contact: {
        margin: 20,
        padding: 10,
        flexDirection: 'column',
        borderWidth: 1,
        borderColor: '#999',
        borderRadius: 10,
    },

    Details:{
        flexDirection: 'column',
        marginLeft: 20,
        marginRight: 20,
    },

    Image: {
        height: 110,
        width: 180,
        borderRadius: 15,
    }

})