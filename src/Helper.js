const BASE_URL = 'https://fathomless-savannah-46209.herokuapp.com';

const TOKEN = '070dee92b3fff544f46813a9f08f8648d35afb9f7d35575672f34296428affd530b03032c48b6b669d7ad018c5ac7e6a3bfef808d074e86d05cb941dd91c6f4a6101967d5c81090aed853960513c153d44224a6ab71f133aa55237df9c6b7df22177ee03193f7898a72c68a57525b1ddb01d9fb63b9f3893555629e2e033e0e0';

let header = {
    'Authorization': 'Bearer ' +TOKEN,
    'Content-Type': 'application/json',
    'accept': 'application/json',
    
  };
module.exports = { BASE_URL , header}