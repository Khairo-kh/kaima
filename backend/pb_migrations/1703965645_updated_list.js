/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("tgwyo2dhfmusql9")

  collection.name = "lists"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("tgwyo2dhfmusql9")

  collection.name = "list"

  return dao.saveCollection(collection)
})
