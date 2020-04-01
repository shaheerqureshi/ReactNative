import React,{useEffect,useState} from 'react';
import { StyleSheet, Text, View,Image,FlatList,ActivityIndicator,Alert } from 'react-native';
import {Card,FAB} from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import {useSelector,useDispatch} from 'react-redux'

const Home = ({navigation})=>{
    // const [data,setData] = useState([])
    // const [loading,setLoading] = useState(true)
    const dispatch = useDispatch()
    const {data,loading}  = useSelector((state)={
        return (state)
    })

    const fetchData = () =>{
        fetch("http://9e80a8df.ngrok.io")
        .then(res=>res.json())
        .then(results=>{
            // setData(results)
            // setLoading(false)
            dispatch({type:"ADD_DATA",payload:results})
            dispatch({type:"SET_LOADING",payload:false})
        }).catch(err=>{
            Alert.alert("Oops something went wrong")
        })
    }
    useEffect(()=>{
       fetchData()
    },[])
    // const data = [
    //     {_id:"144",name:"Ayesha",position:"CEO",path:"https://images.unsplash.com/photo-1542080681-b52d382432af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"},
    //     {_id:"2",name:"Shaheer",position:"React Developer",path:"https://images.unsplash.com/photo-1541647376583-8934aaf3448a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"},
    //     {_id:"3",name:"Saboor",position:"Engineer",path:"https://images.unsplash.com/photo-1547624643-3bf761b09502?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"},
    //     {_id:"4",name:"Mansoor",position:"Software Develoepr",path:"https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"},
    //     {_id:"5",name:"Hamza Iqbal",position:"JS developer",path:"https://images.unsplash.com/photo-1500048993953-d23a436266cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"},
    //     {_id:"6",name:"Hamza Iqbal",position:"JS developer",path:"https://images.unsplash.com/photo-1500048993953-d23a436266cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"},
    //     {_id:"7",name:"Hamza Iqbal",position:"JS developer",path:"https://images.unsplash.com/photo-1500048993953-d23a436266cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"},
    //     {_id:"8",name:"Hamza Iqbal",position:"JS developer",path:"https://images.unsplash.com/photo-1500048993953-d23a436266cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"},
    //     {_id:"9",name:"Hamza Iqbal",position:"JS developer",path:"https://images.unsplash.com/photo-1500048993953-d23a436266cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"},
    //     {_id:"10",name:"Hamza Iqbal",position:"JS developer",path:"https://images.unsplash.com/photo-1500048993953-d23a436266cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"},
    //     {_id:"11",name:"Hamza Iqbal",position:"JS developer",path:"https://images.unsplash.com/photo-1500048993953-d23a436266cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"},
    //     {_id:"12",name:"Hamza Iqbal",position:"JS developer",path:"https://images.unsplash.com/photo-1500048993953-d23a436266cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"},
    //     {_id:"13",name:"Hamza Iqbal",position:"JS developer",path:"https://images.unsplash.com/photo-1500048993953-d23a436266cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"},
    //     {_id:"14",name:"Hamza Iqbal",position:"JS developer",path:"https://images.unsplash.com/photo-1500048993953-d23a436266cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"}
    // ]
    const personList = ((item)=>{
        return(
        <Card style = {styles.mycard}
            onPress={()=>navigation.navigate("Profile",{item})}
        >
        <View style={styles.myView}>
        <Image style={{width:50,height:50,borderRadius:25}}
        source={{uri:item.pic}} />
        
        <View style={{marginLeft:15}}>
        <Text style = {styles.mytext}>{item.name}</Text>
        <Text>{item.position}</Text>
        </View>

        </View>
        
       </Card>
        )
    })
    return(
        <View style={{flex:1}}>
            {loading ? <ActivityIndicator size="large" color="#0000ff"/>:
            <FlatList
                data = {data} 
                renderItem={({item})=>{
                   return personList(item)

                }}
                keyExtractor={item=>{item._id}}
                onRefresh = {()=>fetchData()}
                refreshing = {loading}
            />
        }
            <FAB
                    onPress={()=>navigation.navigate("Create")}
                    style={styles.fab}
                    small={false}
                    icon="plus"
                    theme={{colors:{accent:"blue"}}}
                    
            />
        </View>
    )
}

const styles = StyleSheet.create({
    mycard:{
        margin:5,
    },
    myView:{
        flexDirection:"row",
        padding:6

    },
    mytext:{
        fontSize:19,
    },
    mytext1:{
        fontSize:9,
    },
    fab:{
        position:"absolute",
        margin:16,
        right:0,
        bottom:0
    }
})
export default Home