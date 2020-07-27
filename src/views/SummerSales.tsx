import React, {useState} from 'react';
import { View, ScrollView, StyleSheet, StatusBar, Text, Image, Alert, TouchableOpacity } from 'react-native';


// const titles = [
//     {
//         title: 'New',
//         img: require('../../assets/Vector.png'),
//     },
//     {
//         title: 'Clothes',
//         img: require('../../assets/Google.png'),
//     },
//     {
//         title: 'Shoes',
//         img: require('../../assets/Facebook.png'),
//     },
//     {
//         title: 'Accessories',
//         img: require('../../assets/Search.png'),
//     }
// ]

// interface CategoryProps {
//     title: string;
//     img: string;
// }

// const Category: React.FC<CategoryProps> = ({ title, img }) => {

//     return (
//         <View >
//             <Text>{title}</Text>
//             <Image source={img}/>
//         </View>
//     )
// }


export const SummerSales: React.FC = () => {
    // const [isClicked, setClicked] = useState<boolean>(false);
    return (
        <>
            {/* StatusBar uz ios normali nestrada */}
            <StatusBar barStyle="light-content" />
            <ScrollView contentContainerStyle={style.container}>
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
                    <View>
                    <TouchableOpacity onPress={() => Alert.alert('New Category')}>
                        <View style={style.categoryButtonContainer} >
                            <View style={style.categoryTextButtonContainer}>
                                <Text style={style.categoryTextButton}>
                                    New
                                </Text>
                            </View>   
                            <View style={style.categoryImageButtonContainer} >
                                <Text >
                                    <Image style={style.categoryImageButton} source={require('../../assets/categoryNew.png')} />
                                </Text>
                            </View>
                        </View>
                        </TouchableOpacity>
                    </View>
                    <View>
                    <TouchableOpacity onPress={() => Alert.alert('Clothes Category')}>
                        <View style={style.categoryButtonContainer} >
                            <View style={style.categoryTextButtonContainer}>
                                <Text style={style.categoryTextButton}>
                                    Clothes
                                </Text>
                            </View>
                            <View style={style.categoryImageButtonContainer} >
                                <Text >
                                    <Image style={style.categoryImageButton} source={require('../../assets/categoryClothes.png')} />
                                </Text>
                            </View>
                        </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => Alert.alert('Shoes Category')}>
                        <View>
                            <View style={style.categoryButtonContainer} >
                                <View style={style.categoryTextButtonContainer}>
                                    <Text style={style.categoryTextButton}>
                                        Shoes
                                </Text>
                                </View>
                                <View style={style.categoryImageButtonContainer} >
                                    <Text >
                                        <Image style={style.categoryImageButton} source={require('../../assets/categoryShoes.png')} />
                                    </Text>
                                </View>
                            </View>
                        </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => Alert.alert('Accessories Category')}>
                        <View>
                            <View style={style.categoryButtonContainer} >
                                <View style={style.categoryTextButtonContainer}>
                                    <Text style={style.categoryTextButton}>
                                        Accessories
                                </Text>
                                </View>
                                <View style={style.categoryImageButtonContainer} >
                                    <Text >
                                        <Image style={style.categoryImageButton} source={require('../../assets/categoryAccessories.png')} />
                                    </Text>
                                </View>
                            </View>
                        </View>
                        </TouchableOpacity>
                    </View>
                    <View>
                        {/* {titles.map(title => (
                            <Category key={title.title} title={title.title} img={title.img} />
                        ))} */}
                    </View>
                </View>
                <View>
                    <View style={style.bottomNavigationContainer}>
                        <View style={style.bottomNavigationContentAlign} >
                            <Text>
                            </Text>
                            <Text style={style.bottomNavigationText}>Home</Text>
                        </View>
                        <View style={style.bottomNavigationContentAlign}>
                            <Text>
                            </Text>
                            <Text style={style.bottomNavigationText}>Shop</Text>
                        </View>
                        <View style={style.bottomNavigationContentAlign}>
                            <Text>
                            </Text>
                            <Text style={style.bottomNavigationText}>Bag</Text>
                        </View>
                        <View style={style.bottomNavigationContentAlign}>
                            <Text>
                            </Text>
                            <Text style={style.bottomNavigationText}>Favorites</Text>
                        </View>
                        <View style={style.bottomNavigationContentAlign}>
                            <Text>
                            </Text>
                            <Text style={style.bottomNavigationText}>Profile</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>

        </>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1E1F28',
        paddingTop: 20
    },
    text: {
        color: '#F5F5F5',
        fontSize: 16,
        paddingLeft: 50,
        paddingRight: 50,
        paddingBottom: 10
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
        paddingHorizontal: 16,
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
    categoryButtonContainer: {
        backgroundColor: '#2A2C36',
        flexDirection: 'row',
        borderRadius: 8,
        marginVertical: 7
    },
    categoryTextButtonContainer: {
        width: 200,
        justifyContent: 'center',
        paddingLeft: 30
    },
    categoryTextButton: {
        color: '#F7F7F7',
        fontSize: 18,
        fontWeight: '600'
    },
    categoryImageButtonContainer: {
        width: 200
    },
    categoryImageButton: {
        width: 180,
        paddingBottom: 0,
        marginBottom: 0
    },
    bottomNavigationText: {
        color: '#F7F7F7'
    },
    bottomNavigationContainer: {
        flexDirection: 'row',
        justifyContent: "space-around",
        marginTop: 80
    },
    bottomNavigationContentAlign: {
        justifyContent: 'center',
        alignItems: 'center'
    }
});
