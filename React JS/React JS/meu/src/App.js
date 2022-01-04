import React, { Component } from "react";
import Feed from "./components/Feed";


class App extends Component {

    constructor (props){
        super(props);
        this.state ={
            feed:[
                {id:1, username: 'Ana', curtidas:10, comentarios:2},
                {id:2, username: 'Paula', curtidas:100, comentarios:20},
                {id:3, username: 'Luara', curtidas:1000, comentarios:200}
            ]
        };

     
    }


    render(){
        return(
            <div>
                
                {this.state.feed.map((item)=>{
                    return(
                        <Feed key={item.id} username={item.username} 
                                curtidas={item.curtidas} comentarios={item.comentarios}/>
                    );

                     })}

            </div>
               
        );
    }
}

export default App;