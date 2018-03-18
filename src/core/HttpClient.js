export default {
  get: (url) => fetch(url).then(response => response.json()),
  post: (url, payload) => fetch(url, {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: {
      'Content-Type': 'application/json'
    },
    mode: 'cors'
  }).then(response => response.json())
}