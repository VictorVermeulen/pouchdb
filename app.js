var db = new PouchDB("kittens", { adapter: "worker" });
var docs = new Array();
for (i = 0; i < 1000000; i++) {
  var doc = {
    _id: "keyx" + i,
    name: "name",
  };
  docs[i] = doc;
}
db.bulkDocs(docs)
  .then(function (res) {})
  .catch(function (err) {
    console.log(err);
  });
