import Cookies from 'js-cookie';
// used to extract XSRF-TOKEN cookie value

/*Define an async function called fetch that will take in url parameter and an options parameter that defaults to an empty object.*/
export async function fetch(url, options = {}) {
  // If options.method is not set, set it to the GET method.
  options.method = options.method || 'GET';

  // If options.headers is not set, default it to an empty object.
  options.headers = options.headers || {};


  // If it is any method other than a GET method, set the XSRF - TOKEN header on the options object to the extracted value of the XSRF - TOKEN cookie.
  if (options.method.toUpperCase() !== 'GET') {
    options.headers["Content-Type"] =
      options.headers['Content-Type'] || 'application/json';
    options.headers['XSRF-TOKEN'] = Cookies.get('XSRF-TOKEN');
  };

  // Call and await the window.fetch with the url and the options object to get the response.
  const res = await window.fetch(url, options);

  // If the response has a JSON body, then parse it using the.json method on the response.
  const contentType = res.headers.get('content-type');
  if (contentType && contentType.includes('application/json')) {
    const data = await res.json();
    // Set the parsed JSON body as a key of data on the response.
    res.data = data;
  }

  // If the response status code is 400 or above, throw the response as the error.Otherwise, return the response.

  if (res.status >= 400) throw res;

  return res;
};



export function restoreCSRF() {
  // Define and export a function that will call the custom fetch function with /api/csrf / restore as the url parameter.

  return fetch('/api/csrf/restore');

}



