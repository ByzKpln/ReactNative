import React from 'react';
import { Text , View} from 'react-native';

const Header = () => {
    const{ textStyle , viewStyle } = styles;
    return ( 
    <View style={viewStyle}>
        <Text style={textStyle}> Users </Text>
    </View>
    );
};

const styles = {
    textStyle : {
        fontSize:25,
        color:'white'
    },
    viewStyle : {
        backgroundColor : '#990000',
        height:40,
        justifyContent: 'center',
        marginTop:0,
        alignItems: 'center'
    }
};

export default Header;