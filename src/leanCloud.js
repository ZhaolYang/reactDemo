import AV from 'leancloud-storage';

var APP_ID = 'MrCHGB9r2KXfAxOvFV0sFn1m-gzGzoHsz';
var APP_KEY = 'EittrmESiQcXJRwqyiq3lgCw';
AV.init({
  appId: APP_ID,
  appKey: APP_KEY
})

export default AV;

export function signUp(username, password, successFn, errorFn){
  var user = new AV.User();

  user.setUsername(username);

  user.setPassword(password);

  user.signUp().then(function (loginedUser) {
    let user = getUserFromAVUser(loginedUser);
    successFn.call(null, user);
  }, function (error) {
    errorFn.call(null, error);
  })

  return undefined;
}

export function getCurrentUser(){
  let user = AV.User.current();
  if(user){
    return getUserFromAVUser(user);
  }else {
    return null;
  }
}

function getUserFromAVUser(AVUser){
  return {
    id: AVUser.id,
    ...AVUser.attributes
  }
}