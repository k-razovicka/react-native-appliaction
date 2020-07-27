import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { BottomNavigationBar } from '../components';

export const MainPage: React.FC = () => {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                <ImageBackground
                    style={style.imgBackground}
                    resizeMode='cover'
                    source={require('../../assets/mainPageBackground/NewCollectionBackground.png')}>
                    <LinearGradient
                        colors={['rgba(196, 196, 196, 0)', 'rgba(0, 0, 0, 0.53)']}
                        locations={[0,0.9]}
                        style={{
                            position: 'absolute',
                            left: 0,
                            right: 0,
                            top: 0,
                            height: '100%'
                        }}
                    >
                    <View style={{ flex: 3 }}>
                        <Text style={style.textNewCollection}>New collection</Text>
                    </View>
                    </LinearGradient>
                </ImageBackground>
                <View style={{ flex: 3, flexDirection: 'row' }}>
                    <View style={{ flexDirection: 'column', width: 205 }}>
                        <View style={{ backgroundColor: '#1E1F28', height: 200, justifyContent: 'center'}}>
                            <Text style={style.textSummerSale}>Summer sale</Text>
                        </View>
                        <View style={{ height: 210 }}>
                            <ImageBackground
                                style={style.imgBackground}
                                resizeMode='cover'
                                source={require('../../assets/mainPageBackground/BlackBackground.png')}>
                                <Text style={style.textBlack}>Black</Text>
                            </ImageBackground>
                        </View>
                    </View>
                    <View style={{ width: 209,height: 410}}>
                        <ImageBackground
                            style={style.imgBackground}
                            resizeMode='cover'
                            source={require('../../assets/mainPageBackground/MensHatsBackground.png')}>
                            <Text style={style.textMensHats}>Men's hats</Text>
                        </ImageBackground>
                    </View>
                </View>
            </View>
            <BottomNavigationBar  />
        </View>
    )
}

const style = StyleSheet.create({
    imgBackground: {
        width: '100%',
        height: '100%',
        flex: 3
    },
    textNewCollection: {
        color: '#F7F7F7',
        fontSize: 34,
        lineHeight: 34,
        fontWeight:'800',
        top: 340,
        left: 150
    },
    textSummerSale:{
        color: '#EF3651',
        fontSize: 34,
        lineHeight: 34,
        fontWeight:'800',
        marginLeft:15
        // justifyContent: 'center',
        //         alignItems: 'center',
    },
    textBlack: {
        color: '#F7F7F7',
        fontSize: 34,
        lineHeight: 34,
        fontWeight:'800',
        top: 140,
        marginLeft:15
    },
    textMensHats: {
        color: '#F7F7F7',
        fontSize: 34,
        lineHeight: 34,
        fontWeight:'800',
        top: 65,
        marginLeft:15,
        marginRight:80
    }
});
