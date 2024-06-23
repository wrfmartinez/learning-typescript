let displayName = "Jess's standign desk";
let inventoryType = "furniture";
let trackingNumber = "FD123455";
let createDate = new Date();
let originalCost = 425;
var InventoryItemType;
(function (InventoryItemType) {
    InventoryItemType["Computer"] = "computer";
    InventoryItemType["Furniture"] = "furniture";
})(InventoryItemType || (InventoryItemType = {}));
const getInventoryItem = (trackingNumber) => {
    return null;
};
const saveInventoryItem = (item) => {
};
let inventoryItem = getInventoryItem(trackingNumber);
let updatedInventoryItem = inventoryItem;
inventoryItem.createDate = new Date();
saveInventoryItem(inventoryItem);
