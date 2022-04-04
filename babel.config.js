/*module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
};*/
//Added to integrate with Expo react web app auto detection
module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo']
  };
};