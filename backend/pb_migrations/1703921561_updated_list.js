/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("tgwyo2dhfmusql9")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "1wdjjytz",
    "name": "items",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "cfv65acsflrqrz7",
      "cascadeDelete": true,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("tgwyo2dhfmusql9")

  // remove
  collection.schema.removeField("1wdjjytz")

  return dao.saveCollection(collection)
})
