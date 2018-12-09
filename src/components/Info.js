import React from 'react'
import {View,Text} from 'react-native'


const Info = ({data}) => {
    const{emailInside,containerstyle,userstyle,namestyle,emailstyle,usernamestyle} = styles;
    
    return(
        <View style={containerstyle}>
            <View><Text style={userstyle}>Username : <Text style={usernamestyle}>{data.username}</Text></Text></View>
            <View><Text style={namestyle}>Name : <Text style={usernamestyle}>{data.name}</Text></Text></View>
            <View><Text style={emailstyle}>E-mail : <Text style={emailInside}>{data.email}</Text></Text></View>
        </View>
    );
};

const styles = {
    containerstyle:{
        borderWidth:1,
        borderRadius: 2,
        borderColor: '#b14021',
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
        padding: 10,
        backgroundColor:'#e7e7e7',
        borderStyle: 'solid',
        borderLeftWidth: 2,
        borderTopWidth: 0,
        borderRightWidth:0,  
        borderBottomWidth: 0,  
    },
    userstyle:{
       fontWeight: 'bold',
       fontSize: 15,
       color: '#b14021'
    },
    usernamestyle:{
       fontWeight: 'normal',
       fontSize: 15,
       color: '#6f8694'
    },
    namestyle:{
        fontWeight: 'bold',
        color: '#006865'
    },
    emailstyle:{
        fontWeight: 'bold',
        color: '#fd6571'
    },
    emailInside:{
        fontStyle: 'italic',
        color: '#6f8694',
        fontWeight: 'normal',
    }
};

export default Info;


