import React from 'react'
import "../styles/carrusell.css";

const images = [];
    const importAll = (r) => {
      r.keys().forEach((key) => images.push(r(key)));
    };
    importAll(require.context('./images/header', false, /\.(png|jpg|svg)$/));

    console.log(images)


const delay = 3750;

export const Carrusell = React.forwardRef((props, ref, event) => {
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
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className='slideshow' ref={ref}>
        <div className='slideControls'>
          <div className='slideshowSlider' style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
            {images.map((images, index) => (
              <div className='slide' key={index} style={{ backgroundImage: `url(${images})`  }}>
                
              </div>
            ))}
          </div>
        </div>
    </div>
  );
});