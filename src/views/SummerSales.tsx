import React from 'react';
import { View, ScrollView, StyleSheet, StatusBar, Text, Image, Alert, TouchableOpacity } from 'react-native';
import { BottomNavigationBar } from '../components';
import { StackNavigationProp } from '@react-navigation/stack';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

interface CategoryProps {
    title: string;
}

const categoryImage = {
    new: require('../../assets/categoryNew.png'),
    clothes: require('../../assets/categoryClothes.png'),
    shoes: require('../../assets/categoryShoes.png'),
    accessories: require('../../assets/categoryAccessories.png')
}

const Category: React.FC<CategoryProps> = ({ title }) => {

    return (
        <View style={style.textContainer} >
            <Text style={style.categoryTextButton}>{title}</Text>
        </View>
    )
}


const Stack = createStackNavigator();

export const SummerSales: React.FC<{ navigation: StackNavigationProp<any> }> = ({navigation}) => {
    return (
        <>
            {/* StatusBar uz ios normali nestrada */}
            <StatusBar barStyle="light-content" />
            <ScrollView contentContainerStyle={style.container}>
                
                {/* Šī vietā laikam būtu header navigation */}
                <View style={style.targetCategory}>
                    <TouchableOpacity onPress={() => Alert.alert('Women')}>
                        <View style={style.currentCategory}>
                            <Text style={style.text}>Women</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => Alert.alert('Men')}>
                        <Text style={style.text}>Men</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => Alert.alert('Kids')}>
                        <Text style={style.text}>Kids</Text>
                    </TouchableOpacity>
                </View>

                <View style={style.contentContainer}>
                <View style={style.salesButton}>
                    <Text style={style.salesButtonText}>SUMMER SALES</Text>
                    <Text style={style.salesButtonSmallText}>Up to 50% off</Text>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('Categories')}>
                    <View style={style.categoryTextButtonContainer}>
                        <Category title="New" />
                           <Image style={style.categoryImageButtonContainer} source={categoryImage.new} /> 
                    </View>
                    </TouchableOpacity>
                    <View style={style.categoryTextButtonContainer}>
                        <Category title="Clothes" />
                        <Image style={style.categoryImageButtonContainer}  source={categoryImage.clothes} />
                    </View>
                    <View style={style.categoryTextButtonContainer}>
                        <Category title="Shoes" />
                        <Image style={style.categoryImageButtonContainer}  source={categoryImage.shoes} />
                    </View>
                    <View style={style.categoryTextButtonContainer}>
                        <Category title="Accessories" />
                        <Image style={style.categoryImageButtonContainer} source={categoryImage.accessories} />
                    </View>
                </View>
                <BottomNavigationBar />
            </ScrollView>

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
        color: '#F5F5F5',
        fontSize: 16,
        paddingLeft: 50,
        paddingRight: 50,
        paddingBottom: 10,
        fontWeight: '600'
    },
    targetCategory: { 
        flexDirection: 'row',
        justifyContent: "space-around",
    },
    currentCategory: { 
        borderStyle: "solid",
        borderBottomWidth: 3,
        borderBottomColor: '#EF3651',
    },
    contentContainer: { 
        flex: 1, 
        marginLeft: 20, 
        marginRight: 20
    },
    salesButton: { 
        backgroundColor: '#FF3E3E',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        marginTop: 20,
        marginBottom: 20,
        height: 100
    },
    salesButtonText: { 
        color: '#F7F7F7',
        fontSize: 24
    },
    salesButtonSmallText: { 
        color: '#F7F7F7',
        fontSize: 14
    },
    categoryTextButtonContainer: { 
         flexDirection: 'row', 
         marginBottom:20 
    },
    categoryTextButton: { 
        color: '#F7F7F7',
        fontSize: 18,
        fontWeight: '600',
        marginLeft: 20,
    },
    categoryImageButtonContainer: { 
        width: '50%', 
        borderBottomRightRadius: 8,
        borderTopRightRadius: 8
    },
    textContainer: { 
        width: '50%', 
        backgroundColor: '#2A2C36',
        borderTopLeftRadius:8,
        borderBottomLeftRadius:8, 
        justifyContent: 'center'
    }
});