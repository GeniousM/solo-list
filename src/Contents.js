import React from 'react';

class Contents extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                {/* {this.props.todo} */}


                Contents
                <div className='input'>
                <input type='checkbox' id='cb' />
                contentscontentscontentscontents
                <input type='button' className='remButton' />
                </div>
                {/* {props.momos.map(list => (
                    <Contents

                    />
                ))} */}
            </div>
        )
    }
}

export default Contents