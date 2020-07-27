import React, { ReactNode } from 'react';
import { View, Text, StyleSheet, Image, Alert } from 'react-native';
import HomeIcon from '../svg/HomeIcon';
import BasketIcon from '../svg/BasketIcon';
import BagIcon from '../svg/BagIcon';
import FavoritesIcon from '../svg/FavoritesIcon';
import ProfileIcon from '../svg/ProfileIcon';
import { NavigationContainer, StackNavigationState } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { StackNavigationProp } from '@react-navigation/stack';
import  {SignUp} from '../views/SignUp';
import  {LogIn} from '../views/LogIn';

interface NavigationTabProps {
    title: string;
    activeTitle: boolean;
    icon: ReactNode;
}

const NavigationTab: React.FC<NavigationTabProps> = ({ title, activeTitle, icon }) => {
    return (
        <View style={tabStyle.container} >
            {icon}
            <Text style={[tabStyle.text, activeTitle ? tabStyle.textActive : tabStyle.textInactive]} >{title}</Text>
        </View>
    )
}

// const Tab = createBottomTabNavigator();

export const BottomNavigationBar: React.FC = () => {
    return (
        <View style={style.container}>
            <NavigationTab title="Home" activeTitle={false} icon={<HomeIcon />} />
            <NavigationTab title="Shop" activeTitle={true} icon={<BasketIcon />} />
            <NavigationTab title="Bag" activeTitle={false} icon={<BagIcon />} />
            <NavigationTab title="Favorites" activeTitle={false} icon={<FavoritesIcon />} />
            <NavigationTab title="Profile" activeTitle={false} icon={<ProfileIcon />} />
        </View>
    )
};

const tabStyle = StyleSheet.create({
    container: { //navigacijas teksta konteiners
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        alignSelf: 'center',
        fontSize: 10,
        lineHeight: 20,
    },
    textActive: {
        color: '#EF3651'
    },
    textInactive: {
        color: '#ABB4BD'
    }
})

const style = StyleSheet.create({ //viss lielais konteiners
    container: {
        flexDirection: 'row',
        justifyContent: "space-around",
        backgroundColor: '#1E1F28',
        height: 100,
        paddingBottom: 20,

        alignItems: 'center',
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
    }
})

// export const BottomNavigationBar: React.FC = () => {
//     return (
//         <View style={style.container}>
//             <View style={style.bottomNavigationContentAlign}>
//                 <Text>
//                     <Image source={require('../../assets/HomeIcon.png')} />
//                 </Text>
//                 <NavigationTab title="Home" active={false} />
//             </View>
//             <View style={style.bottomNavigationContentAlign}>
//                 <Text>
//                     <Image source={require('../../assets/BasketIcon.png')} />
//                 </Text>
//                 <NavigationTab title="Shop" active={true}/>
//             </View>
//             <View style={style.bottomNavigationContentAlign}>
//                 <Text>
//                     <Image source={require('../../assets/BagIcon.png')} />
//                 </Text>
//                 <NavigationTab title="Bag" active={false} />
//             </View>
//             <View style={style.bottomNavigationContentAlign}>
//                 <Text>
//                     <Image source={require('../../assets/FavoritesIcon.png')} />
//                 </Text>
//                 <NavigationTab title="Favorites" active={false} />
//             </View>
//             <View style={style.bottomNavigationContentAlign}>
//                 <Text>
//                     <Image source={require('../../assets/ProfileIcon.png')} />
//                 </Text>
//                 <NavigationTab title="Profile" active={false}/>
//             </View>
//             {/* <HomeIcon /> */}

//         </View>
//     )
// };

// const style = StyleSheet.create({
//     container: {
//         flexDirection: 'row',
//         justifyContent: "space-around",
//         marginTop: 30,
//         backgroundColor: '#1E1F28',
//         borderRadius: 8
//     },
//     bottomNavigationContentAlign:{
//         justifyContent: 'center',
//         alignItems: 'center',
//         padding: 20
//     },
//     textActive: {
//         color: 'yellow'
//     },
//     textInactive: {
//         color:'silver'
//     }
// })

