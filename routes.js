'use strict';

module.exports = function(app) {
    var jsonku = require('./controller');

    app.route('/')
        .get(jsonku.index);

    app.route('/tampilsemua')
        .get(jsonku.alldbdata);

    app.route('/tampil/:id')
        .get(jsonku.tampilberdasarkanid);
}