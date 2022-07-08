import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../assets/colors/colors';

export const petrolData = [
    {
        id: 1,
        img: require('../../assets/images/petrol_1.png'),
        title: '15 Coins',
        description: '50% discount for every $100 top-up on your Shell Petrol Card',
        color: COLORS.blue
    },
    {
        id: 2,
        img: require('../../assets/images/petrol_2.png'),
        icon: <Icon name='font-download' size={14} color='#696974'/>,
        title: '1,000 Coins',
        description: '70% discount top-up on your Shell Petrol Card',
        coin: 'Insufficient coins',
        color: '#696974'
    },
]

export const rentalData = [
    {
        id: 1,
        img: require('../../assets/images/rental_1.png'),
        title: '20 Coins',
        description: 'Get $20 Rental rebate',
    },
    {
        id: 2,
        img: require('../../assets/images/rental_2.png'),
        title: '15 Coins',
        description: 'Get $500 Rental rebate',
    },
]

export const foodData = [
    {
        id: 1,
        img: require('../../assets/images/food_1.png'),
        title: '25 Coins',
        description: 'NTUC Fairprice $50 Voucher',
    },
    {
        id: 2,
        img: require('../../assets/images/food_2.png'),
        title: '5 Coins',
        description: 'Free Cold Stone Sundae at any flavour!',
    },
]