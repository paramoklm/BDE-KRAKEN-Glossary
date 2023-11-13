import React from 'react';
import Slide from './Slide';

const colors = ["#FDD681", "#93D4FA", "#302B5A", "#D82D68", "#929292"];
const delay = 5000;

const Slideshow = () => {
    const [index, setIndex] = React.useState(0);
    const timeoutRef = React.useRef(null);

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    React.useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () =>
                setIndex((prevIndex) =>
                    prevIndex === colors.length - 1 ? 0 : prevIndex + 1
                ),
            delay
        );

        return () => {
            resetTimeout();
        };
    }, [index]);
    return (
        <div className="slideshow h-1/5 my-12">
            <div
                className="slideshowSlider h-2/3 my-2"
                style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
            >
                <Slide backgroundColor={colors[0]} key={0} poulpiName="poulpikachu" banniere="pokemon-banniere" />
                <Slide backgroundColor={colors[1]} key={1} poulpiName="poulpiminekrak" banniere="minekrak-banniere" />
                <Slide backgroundColor={colors[2]} key={2} poulpiName="minizaman" banniere="pokemon-banniere" />
                <Slide backgroundColor={colors[3]} key={3} poulpiName="poulpifete" banniere="pokemon-banniere" />
                <Slide backgroundColor={colors[4]} key={4} poulpiName="poulpictf" banniere="pokemon-banniere" />
            </div>

            <div className="slideshowDots">
                {colors.map((_, idx) => (
                    <div
                        key={idx}
                        className={`slideshowDot${index === idx ? " active" : ""}`}
                        onClick={() => {
                            setIndex(idx);
                        }}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default Slideshow;