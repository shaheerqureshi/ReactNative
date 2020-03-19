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
                icon="upload"
                mode='contained'
                onPress={()=>setModal(true)}
                >
                    Press Me
            </Button>
            <Modal
                animationType='slide'
                transparent={false}
                visible={modal}
                onRequestClose={()=>setModal(false)}
                >
                    <View>
                        <View style={styles.modalButtonView}>
                        <Button icon="camera" onPress={()=>setModal(false)}>Cancel</Button>        
                        <Button icon="camera" onPress={()=>setModal(false)}>Cancel</Button>
                        </View>
                    <Button icon="camera" onPress={()=>setModal(false)}>Cancel</Button>
            
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
        flexDirection:'row'
    }
})
export default CreateEmployee