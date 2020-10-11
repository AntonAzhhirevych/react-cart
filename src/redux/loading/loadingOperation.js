import changeLoading from './loadingAction';

const setLoading = boolean => dispatch => dispatch(changeLoading(boolean));

export default setLoading;
