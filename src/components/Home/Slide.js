import React from 'react';
import PoulpiSlide from './PoulpiSlide';
import TextMinekrak from './TextMinekrak';
import TextPokemon from './TextPokemon';
import TextAlloZaman from './TextAlloZaman';
import TextAfterWork from './TextAfterWork';
import TextKrakCTF from './TextKrakCTF';

const Slide = ({ backgroundColor, poulpiName, banniere }) => {
    return (
        <div className='slide h-full w-full' style={{ backgroundColor }}>
            <div className='h-full w-full'>
                <PoulpiSlide poulpiName={poulpiName} />
                {poulpiName === "poulpikachu" ? <TextPokemon />: null}
                {poulpiName === "poulpiminekrak" ? <TextMinekrak />: null}
                {poulpiName === "minizaman" ? <TextAlloZaman />: null}
                {poulpiName === "poulpifete" ? <TextAfterWork />: null}
                {poulpiName === "kraken-logo" ? <TextKrakCTF />: null}

            </div>
        </div>
    );
};

export default Slide;