import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, filename) {
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(filename)])
    .then((results) => {
      const rejected = results.filter((result) => result.status === 'rejected');
      const errors = rejected.map((result) => result.reason.toString());
      const resolved = results.filter((result) => result.status === 'fulfilled');
      const messages = resolved.map((result) => result.value.body);
      return { errors, messages };
    });
}
