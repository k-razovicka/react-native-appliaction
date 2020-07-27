import React from 'react'
import { View, Text, StatusBar, ScrollView, StyleSheet, Alert } from 'react-native'
import { BottomNavigationBar, Button } from '../components'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { StackNavigationProp } from '@react-navigation/stack';
import { createStackNavigator } from '@react-navigation/stack';



interface CategoryProps {
    title: string;
}

const Category: React.FC<CategoryProps> = ({ title }) => {

    return (
        <View style={style.textContainer}>
            <Text style={style.text}>{title}</Text>
        </View>
    )
}

const Stack = createStackNavigator();

export const Categories: React.FC<{ navigation: StackNavigationProp<any> }> = ({navigation}) => {
    return (
        <>
            {/* StatusBar uz ios normali nestrada */}
            <StatusBar barStyle="light-content" />
            <ScrollView contentContainerStyle={style.container}>

                {/* šeit vajag headeri */}

                <View style={style.buttonContainer}>
                    <Button title="View All Items" onPress={() => Alert.alert('View all items')} />
                </View>

                <Text style={style.chooseText} >Choose category</Text>
                {/* kapēc šeit nestrādā, bet augšā strādā? */}
                <View>
                <TouchableOpacity onPress={() => navigation.navigate('Women Tops')}> 
                    <Category title="Tops" />
                </TouchableOpacity>
                </View>
                <Category title="Shirts & Blouses" />
                <Category title="Cardigans & Sweaters" />
                <Category title="Knitwear" />
                <Category title="Blazers" />
                <Category title="Outerwear" />
                <Category title="Pants" />
                <Category title="Jeans" />
                <Category title="Shorts" />
                <Category title="Skirts" />
                <Category title="Dresses" />

            </ScrollView>
            <BottomNavigationBar />
        </>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1E1F28',
        paddingTop: 80,
    },
    text: {
        color: '#F7F7F7',
        fontSize: 16,
        paddingLeft: 30,
        paddingBottom: 15,
        paddingTop: 15
    },
    textContainer: {
        borderBottomWidth: 1,
        borderBottomColor: '#ABB4BD'
    },
    chooseText: {
        color: '#ABB4BD',
        fontSize: 14,
        paddingLeft: 10,
        paddingTop: 20
    },
    buttonContainer: {
        paddingLeft: 10,
        paddingRight: 10
    }
});