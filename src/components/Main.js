import React, { useState } from 'react';
import {
    Text,
    View,
    TextInput,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';


const Main = ({navigation}) => {
    const [text, onChangeText] = useState({
        asal: '',
        tujuan: '',
        tanggal: '',
    });

    const handleTextChanges = (mytextname) => {
        return (val) => {
            onChangeText({ ...text, [mytextname]: val });
            console.log(text);
        }
    }

    return (
            <View style={formStyle.formMain}>
                <View style={formStyle.formCardStyle}>
                    <Text style={formStyle.inputLabel}>
                        Lokasi Keberangkatan   
                    </Text>
                    <View style={formStyle.formInput}>
                        <Icon 
                            style={formStyle.inputIcon} 
                            name="flight-takeoff" color="limegreen"/>
                        <TextInput
                            style={formStyle.inputText}
                            onChangeText={handleTextChanges('asal')}
                            value={text.asal}
                            placeholder="Masukkan Lokasi Keberangkatan"
                        />
                    </View>

                    <Text style={formStyle.inputLabel}>
                        Lokasi Tujuan   
                    </Text>
                    <View style={formStyle.formInput}>
                        <Icon 
                            style={formStyle.inputIcon} 
                            name="flight-land" color="limegreen"/>
                        <TextInput
                            style={formStyle.inputText}
                            onChangeText={handleTextChanges('tujuan')}
                            value={text.tujuan}
                            placeholder="Masukkan Lokasi Tujuan"
                        />
                    </View>

                    <Text style={formStyle.inputLabel}>
                        Tanggal Keberangkatan   
                    </Text>
                    <View style={formStyle.formInput}>
                        <Icon 
                            style={formStyle.inputIcon} 
                            name="date-range" 
                            color="limegreen"/>
                        <TextInput
                            style={formStyle.inputText}
                            onChangeText={handleTextChanges('tanggal')}
                            value={text.tanggal}
                            placeholder="Masukkan Tanggal Keberangakatan"
                        />
                    </View>

                    <View style={formStyle.container}>
                        <TouchableOpacity
                            style={formStyle.button}
                            onPress={() => navigation.navigate('SearchPage', {data: text})}
                        >
                            <Text style={formStyle.buttonText}>
                                Cari
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
    );
};

const formStyle = StyleSheet.create({
    formMain: {
        padding: 10,
        margin: 10,
        width: '100%',
        position: 'absolute',
        top: '12%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    formCardStyle: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        margin: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
        width: '100%',
        position: 'absolute',
        top: '15%',
    },
    inputText: {
        flex: 1,
    },
    formInput: {   
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 0.5,
        borderColor: '#000',
        height: 60,
        borderRadius: 10,
        margin: 10,
    },
    inputIcon: {
        fontSize: 25,
        padding: 10,
    },
    inputLabel: {
        fontSize: 20,
        color: '#000',
        fontWeight: '700',
        textAlign: 'left',
        paddingLeft: 10,
    },
    container: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        backgroundColor: 'orange',
        borderRadius: 10,
        padding: 10,
        width: '95%',
    },
    buttonText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 20,
        fontWeight: '700',
    },
});

export default Main;
