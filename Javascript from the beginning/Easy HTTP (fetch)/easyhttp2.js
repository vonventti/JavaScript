class EasyHTTP {
  
  // Make an HTTP GET Request
  get(url) {
    return new Promise((res, rej) => {
      fetch(url)
      .then(res => res.json())
      .then(data => res(data))
      .catch(err => rej(err));
    });
  }

  // Make an HTTP POST Request
  post(url, data) {
    return new Promise((res, rej) => {
      fetch(url, {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then(data => res(data))
      .catch(err => rej(err));
    });
  }

  // Make an HTTP PUT Request
  put(url, data) {
    return new Promise((res, rej) => {
      fetch(url, {
        method: "PUT",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then(data => res(data))
      .catch(err => rej(err));
    });
  }

  // Make a HTTP DELETE Request
  delete(url) {
    return new Promise((res, rej) => {
      fetch(url, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json"
        }
      })
      .then(res => res.json())
      .then(data => res("Resource Deleted..."))
      .catch(err => rej(err));
    });
  }
}


