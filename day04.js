
let invoices= [1001, 1002, 1003, 1004];
const result = invoices.map((invoice) => {
    return 'INV-' + invoice;
})
console.log(result);