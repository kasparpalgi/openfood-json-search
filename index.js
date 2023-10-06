import OFF from "openfoodfacts-nodejs";
const client = new OFF();

client.getProduct("4056489167501").then(console.log);