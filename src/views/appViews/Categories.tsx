import React from 'react';
import { View, Text, StatusBar, ScrollView, StyleSheet, Alert } from 'react-native';
import { Button } from '../../components';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { StackNavigationProp, createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

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

export const Categories: React.FC<{ navigation: StackNavigationProp<any> }> = ({ navigation }) => {
    return (
        <>
            <StatusBar barStyle="light-content" />
            <View style={style.container}>

                <View style={style.buttonContainer}>
                    <Button title="View All Items" onPress={() => Alert.alert('View all items')} />
                </View>

                <Text style={style.chooseText} >Choose category</Text>

                <ScrollView>
                    <View>
                        <TouchableOpacity onPress={() => navigation.navigate("Women's Tops")}>
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
                    <Category title="Swimsuits" />
                    <Category title="Hoodies" />
                    <Category title="Jumpsuits" />
                </ScrollView>
                <Stack.Screen name="Shop" component={Categories} />
            </View>
           
        </>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1E1F28',
        paddingTop: 20,
    },
    categoryTitle: {
        color: '#F7F7F7',
        fontSize: 34,
        fontWeight: '800',
        paddingLeft: 20,
        marginBottom: 20
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