var express = require('express');
var router = express.Router();
var elasticsearch = require('elasticsearch');
var client = new elasticsearch.Client({
    host: 'localhost:9200'
});

router.use((req, res, next) => {
    console.log(req.method, req.url);
    next();
})

//GET all poligoni
router.get('/poligoni', (req, res) => {
    return res.status(200).send({
        message: "GET mesta call succeeded",
        poligoni: poligoni
    });
})

router.get('/poligoni/:id', (req, res) => {
    let poligon;

    client.get({
        index: 'poly',
        type: 'Poly',
        id: req.params.id
    }, function(err, resp, status) {
        if(err) {
            console.log(err)
        } else {
            poligon = resp._source;
            console.log(`Found the requested document`, resp)
            if(!poligon) {
                return res.status(400).send({
                    message: `Poligon is not found for id ${req.params.id}`
                })
            }
            return res.status(200).send({
                message: `GET poligon call for id ${req.params.id} succeeded`,
                poligon: poligon
            })
        }
    })
})

module.exports = router;