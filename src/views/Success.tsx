import React from 'react';
import { View, ScrollView, StyleSheet, StatusBar, Text, Alert, ImageBackground,TouchableOpacity } from 'react-native';


const image = { uri: 'https://i0.wp.com/3minute.club/wp-content/uploads/2016/08/Yellow-background.png?ssl=1' };

export const Success: React.FC = () => {
    return (
        <>
            {/* StatusBar uz ios normali nestrada */}
            <StatusBar barStyle="light-content" />
            <ScrollView contentContainerStyle={style.container}>

                <ImageBackground source={image} style={style.image}>
                    <View style={style.contentContainer}>
                        <Text style={style.mainText}>Success!</Text>
                        <Text style={style.secondaryText}>Your order will be delivered soon. Thank you for choosing our app!</Text>
                        <TouchableOpacity onPress={() => Alert.alert('Continue')}>
                            <View style={style.button}>
                                <Text style={style.buttonText}>Continue shopping</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </ScrollView>

        </>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    mainText: {
        fontSize: 34,
        fontWeight: '800',
        textAlign: 'center'
    },
    secondaryText: {
        fontSize: 16,
        textAlign: 'center',
        fontWeight: '600',
        margin: 20
    },
    button: {
        backgroundColor: '#EF3651',
        fontSize: 14,
        width: 160,
        borderRadius: 15,
        padding: 10
    },
    buttonText: {
        color: '#F5F5F5',
        textAlign: "center"
    },
    contentContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    }
});
