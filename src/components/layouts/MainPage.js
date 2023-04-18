import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    Text,
    View,
    useColorScheme,
    StyleSheet,
} from 'react-native';
import {
    Colors,
} from 'react-native/Libraries/NewAppScreen';
import Main from '../Main';
import Header from '../Header';

const MainPage = ({navigation}) => {
    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };
    return (
        <SafeAreaView style={backgroundStyle}>
            <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
            
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                contentContainerStyle={globalStyles.mainContainer}
            >
            
                <View
                    style={globalStyles.background}
                >
                    <Header/>
                    <View 
                        style={globalStyles.appsContent}
                    >
                        <Text style={globalStyles.titleText}>
                            Hiling.id    
                        </Text>
                        <Main navigation={navigation}/>
                    </View>
                </View>
                <View style={globalStyles.bottomView}>
                        <Text style={globalStyles.copyRight}>
                            Copyright RAHMA WATI-120140184
                        </Text>
                </View>
            </ScrollView>
        </SafeAreaView>
        
    );
};

const globalStyles = StyleSheet.create({
	mainContainer: {  
		height: "100%",
		backgroundColor: 'ghostwhite',
	},
	background: {
		justifyContent: "center",
		backgroundColor: "limegreen",
		height: "70%",
		paddingBottom: 30,
		paddingRight: 30,
		paddingLeft: 30,
		paddingTop: 0,
	},
	appsContent: {
		flex: 1,
		alignItems: "center",
		flexDirection: "column",    
	},
	titleText: {
		fontSize: 40,
		fontWeight: '700',
		color: "white",
		alignSelf: "center",
	},
	highlight: {
		fontWeight: '700',
	},
	copyRight: {
        color: 'black',
        fontSize: 16,
	},
    bottomView: {
        bottom: 50, 
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute', 
    },
});

export default MainPage;