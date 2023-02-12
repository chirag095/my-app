


require("babel-register")({
    presets: ["es2015", "react"]
  });
   
  const router = require("./sitemap-routes").default;
  const Sitemap = require("react-router-sitemap").default;
  
  const AWSAmplify = require("aws-amplify");
  const Amplify = AWSAmplify.default;
  const API = AWSAmplify.API;
  const config = require("../config").default;
  
  Amplify.configure({
    API: {
      endpoints: [
        {
          name: "posts",
          endpoint: config.apiGateway.URL,
          region: config.apiGateway.REGION
        },
      ]
    }
  });
  
  async function generateSitemap() {
    try {
      const posts = await API.get("posts", "/posts");
      let idMap = [];
  
      for(var i = 0; i < posts.length; i++) {
        idMap.push({ id: posts[i].postId });
      }
  
      const paramsConfig = {
        "/blog/:id": idMap
      };
  
      return (
        new Sitemap(router)
            .applyParams(paramsConfig)
            .build("https://www.vistaarr.in")
            .save("./public/sitemap.xml")
      );
      const mySitemap = new Sitemap(router)
.applyParams(paramsConfig)
.build("https://www.example.com");

for (let i = 0; i < mySitemap.sitemaps[0].urls.length; i++) {
mySitemap.sitemaps[0].urls[i].changefreq = "daily"; // set desired value here
mySitemap.sitemaps[0].urls[i].priority = 0.8; // set desired value here
}

return mySitemap.save("./public/sitemap.xml");


    } catch(e) {
      console.log(e);
    } 
  }
  
  generateSitemap();