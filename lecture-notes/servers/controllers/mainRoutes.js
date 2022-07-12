const router = require("express").Router();

router.get("/", (req,res) =>{
    console.log(req.params)
    res.redirect('/test');
    console.log("route hit1");
})

router.get("/test", (req,res)=>{
    res.render('home',{
        title: 'test title',
        address: '/test',
        data: ["value1", "value2", "value3"]
    });

})

router.get("/page1", (req,res)=>{
    res.render('page1');
})

router.get("/page2", (req,res)=>{
    res.render('page2');
})

router.get('/:input', (req,res)=>{
    console.log(req.params)
    res.send(`Your input is ${req.params.input}`);
  })


module.exports = router