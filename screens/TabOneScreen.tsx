import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <View style={style.container}>
      <Icon name="sort" size={28} color="#fff"/>
    </View>
  );
} 

const style = StyleSheet.create({
  container: {
    paddingVertical: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#171725',
  },
});
