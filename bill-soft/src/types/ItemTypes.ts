export interface AddItemData {
  itemName: string;
  category: string;
  measuringUnit: string;
  taxApplicable: string;
  salesPrice: number;
  gstRate: number;
  openingStock: number;
  showOnline: boolean;
  productType: "Product" | "Services";
}
