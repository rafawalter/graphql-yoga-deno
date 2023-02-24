export const countries = async () => {
  const response = await fetch('https://restcountries.com/v3.1/all')
  const countries = await response.json()
  return countries.map(country => {
    let name = '<sei não>'
    if (typeof country.name === 'string' || country.name instanceof String) {
      name = country.name
    }
    if (typeof country.name.common === 'string' || country.name.common instanceof String) {
      name = country.name.common
    }
    return {
      name,
      region: country.region,
      subregion: country.subregion,
    }
  })
}
