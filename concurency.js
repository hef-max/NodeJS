
class NetworkError extends Error {
    constructor(message) {
      super(message);
      this.name = 'NetworkError';
    }
  }
  
  // TODO: 1
  const fetchingUserFromInternet = (isOffline) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if(isOffline) {
          reject(new NetworkError('Gagal mendapatkan data dari internet'), null);
        }
        resolve({ name: 'John', age: 18 }); //ini dibenerin jadi promise (manfaatkan .then atau asyn/await)
      }, 500);
    });
  };
  
  
  // TODO: 2
  const gettingUserName = async () => {
    try{
      const user = await fetchingUserFromInternet(false); //rubah penulisan kode menggunakan promise, agar lebih rapih gunakan asyn/awaits
      return user.name;
    }
    catch(rejectedReason){
        return rejectedReason;
    }
  };
  
  (async () => {
    console.log(await gettingUserName());
  })();

  /**
   * Abaikan kode di bawah ini
   */
  
  //module.exports = { fetchingUserFromInternet, gettingUserName, NetworkError };
  