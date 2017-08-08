import * as THREE from 'three';
import EventEmitter from 'events';
import ActionTypes from 'containers/HomePage/constants';
import AppDispatcher from 'containers/HomePage/app_dispatcher';
import Globals from 'containers/HomePage/globals';
import ParsedModel from 'components/modelImporter/parsed_model';
import { isFSA } from 'flux-standard-action';

let CHANGE_EVENT = 'change';


class SettingsStore extends EventEmitter {

  constructor () {
    super();

    this.worldRotation = Globals.WORLD_ROTATION;
    this.cameraPosition = new THREE.Vector3(0, 300, 500);
    this.cameraQuaternion = new THREE.Quaternion();
    this.mergeGeometries = false;
    this.parsedModel = new ParsedModel();
    // add a bit delay so you can see what is happening
    setTimeout(() => {
     //this.parsedModel.load('bbq.json', {scale: 0.6}).then(
        this.parsedModel.load('components/models/eggman/eggman.json', {scale: 0.6}).then(
        //resolve
        () =>{
          this.emitChange();
        }
      );
    }, 3000);

    AppDispatcher.register((action) => {
      this.handle(action);
    });
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

  getSettings() {

    let settings = {
      mergeGeometries: this.mergeGeometries,
      parsedModel: this.parsedModel,
      worldRotation: this.worldRotation,
      cameraPosition: this.cameraPosition,
      cameraQuaternion: this.cameraQuaternion
    };
    return settings;
  }

  handle(action) {

    if(isFSA(action) === false){
      console.error('action not FSA compliant');
    }

    switch(action.type) {

      case ActionTypes.UPDATE_CAMERA:
        this.cameraPosition = action.payload.position;
        this.cameraQuaternion = action.payload.quaternion;
        this.emitChange();
        break;

      default:
      // do nothing
    }
  }
}

export default new SettingsStore();
