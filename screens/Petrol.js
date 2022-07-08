import { Dimensions, FlatList, Image, ImageBackground, Text, View } from 'react-native';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../assets/colors/colors';
import { petrolData } from '../components/database/Database';

const {width} = Dimensions.get('screen'); 

export default function Petrol() {
  const Card = ({petrolData}) => {
    return (
      <View style={style.cardImage}>
        <Image style={{ marginLeft: -1, height: 102 }} source={petrolData.img}/>
        <View style={{ left: 16, top: 20, }}>
          <Text style={{ 
            position: 'absolute',
            fontStyle: 'normal',
            fontSize: 16,
            lineHeight: 24,
            fontWeight: '600',
            color: petrolData.color }}>
              {petrolData.icon}
              {petrolData.title}
          </Text>
        </View>
        <Text style={style.description}>{petrolData.description}</Text>
        <View style={{ left: 16, top: 110, }}>
          <Text style={{ 
            position: 'absolute',
            fontStyle: 'normal',
            fontSize: 14,
            lineHeight: 20,
            fontWeight: '400',
            letterSpacing: -0.5,
            color: COLORS.blue }}>
              {petrolData.coin}
          </Text>
        </View>
      </View>
    )
  };

  return (
    <View>
      <View>
        <FlatList 
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingLeft: 20 }}
          horizontal
          data={petrolData} 
          renderItem={({ item }) => <Card petrolData={item}/>} />
      </View>
      <Text style={style.title}>Petrol</Text>
    </View>
  );
}

const style = StyleSheet.create({
  title: {
    position: 'absolute',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 24,
    color: COLORS.grey,
    top: 290,
    paddingHorizontal: 24,
    fontFamily: '../assets/fonts/hellix.ttf'
  },
  cardImage: {
    width: 210,
    height: 588,
    marginRight: 25,
    overflow: 'hidden',
    borderRadius: 4,
    top: 344,
    backgroundColor: COLORS.white,
    borderColor: COLORS.gray,
    borderWidth: 0.1,
  },
  title: {
    position: 'absolute',
    fontStyle: 'normal',
    fontSize: 18,
    lineHeight: 24,
    fontWeight: '600',
    top: 290,
    left: 24,
    color: COLORS.black,
    fontFamily: '../assets/fonts/hellix.ttf'
  },
  description: {
    position: 'absolute',
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '400',
    top: 154,
    left: 16,
    color: '#92929D',
    width: 168,
    letterSpacing: -0.5,
    fontFamily: '../assets/fonts/hellix.ttf'
  }
});
