import React from 'react';
import Title from './title';

class List extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div> 
            <span><input className="searchMemo" type="text" />
            <input type='button' className='pos_right' /></span>
            {/* {props.momos.map(list => (
                <Title

                />
            ))} */}
            </div>
        )
    }
}

export default List;

// value={} onChange={}