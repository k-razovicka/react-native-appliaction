import React from 'react'
import { View, Text, StatusBar, ScrollView, StyleSheet, Alert, Image } from 'react-native'
import { BottomNavigationBar, Button } from '../components'
import Filters from '../svg/Filters';
import LowToHigh from '../svg/LowToHigh';
import MenuList from '../svg/MenuList';
import AddToFavoritesIcon from '../svg/AddToFavoritesIcon';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface FilterProps {
    title: string;
}

const Filter: React.FC<FilterProps> = ({ title }) => {

    return (
        <View style={style.filterTextContainer}>
            <Text style={style.filterText}>{title}</Text>
        </View>
    )
}

interface ClothesProps {
    typeTitle: string;
    brandTitle: string;
    cost: number;
}

const Clothes: React.FC<ClothesProps> = ({ typeTitle, brandTitle, cost }) => {

    return (
        <View >
            <Text style={style.typeText}>{typeTitle}</Text>
            <Text style={style.brandText}>{brandTitle}</Text>
            <Text style={style.costText}>{cost}$</Text>
        </View>
    )
}

const categoryImage = {
    pullover: require('../../assets/womensTops/Pullover.png'),
    blouse: require('../../assets/womensTops/Blouse.png'),
    tShirt: require('../../assets/womensTops/TShirt.png'),
    shirt: require('../../assets/womensTops/Shirt.png')
}


export const WomensTops: React.FC = () => {
    return (
        <>
            {/* StatusBar uz ios normali nestrada */}
            <StatusBar barStyle="light-content" />
            <ScrollView contentContainerStyle={style.container}>

                {/* šeit vajag headeri */}

                <Text style={style.categoryTitle}>Women's tops</Text>

                <View style={style.filterContainer}>
                    <ScrollView horizontal={true} >
                        <Filter title='T-shirts' />
                        <Filter title='Croptops' />
                        <Filter title='Sleeveless' />
                        <Filter title='Blouses' />
                        <Filter title='Long sleeves' />
                    </ScrollView>
                </View>

                <View style={style.filterTitleContainer}>
                    <View style={style.filterTitleTextContainer}>
                        <Filters />
                        <Text style={style.filterTitle}>Filters</Text>
                    </View>

                    <View style={style.filterTitleTextContainer}>
                        <LowToHigh />
                        <Text style={style.filterTitle}>Price: lowest to high</Text>
                    </View>

                    <View style={style.filterTitleTextContainer}>
                        <MenuList />
                    </View>
                </View>

                <View>
                <ScrollView>
                    <View style={style.itemContentContainer}>
                        <Image style={style.itemImage} source={categoryImage.pullover} />
                        <View style={style.itemTextContainer}>
                            <Clothes typeTitle="Pullover" brandTitle="Mango" cost={51} />
                        </View>
                    </View>

                    <View style={style.itemContentContainer}>
                        <Image style={style.itemImage} source={categoryImage.blouse} />
                        <View style={style.itemTextContainer}>
                            <Clothes typeTitle="Blouse" brandTitle="Dorothy Perkins" cost={34} />
                        </View>
                    </View>

                    <View style={style.itemContentContainer}>
                        <Image style={style.itemImage} source={categoryImage.tShirt} />
                        <View style={style.itemTextContainer}>
                            <Clothes typeTitle="T-Shirt" brandTitle="LOST Ink" cost={12} />
                        </View>
                    </View>

                    <View style={style.itemContentContainer}>
                        <Image style={style.itemImage} source={categoryImage.shirt} />
                        <View style={style.itemTextContainer}>
                            <Clothes typeTitle="Shirt" brandTitle="TopShop" cost={51} />
                        </View>
                    </View>
                    </ScrollView>
                </View>

            </ScrollView>
            <BottomNavigationBar />
        </>
    );
}

//contentContainerStyle={styles.contentContainer}
const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1E1F28',
        paddingTop: 80,
    },
    categoryTitle: {
        color: '#F7F7F7',
        fontSize: 34,
        fontWeight: '800',
        paddingLeft: 20
    },
    filterText: {
        color: '#2A2C36',
    },
    filterTextContainer: {
        backgroundColor: '#F7F7F7',
        height: 30,
        width: 100,
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 129
    },
    filterContainer: {
        flexDirection: 'row',
        paddingLeft: 20,
        paddingTop: 10,
        paddingBottom: 10
    },
    filterTitle: {
        color: '#F7F7F7',
        fontSize: 11
    },
    filterTitleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 20,
        paddingRight: 20
    },
    typeText: {
        color: '#F7F7F7',
        fontSize: 16,
        fontWeight: '600',
    },
    brandText: {
        color: '#ABB4BD',
        fontSize: 11,
        marginBottom: 10
    },
    costText: {
        color: '#F7F7F7',
        fontSize: 14,
        fontWeight: '700'
    },
    itemContentContainer: {
        flexDirection: 'row',
        paddingLeft: 20,
        paddingRight: 20,
        marginTop: 20
    },
    itemImage: {
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8
    },
    itemTextContainer: {
        backgroundColor: '#2A2C36',
        width: '73%',
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8,
        paddingLeft: 10,
        justifyContent: 'center'
    },
    filterTitleTextContainer: {
        flexDirection: 'row', 
        justifyContent: 'center',
        alignItems: 'center',
    }
});
