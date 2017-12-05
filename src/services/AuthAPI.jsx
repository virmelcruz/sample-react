import API from './API'

const AuthAPI = {
  signIn(data, onSuccess) {
    console.log(data);
    API({
      data: data,
      url: '',
      method: 'POST',
      onSuccess: onSuccess
    })
  }
}

export default AuthAPI
