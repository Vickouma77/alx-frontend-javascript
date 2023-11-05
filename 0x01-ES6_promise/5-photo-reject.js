export default function uploadPhoto(filename) {
  return Promise.reject(new Error(`Can't upload ${filename}`));
}
