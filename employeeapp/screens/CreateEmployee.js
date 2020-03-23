import React,{useState} from 'react';
import { StyleSheet, Text, View,Modal,Alert } from 'react-native';
import {TextInput,Button} from 'react-native-paper'
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';

const CreateEmployee = () =>{
    const [Name,setName] = useState("")
    const [phone,setPhone] = useState("")
    const [email,setemail] = useState("")
    const [salary,setsalary] = useState("")
    const [pic,setPicture] = useState("")
    const [modal,setModal] = useState(false)


    const pickFromGallery = async () =>{
       const{granted} = await Permissions.askAsync(Permissions.CAMERA_ROLL)
       if (granted) {
          let data = await ImagePicker.launchImageLibraryAsync({
               mediaTypes:ImagePicker.MediaTypeOptions.Images,
               allowsEditing:true,
               aspect:[1,1],
               quality:0.5
           })
           if (!data.cancelled) {
            let newfile = { 
                uri:data.uri,
                type:`test/${data.uri.split(".")[1]}`,
                name:`test.${data.uri.split(".")[1]}` }
                 handleUpload(newfile)
           
        }
        
       }else{
            Alert.alert("You need to give us permission to work")
       }
    }
    const pickFromCamera = async () =>{
       const{granted} = await Permissions.askAsync(Permissions.CAMERA)
       if (granted) {
          let data = await ImagePicker.launchCameraAsync({
               mediaTypes:ImagePicker.MediaTypeOptions.Images,
               allowsEditing:true,
               aspect:[1,1],
               quality:0.5

           })
           if (!data.cancelled) {
            let newfile = {uri:data.uri,type:`test/${data.uri.split(".")[1]}`,name:`test.${data.uri.split('.')[1]}`}
            handleUpload(newfile)
        }
        
       }else{
            Alert.alert("You need to give us permission to work")
       }
    }
    const handleUpload=(image)=>{
        const data = new FormData()
        data.append('upload_preset','employeeApp')
        data.append('file',image)
        data.append('cloud_name','shaheerqureshi')

        fetch("https://api.cloudinary.com/v1_1/shaheerqureshi/image/upload",{
            method:'post',
            body:data
        }).then(res=>res.json()).
        then(data=>{
            console.log(data)
            setPicture(data.url)
            setModal(false)
        })
    }
    return(
        <View style={StyleSheet.root}>
            <TextInput
                style={styles.inputStyle}
                label='Name'
                value={Name}
                mode='outlined'
                theme = {theme}
                onChangeText={Text =>setName(text)}
            />
            <TextInput
                style={styles.inputStyle}
                label='Email'
                value={email}
                mode='outlined'
                theme = {theme}
                onChangeText={Text =>setemail(text)}
            />
            <TextInput
                style={styles.inputStyle}
                label='Phone'
                value={email}
                mode='outlined'
                theme = {theme}
                keyboardType="number-pad"
                onChangeText={Text =>setPhone(text)}
            />
            <TextInput
                style={styles.inputStyle}
                label='Salary'
                value={email}
                mode='outlined'
                theme = {theme}
                
                onChangeText={Text =>setsalary(text)}
            />
            <Button
            style={styles.modalButtonView}
                icon={pic == ""?"upload" :"check"}
                mode='contained'
                theme = {theme}
                onPress={()=>setModal(true)}
                >
                    Upload Image
            </Button>
            <Button
            style={styles.modalButtonView}
                icon="content-save"
                mode='contained'
                theme = {theme}
                onPress={()=>setModal(true)}
                >
                    Save
            </Button>
            <Modal
                animationType='slide'
                transparent={true}
                visible={modal}
                onRequestClose={()=>setModal(false)}
                >
                    <View style = {styles.modalView}>
                        <View style={styles.modalButtonView}>
                        <Button  theme = {theme} icon="camera" mode='contained' onPress={()=>pickFromCamera()}>Camera</Button>        
                        <Button  theme = {theme} icon="image-area" mode='contained' onPress={()=>pickFromGallery()}>Gallery</Button>
                        
                        </View>
                    <Button icon="cancel" onPress={()=>setModal(false)}>Cancel</Button>
            
                    </View>

                </Modal>

        </View>
    )
}
const theme= {
    colors:{
        primary:"#006aff"
    }
}
const styles = StyleSheet.create({
    root:{
        flex:1,
    },
    inputStyle:{
        margin:5
    },
    modalButtonView:{
        flexDirection:'row',
        justifyContent:"space-around",
        padding:4,
        margin:10
    },
    modalView:{
        position:'absolute',
        bottom:2,
        width:'100%',
        backgroundColor:'#ffffff'
    }
})
export default CreateEmployee