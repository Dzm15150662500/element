const express = require("express");
const app = express();
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});


// 当前地址API
app.get("/restapi/member/v2/users/14547420/location", (req, res) => {
    res.sendfile("./jsons/location.json");
})

// 筛选条API
app.get("/pizza/shopping/restaurants/batch_filter",(req,res)=>{
    res.sendfile("./jsons/batch_filter.json");
})

// 种类轮播图
app.get("/restapi/shopping/v2/entries",(req,res)=>{
    res.sendfile("./jsons/entries.json");
})

// 四张图片轮播API
app.get("/restapi/shopping/v2/banners",(req,res)=>{
    res.sendfile("./jsons/banners.json");
})

// 商家信息API
app.get("/restapi/shopping/v3/restaurants",(req,res)=>{
    res.sendfile("./jsons/rest.json");
})

//详情页 商家信息、商、点餐数据API
app.get("/pizza/shopping/restaurants/E11148873712992778706/batch_shop",(req,res)=>{
    res.sendfile("./jsons/batch_shop.json");
})


//商家评价 全部评价 API
app.get("/pizza/ugc/restaurants/E11148873712992778706/batch_comments",(req,res)=>{
    res.sendfile("./jsons/batch_comments.json");
})

// //商家评价 最新评价 API
app.get("/restapi/ugc/v3/restaurants/E11148873712992778706/ratings?has_content=true&tag_name=最新&offset=0&limit=20",(req,res)=>{
    res.sendfile("./jsons/ratings.json");
})

app.listen(3000, () => {
    console.log("3000....");
})