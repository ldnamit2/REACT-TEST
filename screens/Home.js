import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../assets/colors/colors';
import Food from './Food';
import Petrol from './Petrol';
import Rental from './Rental';

const Home = () => {

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
          <StatusBar translucent={false} backgroundColor={COLORS.primary}/>
          <View style={style.container}>
            <Icon style={{ borderRadius: 999, backgroundColor: COLORS.white, padding: 5 , textAlign: 'center'  }} name="keyboard-arrow-left" size={33}/>
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View>
              <View style={{ backgroundColor: COLORS.primary, height: 333}}>
                <Text style={ style.title }>Silver Tier</Text>
                <Text style={ style.description }>In Silver Tier, every $1 in rental fee paid, you get 2 coins to redeem exclusive rewards.</Text>
              </View>
              <View style={style.inputContainer}>
                <Text style={style.balance}>Available Coin balance</Text>
                <Text style={style.coin}>340</Text>
                <View style={style.input}/>
                <View style={style.inputAgain}/>
                <Text style={style.paid}>You have paid rental fee for $1,200. Pay more $800 to achieve Gold Tier.</Text>
                <View>
                  <Text style={style.view}>View tier benefits</Text>
                  <Icon name='keyboard-arrow-right' size={33} color={COLORS.blue} 
                    style={{ 
                      position: 'absolute',
                      top: 177,
                      paddingHorizontal: 142,
                      }}
                  />
                </View>
                <View style={style.button}>
                  <Text 
                    style={style.textButton}>
                        My Coupons
                  </Text>
                </View>
                <Text 
                    style={style.txtUpdate}>
                        Updated : 02/11/2021
                </Text>
              </View>
              <Petrol/>
              <Rental/>
              <Food/>
              <Text style={{ marginBottom: 50 }}></Text>
            </View>
          </ScrollView>
        </SafeAreaView>
      );
}

const style = StyleSheet.create({
  container: {
    paddingVertical: 24,
    paddingHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: COLORS.primary,
  },
  title: {
    color: COLORS.white,
    fontWeight: "600",
    fontStyle: 'normal',
    fontSize: 32,
    lineHeight: 40,
    paddingHorizontal: 24,
    fontFamily: '../assets/fonts/.ttf'
  },
  description: {
    color: COLORS.gray,
    fontStyle: 'normal',
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.7,
    marginTop: 10,
    paddingHorizontal: 24,
    fontFamily: '../assets/fonts/hellix.ttf'
  },
  inputContainer: {
    height: 456,
    width: 380,
    backgroundColor: COLORS.white,
    borderRadius: 10,
    position: 'absolute',
    top: 140,
    left: 16,
    elevation: 2,
    shadowColor: COLORS.gray
  },
  balance: {
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 24,
    color: COLORS.gray,
    left: 24,
    top: 28,
    fontFamily: '../assets/fonts/hellix.ttf'
  },
  coin: {
    top: 34,
    left: 24,
    fontSize: 50,
    fontStyle: 'normal',
    fontWeight: '400',
    fontFamily: '../assets/fonts/hellix.ttf'
  },
  input: {
    width: 330,
    height: 5,
    backgroundColor: '#E2E2EA',
    borderRadius: 2.5,
    left: 24,
    position: 'absolute',
    top: 160
  },
  inputAgain: {
    width: 220,
    height: 5,
    backgroundColor: '#0062FF',
    borderRadius: 2.5,
    left: 24,
    position: 'absolute',
    top: 160
  },
  paid: {
    left: 24,
    right: 24,
    top: 205,
    position: 'absolute',
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '400',
    letterSpacing: -0.005,
    width: 277,
    height: 48,
    color: '#92929D',
    fontFamily: '../assets/fonts/hellix.ttf'
  },
  view: {
    fontSize: 16,
    lineHeight: 24,
    fontStyle: 'normal',
    fontWeight: '400',
    color: COLORS.blue,
    paddingHorizontal: 24,
    position: 'absolute',
    top: 183,
    fontFamily: '../assets/fonts/hellix.ttf'
  },
  button: {
    height: 65,
    width: 330,
    backgroundColor: COLORS.primary,
    borderRadius: 4,
    top: 233,
    left: 24
  },
  textButton: {
    paddingHorizontal: 96, 
    paddingVertical: 18, 
    fontSize: 18,
    lineHeight: 24,
    textAlign: 'center',
    color: COLORS.white,
    fontFamily: '../assets/fonts/hellix.ttf'
  },
  txtUpdate: {
    paddingHorizontal: 96, 
    paddingVertical: 18, 
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: -0.5,
    fontWeight: '400',
    textAlign: 'center',
    color: COLORS.gray,
    top: 230,
    fontFamily: '../assets/fonts/hellix.ttf'
  }
});

export default Home;
