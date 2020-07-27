import React from 'react';
import { View, ScrollView, StyleSheet, StatusBar, Text, Image } from 'react-native';

export const FindSimilarResults: React.FC = () => {
    return (
        <>
            {/* StatusBar uz ios normali nestrada */}
                <StatusBar barStyle="light-content" />
            <ScrollView contentContainerStyle={style.container}>
                <View style={style.imageContainer} >
                <Image source={require('../../assets/Search.png')} />
                </View>
                <View style={{ justifyContent: 'space-evenly' }}>
                    <Text style={style.text}>Finding similar results...</Text>
                </View>
            </ScrollView>
        </>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1E1F28',
        paddingHorizontal: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '#F5F5F5',
        fontSize:34,
        fontWeight: '800',
        textAlign: 'center'
    },
    imageContainer: {
        marginBottom: 20
    }
});
