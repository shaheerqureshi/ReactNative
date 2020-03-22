import React,{useState} from 'react';
import { StyleSheet, Text, View,Image,Linking,Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {Title,Card,Button} from 'react-native-paper';
import { Ionicons,MaterialIcons,Entypo } from '@expo/vector-icons';

const Profile = () =>{
    const openDial = () =>{
        if (Platform.OS === "android") {
            Linking.openURL("tel:12345")
        }else{
            Linking.openURL("telprompt:23565")
        }
    }
    return(
        <View style = {styles.root}>
            <LinearGradient
                colors={["#0033ff","#6bc1ff"]}
                style={{height:"20%"}}
            />
        
        <View style={styles.myView}>
        <Image
            style={{width:140,height:140,borderRadius:140/2}}
            source={{uri:"https://images.unsplash.com/photo-1542080681-b52d382432af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"}}
        />
        </View>
        <View style={{alignItems:'center',margin:15}}>
            <Title>
                Shaheer QUreshi
            </Title>
            <Text style={{fontSize:15}}>React Developer</Text>
        </View>

        <Card style={styles.myCard}  onPress={()=>{
            Linking.openURL("mailto:shaheerqureshi334@gmail.com")
        }}>
            <View style={styles.cardContent}>
            <MaterialIcons name="email" size={32} color="#006aff" />
            <Text style={styles.myText}>shaheerqureshi334@gmail.com</Text>
            </View>
        </Card>
        <Card style={styles.myCard}  onPress={()=>{
                openDial()
            }}>
            <View style={styles.cardContent}>
            <MaterialIcons name="phone" size={32} color="#006aff" />
            <Text style={styles.myText}>0333-1576059</Text>
            </View>
        </Card>
        <Card style={styles.myCard}>
            <View style={styles.cardContent}>
            <MaterialIcons name="attach-money" size={32} color="#006aff" />
            <Text style={styles.myText}>AED 800,000</Text>
            </View>
        </Card>

        <View style={{flexDirection:'row',justifyContent:'space-around',padding:15}}>
        <Button theme={theme} icon="account-edit" mode="contained" onPress={() => console.log('Pressed')}>Edit</Button>
        <Button theme={theme} icon="delete" mode="contained" onPress={() => console.log('Pressed')}>Delete Employee</Button>

        </View>

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
        flex:1
    },
    myView:{
        alignItems:'center',
        marginTop:-50
    },
    myCard:{
        margin:3
    },
    cardContent:{
        flexDirection:'row',
        padding:8
    },
    myText:{
        fontSize:18,
        marginTop:3,
        marginLeft:5
    }
})

export default Profile