import React from 'react';
import Slide from './Slide';

const colors = ["#FDD681", "#93D4FA", "#FFBB28"];
const delay = 2500;

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
                <Slide index={0} backgroundColor={colors[0]} key={0} poulpiName="poulpikachu" banniere="pokemon-banniere" />
                <Slide index={0} backgroundColor={colors[1]} key={1} poulpiName="poulpiminekrak" banniere="minekrak-banniere" />
                <Slide index={0} backgroundColor={colors[0]} key={0} poulpiName="poulpikachu" banniere="pokemon-banniere" />
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