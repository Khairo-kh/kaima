/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "tgwyo2dhfmusql9",
    "created": "2023-12-30 07:29:19.035Z",
    "updated": "2023-12-30 07:29:19.035Z",
    "name": "list",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "lstn84ag",
        "name": "name",
        "type": "text",
        "required": true,
        "presentable": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "h3woykfi",
        "name": "description",
        "type": "text",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "o3a5pprs",
        "name": "image",
        "type": "file",
        "required": false,
        "presentable": true,
        "unique": false,
        "options": {
          "mimeTypes": [],
          "thumbs": [
            "120x120"
          ],
          "maxSelect": 1,
          "maxSize": 9242880,
          "protected": false
        }
      },
      {
        "system": false,
        "id": "dcjvsyhy",
        "name": "user",
        "type": "relation",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": true,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("tgwyo2dhfmusql9");

  return dao.deleteCollection(collection);
})
