import AppDispatcher from 'containers/HomePage/app_dispatcher';
import ActionTypes from 'containers/HomePage/constants';

export default {

  updateModel(e){
    AppDispatcher.dispatch({
      type: ActionTypes.UPDATE_MODEL,
      payload: {
        model: e.model
      }
    });
  },

  updateCamera(e){
    AppDispatcher.dispatch({
      type: ActionTypes.UPDATE_CAMERA,
      payload: {
        position: e.position,
        quaternion: e.quaternion
      }
    });
  }
};
