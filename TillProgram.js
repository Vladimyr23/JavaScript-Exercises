//Vladimir Yesipov
//Till program

//Variables
var ItemPrice = 0;
var VAT = 0.2;
var ItemVAT = 0;
var TotalVAT = 0;
var ItemPriceInclVAT = 0;
var TotalPrice = 0;
var Total = 0;

while (Total <= 100) {
    ItemPrice = prompt("Please enter the item price:");
    //Totalshopping price excluding VAT
    TotalPrice = TotalPrice + ItemPrice;
    //Item VAT
    ItemVAT = ItemPrice * VAT;
    //Total shopping VAT
    TotalVAT = TotalVAT + ItemVAT;
    //Item price including VAT
    ItemPriceInclVAT = ItemPrice + ItemVat;
    //Total to be paid
    Total = Total + TotalPriceInclVAT;
    alert("Item price " + ItemPrice + " +VAT " + ItemVAT + "\n Total for this item" + ItemPriceInclVAT + \n "Total price" + TotalPrice + " + VAT" + TotalVAT\n + "Total Including VAT " + Total);
}