const changeDataFormat = data =>
  Object.keys(data).map(key => ({ ...data[key], id: key }));

export default changeDataFormat;
