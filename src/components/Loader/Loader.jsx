import React from 'react'
import Lottie from 'react-lottie';
import * as loading from '../../img/loading-cat.json'

const defaultOptions = {
      loop: true,
      autoplay: true, 
      animationData: loading.default,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
};

const Loader = () => {
    return (
        <Lottie options={defaultOptions} height={400} width={400}/>
    );
}

export default Loader;