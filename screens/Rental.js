import { Dimensions, FlatList, Image, ImageBackground, Text, View } from 'react-native';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../assets/colors/colors';
import { rentalData } from '../components/database/Database';

const {width} = Dimensions.get('screen'); 

export default function Rental() {
  const Card = ({rentalData}) => {
    return (
      <View style={style.cardImage}>
        <Image style={{ marginLeft: -1, height: 102 }} source={rentalData.img}/>
        <View style={{ left: 16, top: 20, }}>
          <Text style={{ 
            position: 'absolute',
            fontStyle: 'normal',
            fontSize: 16,
            lineHeight: 24,
            fontWeight: '600',
            color: COLORS.blue }}>
              {rentalData.title}
          </Text>
        </View>
        <Text style={style.description}>{rentalData.description}</Text>
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
          data={rentalData} 
          renderItem={({ item }) => <Card rentalData={item}/>} />
      </View>
      <Text style={style.title}>Petrol</Text>
    </View>
  );
}

const style = StyleSheet.create({
  cardImage: {
    width: 210,
    height: 380,
    marginRight: 25,
    overflow: 'hidden',
    borderRadius: 4,
    top: 115,
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
    top: 65,
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
    letterSpacing: -0.005,
    fontFamily: '../assets/fonts/hellix.ttf'
  }
});
