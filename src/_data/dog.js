const Cache = require('@11ty/eleventy-cache-assets');

const index = Math.round(Math.random()*100);

module.exports = async function () {
    try {
        let json = await Cache(`https://dog-facts-api.herokuapp.com/api/v1/resources/dogs?index=${index}`, {
            duration: '1d', // 1 day
            type: 'json' // also supports "text" or "buffer"
        });
        return json;
    } catch (e) {
        console.log(e);
        return {};
    }
};