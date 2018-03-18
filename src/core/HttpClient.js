export default {
  get: (url) => fetch(url),
  post: (url, payload) => fetch(url, {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: {
      'Content-Type': 'application/json'
    }
  })
}