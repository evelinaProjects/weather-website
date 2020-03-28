const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiZXZlbGlua2EiLCJhIjoiY2swdWhyMmQ0MGk0bzNucXB6c2E4b3AxeiJ9.Y5-CY-7I3qOR7shSlTPXuw&limit=1'

    request({ url, json: true }, (error, { body }={}) => {
       if (error) {
            return callback('Unable to connect to location services!', undefined)
        } else if (body.features.length === 0) {
            return callback('Unable to find location. Try another search.', undefined)
        } else {
            return callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode