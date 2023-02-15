import React from 'react';
import Membre from './Membre';

const Group = (props) => {
    console.log(props)
    return (
        <div className='group'>
        <ul>
            {props.props.data
            .filter((membre) => (membre.status === props.props.status))
            .map(
                (membre, index) => (
                    <Membre key={index} membre={membre} />
                )
            )}
        </ul>

        </div>
    );
};

export default Group;