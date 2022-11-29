const router = require('express').Router();

router.get('/test', (req, res) => {
    console.log("test!");
})

router.post("/msg", (req, res) => {
    console.log(req.body)
    connection.query('INSERT INTO plans (topic, notes, resources) VALUES (?,?,?)', [req.body.topic, req.body.note, req.body.resource],(error, 
    results) => {
       if (error) return res.json({ error: error });
       });
   });



module.exports = router;