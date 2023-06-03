function ApiClient() {
  const RequestHandler = async () => {
    const response = await fetch(
      'https://dev.hisptz.com/dhis2/api/dataStore/saidmtanzania?fields=.'
    )
    const data = response.json()
    console.log(data)
  }
  return RequestHandler
}

export default ApiClient
