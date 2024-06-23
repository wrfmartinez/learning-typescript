let displayName: string = "Jess's standign desk";
let inventoryType: string = "furniture";
let trackingNumber: string = "FD123455";
let createDate: Date = new Date();
type Cost = number | string;
let originalCost: Cost = 425;

enum InventoryItemType {
  Computer = "computer",
  Furniture = "furniture"
}

interface InventoryItem {
  displayName: string;
  inventoryType: InventoryItemType;
  readonly trackingNumber: string;
  createDate: Date;
  originalCost?: number;

  addNote?: (note: string) => string;
}

const getInventoryItem = (trackingNumber: string): InventoryItem => {
  return null;
}

const saveInventoryItem = (item: InventoryItem) => {
  
}

let inventoryItem = getInventoryItem(trackingNumber);

let updatedInventoryItem = inventoryItem;

inventoryItem.createDate = new Date();

saveInventoryItem(inventoryItem);