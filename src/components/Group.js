import React from 'react';
import Membre from './Membre';
import TitleBar from './TitleBar';
import img from '../assets/img/param.dave.jpg'

const Group = ({props}) => {
    return (
        <div className='group' style={
            { backgroundImage: `url(${props.background})`, height:  'auto'}
        }>
            <TitleBar props={{title: props.title}}/>
            <ul>
                {props.data
                    .filter((membre) => (membre.status === props.status))
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