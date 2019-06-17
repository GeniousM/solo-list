import React from 'react';
import Contents from './Contents';

class Title extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <span className="item2">Title{this.props.title}
                </span><span><input type='button' className='addButton' /></span>
                
            </div>
        )
    }
}

export default Title