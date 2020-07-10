var db = new PouchDB("kittens", { adapter: "worker" });

function getRandomNumber() {
  return Math.random();
}

function Add10Entries(amount) {
  var docs = new Array();
  for (let i = 0; i < amount; i++) {
    var doc = {
      _id: "keyx" + getRandomNumber(),
      name: "name",
    };
    docs[i] = doc;
  }
  db.bulkDocs(docs)
    .then(function (res) {
      console.log(res, "added data - response");
    })
    .catch(function (err) {
      console.log(err);
    });
}

async function GetAllEntries(amount) {
  console.log(await db.allDocs());
}

async function DeleteAllDocs() {
  const allDocs = await db.allDocs();
  for (let i = 0; i < allDocs.total_rows; i++) {
    await db.remove(allDocs.rows[i].id, allDocs.rows[i].value.rev);
  }
  console.log("Deleted all docs");
}
