importScripts('./pouchdb-7.2.1.js');

onmessage = function(e) {
  
  const db = new PouchDB("kittens");
  const number = e.data.number;

  function getRandomNumber() {
    return Math.random();
  }

  let docs = new Array();

  for (let i = 0; i < number; i++) {
    docs[i] = {
      _id: "keyx" + getRandomNumber(),
      name: "name",
    };
  }

  db.bulkDocs(docs)
    .then(function (res) {
      console.log(res, "added data - response");
    })
    .catch(function (err) {
      console.log(err);
    });

}