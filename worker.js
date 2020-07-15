importScripts('./pouchdb-7.2.1.js');

function getRandomNumber() {
  return Math.random();
}

const db = new PouchDB("kittens");

onmessage = async function(e) {  
  const { number } = e.data;

  switch (number) {
    case 'getAll':
      console.log(await db.allDocs());

      break;
    case 'deleteAll': 
      const allDocs = await db.allDocs();
      
      for (let i = 0; i < allDocs.total_rows; i++) {
        await db.remove(allDocs.rows[i].id, allDocs.rows[i].value.rev);
      }
      console.log("Deleted all docs");

      break;
    default:
      let docs = new Array();

      for (let i = 0; i < number; i++) {
        docs[i] = {
          _id: "keyx" + getRandomNumber(),
          name: "name",
        };
      }
    
      db.bulkDocs(docs).then(function (res) {
        console.log(res, "added data - response");
      }).catch(function (err) {
        console.log(err);
      });

      break;
  }
}
