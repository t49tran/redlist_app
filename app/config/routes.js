var route__countries = new Router({
    prefix: 'countries'
});

var route__species = new Router({
    prefix: 'species'
});

var route__api = new Router({
    prefix: 'api'
});


route__api.use("/",route__countries.routes(),route__countries.allowedMethods());
route__api.use("/",route__species.routes(),route__species.allowedMethods());

export default route__api;