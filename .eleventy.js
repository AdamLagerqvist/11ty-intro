module.exports = function(eleventyConfig) {
    
    eleventyConfig.addPassthroughCopy("src/img");
    eleventyConfig.addWatchTarget("src/img");

    return{
        dir: {
            input: "src",
            output: "dist",
        },
    };
};