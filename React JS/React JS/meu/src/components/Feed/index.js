import React, { Component } from "react";
class Feed extends Component {
    render(){
        return(
            <div key={this.props.id}>
                <h3>{this.props.username}
                <a>{this.props.curtidas} Curtidas / {this.props.cometarios} Comentarios</a></h3>
            </div>
        );
    }
}

export default Feed;