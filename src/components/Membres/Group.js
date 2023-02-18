import React from 'react';
import Membre from './Membre';
import TitleBar from './TitleBar';
import data from "./../data/data.json"

const Group = ({props}) => {
    return (
        <div className='group' style={
            { backgroundImage: `url(${props.background})`, height:  'auto'}
        }>
            <TitleBar props={{title: props.title}}/>
            { props.status === "bureau" ?
                <ul>
                    <Membre className="flex justify-center items-center" key={-1} membre={data[0]}/>
                </ul> : null }
            <ul>
                {props.data
                    .filter((membre) => (membre.status === props.status))
                    .map(
                        (membre, index) => (
                            <Membre className="" key={index} membre={membre} />
                        )
                    )}
            </ul>

        </div>
    );
};

export default Group;