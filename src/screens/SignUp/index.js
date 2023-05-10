import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { Button, Gap, Header, TextInput } from '../../Components';
import {launchImageLibrary} from 'react-native-image-picker';
import { showMessage, hideMessage } from 'react-native-flash-message';
// import app from '../../config/Firebase';

const SignUp = ({navigation}) => {
    const [photo, setPhoto] = useState('');
    const [hasPhoto, setHasPhoto] = useState(false);
    // const [photoBase64, setPhotoBase64] = useState('');

    // //action to firebase
    // const [fullName, setFullname] = useState('');
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');

    const getImage = () => {
        launchImageLibrary({maxHeight: 200, maxWidth: 200, includeBase64: true}, (res) => {
            if(res.didCancel){
                setHasPhoto(false);
                showMessage({
                    message: "Gagal Upload Foto",
                    type: "default",
                    backgroundColor: "#D9435E", // background color
                    color: "white", // text color
                });
            }
            else{
                setPhoto(res.uri);
                setHasPhoto(true);
                setPhotoBase64(res.base64);
            }
        });
    };

    const onSubmit = () => {
        // app
        //     .auth()
        //     .createUserWithEmailAndPassword(email, password)
        //     .then(res =>{
        //             const uid = res.user.uid;
        //             const data = {
        //                 fullName: fullName,
        //                 email: email,
        //                 photo: photoBase64,
        //             };
        //             firebase.database().ref(`users/${uid}`).set(data);
        //             setFullname('');
        //             setEmail('');
        //             setPassword('');
        //             navigation.navigate("SignIn")
        //         })
        //     .catch(error => {showMessage({
        //         message: error.message,
        //         type: "default",
        //         backgroundColor: "#D9435E", // background color
        //         color: "white", // text color
        //     });
        //     });
        navigation.navigate("SignIn");
    };

    return (
        <View style={styles.page}>
            <Header title="Sign Up" onBack={()=> navigation.goBack()}/>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.contentWrapper}>
                    <View style={styles.avatarWrapper}>
                        <View style={styles.border}>
                            <TouchableOpacity onPress={getImage}>
                                {
                                    hasPhoto && (<Image source={{uri: photo}} style={styles.avatar}/>
                                )}
                                {
                                    !hasPhoto && (
                                        <View style={styles.addPhoto}>
                                            <Text style={styles.textAddPhoto}>Add Photo</Text>
                                        </View>
                                    )
                                }
                            </TouchableOpacity>
                        </View>
                    </View>

                    <TextInput 
                        title="Full Name" 
                        placeholder="Enter your full name"
                    />
                    <Gap height={16}/>
                    <TextInput 
                        title="Email Address" 
                        placeholder="Enter your email address"
                    />
                    <Gap height={16}/>
                    <TextInput 
                        title="Password" 
                        placeholder="Enter your password"
                        secureTextEntry
                    />
                    <Gap height={24}/>
                    <Button title="Continue" onPress={onSubmit}/>
                </View>
            </ScrollView>
        </View>
    )
}

export default SignUp;

const styles = StyleSheet.create({
    page: {
        flex: 1,
    },
    contentWrapper: {
        flex: 1,
        backgroundColor: 'white',
        marginTop: 24,
        paddingHorizontal: 24,
    },
    addPhoto: {
        height: 90,
        width: 90,
        backgroundColor: '#F0F0F0',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 90,
    },
    textAddPhoto: {
        fontSize: 14,
        fontFamily: 'Poppins-Light',
        color: 'black',
        maxWidth: 40,
        textAlign: 'center',
    },
    border: {
        borderWidth: 1,
        borderColor: '#8D92A3',
        width: 110,
        height: 110,
        borderRadius: 110,
        alignItems: 'center',
        justifyContent: 'center',
        borderStyle: 'dashed',
    },
    avatarWrapper: {
        alignItems: 'center',
        marginTop: 26,
        marginBottom: 16,
    },
    avatar: {
        height: 90,
        width: 90,
        borderRadius: 90,
    }
})