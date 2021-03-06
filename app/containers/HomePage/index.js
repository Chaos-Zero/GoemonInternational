require('babel-polyfill');

import React from 'react';
//import Model from 'components/Models/Goemon/model.react';
import ReactDOM from 'react-dom';
import App from 'components/models/app.react';

window.onload = function(){

  ReactDOM.render(
    <App />,
    document.getElementById('app')
  );
};

/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

/*import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import EntranceAnimation from 'components/EntranceAnimation';


export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <EntranceAnimation>
            </EntranceAnimation>


    );
  }
}
*/

/*
import React from 'react';
import React3 from 'react-three-renderer';
import * as THREE from 'three';
//import Model from 'components/Models/Goemon/model.react';
import ReactDOM from 'react-dom';

class Simple extends React.Component {
  constructor(props, context) {
    super(props, context);


// construct the position vector here, because if we use 'new' within render,
// React will think that things have changed when they have not.
this.cameraPosition = new THREE.Vector3(0, 0, 5);

this.state = {
  cubeRotation: new THREE.Euler(),
};

this._onAnimate = () => {

  
  // we will get this callback every frame

  // pretend cubeRotation is immutable.
  // this helps with updates and pure rendering.
  // React will be sure that the rotation has now updated.
  this.setState({
    cubeRotation: new THREE.Euler(
      this.state.cubeRotation.x + 0.01,
      this.state.cubeRotation.y + 0.01,
      0
    ),
  });
};
  }

  render() {
    const width = window.innerWidth; // canvas width
    const height = window.innerHeight; // canvas height

    

return (<React3
  mainCamera="camera" // this points to the perspectiveCamera which has the name set to "camera" below
  width={width}
  height={height}

  onAnimate={this._onAnimate}
>
  <scene>
    <perspectiveCamera
      name="camera"
      fov={75}
      aspect={width / height}
      near={0.1}
      far={1000}

      position={this.cameraPosition}
    />
    <mesh
      rotation={this.state.cubeRotation}
    >
      <boxGeometry
        width={1}
        height={1}
        depth={1}
      />
      <meshBasicMaterial
        color={0x00ff00}
      />
    </mesh>
  </scene>
</React3>);


}

    }

    ReactDOM.render(<Simple/>, document.body);
*/
