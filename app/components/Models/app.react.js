import THREE from 'three';
import React from 'react';

import Model from './Goemon/model.react';


/* main react component, the only component with state */

class App extends React.Component{

  static displayName = 'App';

  constructor(props){
    super(props);
    this.state = SettingsStore.getSettings();
    this.onChangeListener = this.onChange.bind(this);
  }

  componentDidMount() {
    SettingsStore.addChangeListener(this.onChangeListener);
    window.addEventListener('resize', this.onChangeListener);
  }

  componentWillUnmount() {
    SettingsStore.removeChangeListener(this.onChangeListener);
    window.removeEventListener('resize', this.onChangeListener);
  }

  onChange(){
    let state = SettingsStore.getSettings();
    this.setState(state);
  }

  render(){
    return(
      <div>
        <Scene3D
          forceManualRender={false}
          cameraPosition={this.state.cameraPosition}
          cameraQuaternion={this.state.cameraQuaternion}
        >
          <World
            position={new THREE.Vector3(0, 0, 0)}
            worldRotation={this.state.worldRotation}
          >
          </World>
          <Model
            key={THREE.Math.generateUUID()}
            position={new THREE.Vector3(0, 0, 0)}
            parsedModel={this.state.parsedModel}
            mergeGeometries={this.state.mergeGeometries}
          />
        </Scene3D>
        <Stats />
      </div>
    );
  }
}

//App.propTypes = {};

export default App;