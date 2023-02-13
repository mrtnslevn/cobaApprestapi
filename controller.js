'use strict';

var response = require('./res');
var conn = require ('./connectdb');

exports.index = function(req, res){
    response.ok("running!", res)
}

//menampilkan data dari db semua data

exports.alldbdata = function(req, res){
    conn.query('SELECT * FROM mahasiswa', function(err, rows, fields){
        if (err) {
            conn.log(err);
        } else {
            response.ok(rows, res);
        }
    })
}


exports.tampilberdasarkanid = function(req, res) {
    let id =  req.params.id;
    conn.query('SELECT * FROM mahasiswa WHERE id_mahasiswa =?', [id], function(err, rows, fields){
        if (err) {
            conn.log(err);
        } else {
            response.ok(rows, res);
        }
    })
}