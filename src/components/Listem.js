import React,{Component} from 'react'
import {ScrollView} from 'react-native'
import axios from 'axios'
import Info from './Info'

class Listem extends Component {
    state = {data:[]};


componentWillMount()
{
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response =>this.setState({data: response.data}));
}

renderData(){
    return this.state.data.map((responseData, Id)=>
    <Info key={Id} data={responseData} />
    );
}

    render(){
        console.log('Data '+ this.state);
        console.log('render');
        return(
            <ScrollView style={{marginTop:5}}>
 
                {this.renderData()}
            </ScrollView>
        );
    }
}

export default Listem;