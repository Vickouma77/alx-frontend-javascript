import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';
// eslint-disable-next-line no-unused-vars
export default function handleProfileSignup(firstName, lastName, filename) {
  return Promise.allSettled([signUpUser, uploadPhoto])
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
