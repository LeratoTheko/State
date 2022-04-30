import { StyleSheet, Text, View, Image} from 'react-native';
import { useState } from 'react';
import Contact from './Items';
import { AntDesign, Ionicons} from '@expo/vector-icons';

export default function App() {

  const [totalPrice, setTotalprice] = useState(0);

  return (
    <View style={styles.container}>
      <View style = {{flexDirection: 'row', marginBottom: 5, marginTop: 10}}>

        <View style = {{marginLeft: 20, marginRight: 27 }}>
          <AntDesign name="home" size={24} color="seagreen" />
        </View>

        <View style = {{marginLeft: 20, marginRight: 27}}>
          <Ionicons name="search-sharp" size={24} color="seagreen" />
        </View>

        <View style = {{marginLeft: 20, marginRight: 27}}>
          <AntDesign name="staro" size={24} color="seagreen" />
        </View>

        <View style = {{marginLeft :20, marginRight: 27}}>
          <AntDesign name="shoppingcart" size={24} color="#76FF03" />
        </View>

        <View style = {{marginLeft: 20, marginRight: 27}}>
          <Ionicons name="fast-food-outline" size={24} color="seagreen" />
        </View>

      </View>
      
      <View style = {{marginLeft: 10, justifyContent: 'center'}}>
        <Text style = {{fontSize: 25, fontFamily: 'cooper black', color: '#D500F9', marginTop: 10 , marginBottom: 10}}>Wings Cafe Food Ordering</Text>
      </View>


        <Text style = {{fontSize: 24, color: '#283593', marginTop:'15', marginBottom: 10, marginLeft: 60}}>The total price is M {totalPrice}.00 </Text>
      
      <View>
        <Text style = {{color: '#D500F9', marginLeft: 20, fontSize: 20, fontWeight: 'normal', fontFamily: 'lucida fax'}}>🍞Breakfast☕</Text>
      </View>

      
      <View>
        <Contact  picture={require('./assets/hot.png')} name= "🌭Hotdog" totalPrice = {totalPrice} setTotalprice = {setTotalprice} />
      </View>

          
      <View>
        <Contact  picture={require('./assets/Fried_Chicken.png')} name= "🍗Fried Chicken" totalPrice = {totalPrice} setTotalprice = {setTotalprice} />
      </View>

      <View>
        <Contact  picture={require('./assets/bread.jpg')} name= "🍞Bread" totalPrice = {totalPrice} setTotalprice = {setTotalprice} />
      </View>

      <View>
        <Contact  picture={require('./assets/coffee.png')} name= "☕Jacobs" totalPrice = {totalPrice} setTotalprice = {setTotalprice} />
      </View>
      
      <View>
        <Contact  picture={require('./assets/sandwich.png')} name= "🍔Sandwich" totalPrice = {totalPrice} setTotalprice = {setTotalprice} />
      </View>


        <Text style = {{color: '#D500F9', marginLeft: 20, fontSize: 20, fontWeight: 'normal', fontFamily: 'lucida fax'}} >🍗Lunch🌭</Text>

        <View>
        <Contact  picture={require('./assets/break.png')} name= "Rice and Russians" totalPrice = {totalPrice} setTotalprice = {setTotalprice} />
      </View>
        
        <View>
            <Contact  picture={require('./assets/snack.png')} name= "🌯Sweets" totalPrice = {totalPrice} setTotalprice = {setTotalprice} />
          </View>

        <Text style = {{color: '#D500F9', marginLeft: 20, fontSize: 20, fontWeight: 'normal', fontFamily: 'lucida fax'}}>🍹Drinks🍾</Text>

        <View>
        <Contact  picture={require('./assets/drink.png')} name= "🍗Fried Chicken" totalPrice = {totalPrice} setTotalprice = {setTotalprice} />
      </View>

      <Text style = {{color: '#D500F9', marginLeft: 20, fontSize: 20, fontWeight: 'normal', fontFamily: 'lucida fax'}}>🍦Juices🍧</Text>
      <View>
        <Contact  picture={require('./assets/drnk.png')} name= "🍹Diet Pepsi" totalPrice = {totalPrice} setTotalprice = {setTotalprice} />
      </View>

        <Text style = {{color: '#D500F9', marginLeft: 20, fontSize: 20, fontWeight: 'normal', fontFamily: 'lucida fax'}}>🍦Snacks🍧</Text>  

        <Text style = {{color: '#D500F9', marginLeft: 20, fontSize: 20, fontWeight: 'noraml', fontFamily: 'lucida fax'}}>🍓Fruits🍇</Text>
          <View>
            <Contact  picture={require('./assets/peach.png')} name= "🍑Peaches" totalPrice = {totalPrice} setTotalprice = {setTotalprice} />
          </View>

          <View>
            <Contact  picture={require('./assets/grape.png')} name= "🍇Grape" totalPrice = {totalPrice} setTotalprice = {setTotalprice} />
          </View>

          <View>
            <Contact  picture={require('./assets/banana.png')} name= "🍌Bananas" totalPrice = {totalPrice} setTotalprice = {setTotalprice} />
          </View>

        <Text style = {{color: '#D500F9', marginLeft: 20, fontSize: 20, fontWeight: 'noraml', fontFamily: 'lucida fax'}}>🍓Tea🍇</Text>
          <View>
            <Contact  picture={require('./assets/tea.png')} name= "🍵Freshpack" totalPrice = {totalPrice} setTotalprice = {setTotalprice} />
          </View>

        <Text style = {{color: '#D500F9', marginLeft: 20, fontSize: 20, fontWeight: 'noraml', fontFamily: 'lucida fax'}}>🍓Dessert🍇</Text>
          <View>
            <Contact  picture={require('./assets/cream.png')} name= "🍦Ice Cream" totalPrice = {totalPrice} setTotalprice = {setTotalprice} />
          </View>

          <View>
            <Contact  picture={require('./assets/welch.png')} name= "🍕Welchs" totalPrice = {totalPrice} setTotalprice = {setTotalprice} />
          </View>

          <View>
            <Contact  picture={require('./assets/snack.png')} name= "🌯Sweets" totalPrice = {totalPrice} setTotalprice = {setTotalprice} />
          </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#4DD0E1',
    justifyContent: 'center',
  },
});
