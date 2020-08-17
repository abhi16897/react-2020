import React from 'react';

class ScoreContainer extends React.Component {
    state = {  }
    render() { 
        return (  
            <button onClick={this.ScoreIncrease}>+</button>
        );
    }
}
 
export default ScoreContainer;