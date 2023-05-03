const ejs = require('ejs');
let getHomepage = (req, res) => {
    return res.render("/views/homepage.ejs");
};

module.exports = {
    getHomepage: getHomepage
};
