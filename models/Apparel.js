const { ApparelSchema } = require("../db/schema.js");
const mongoose = require("../db/connections.js");

module.exports = mongoose.model("Apparel", ApparelSchema);







