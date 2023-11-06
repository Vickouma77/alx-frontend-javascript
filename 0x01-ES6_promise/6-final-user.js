import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, filename) {
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(filename)])
    .then((results) => {
      for (const result of results) {
        if (result.status === 'rejected') {
          result.value = `${result.reason.name}: ${result.reason.message}`;
          delete result.reason;
          result.status = 'error';
        }
      }
      return results;
    });
}
