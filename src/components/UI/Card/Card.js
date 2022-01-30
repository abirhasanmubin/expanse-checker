import React from "react";
import './Card.css'

class Card extends React.Component {
    classes = 'card ' + this.props.className;

    render() {
        return (<div className={this.classes}>{this.props.children}</div>)
    }
}

export default Card;