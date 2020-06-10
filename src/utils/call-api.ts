const headers = new Headers({
  Accept: 'application/json',
  'Content-Type': 'application/json',
});

// @ts-ignore
export default async function callApi(endpoint, options) {
  const request = {
    headers,
    method: options.method,
    body: JSON.stringify(options.body),
  };

  return fetch(endpoint, request)
    .then((response) =>
      response.text().then((responseBodyText) =>
        Object.assign(response, {
          payload: responseBodyText ? JSON.parse(responseBodyText) : {},
        })
      )
    )
    .then((adjustedResponse) => {
      const payload = adjustedResponse.payload ? adjustedResponse.payload : {};
      return adjustedResponse.ok ? Promise.resolve(payload) : Promise.reject(payload);
    });
}
