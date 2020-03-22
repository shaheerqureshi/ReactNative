import React,{useState} from 'react';
import { StyleSheet, Text, View,Modal } from 'react-native';
import {TextInput,Button} from 'react-native-paper'

const CreateEmployee = () =>{
    const [Name,setName] = useState("")
    const [phone,setPhone] = useState("")
    const [email,setemail] = useState("")
    const [salary,setsalary] = useState("")
    const [pic,setPicture] = useState("")
    const [modal,setModal] = useState(false)
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
                icon="upload"
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
                        <Button  theme = {theme} icon="camera" mode='contained' onPress={()=>console.log("pressed")}>Camera</Button>        
                        <Button  theme = {theme} icon="image-area" mode='contained' onPress={()=>console.log("pressed")}>Gallery</Button>
                        
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