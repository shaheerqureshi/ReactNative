import React,{useState} from 'react';
import { StyleSheet, Text, View,Image,Linking,Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {Title,Card,Button} from 'react-native-paper';
import { Ionicons,MaterialIcons,Entypo } from '@expo/vector-icons';

const Profile = (props) =>{

    const {_id,name,email,phone,pic,salary} = props.route.params.item;

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
            source={{uri:pic}}
        />
        </View>
        <View style={{alignItems:'center',margin:15}}>
            <Title>
                {name}
            </Title>
             <Text style={{fontSize:15}}>{email}</Text>
        </View>

        <Card style={styles.myCard}  onPress={()=>{
            Linking.openURL("mailto:shaheerqureshi334@gmail.com")
        }}>
            <View style={styles.cardContent}>
            <MaterialIcons name="email" size={32} color="#006aff" />
    <Text style={styles.myText}>{email}</Text>
            </View>
        </Card>
        <Card style={styles.myCard}  onPress={()=>{
                openDial()
            }}>
            <View style={styles.cardContent}>
            <MaterialIcons name="phone" size={32} color="#006aff" />
            <Text style={styles.myText}>{phone}</Text>
            </View>
        </Card>
        <Card style={styles.myCard}>
            <View style={styles.cardContent}>
            <MaterialIcons name="attach-money" size={32} color="#006aff" />
            <Text style={styles.myText}>{salary}</Text>
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