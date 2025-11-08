// 🔥 DSA CHALLENGE - DAY 4 IS LIVE! 🔥

// Hey Warriors! 🛡
// We’re back with Day 4 of the DSA challenge and today’s problem is a real-world one — straight out of an invoice system! 💼

// It’s easy, fun, and will sharpen your array skills using .map() 🧠

// 💥 Let’s keep the momentum going. Remember: consistency builds champions.
// You showed up. Now show off your logic! 😎

// Problem:
// You’re working on an invoice management system. You have a list of invoice numbers and you need to format them by adding a prefix "INV-" to each.

// let invoices = [1001, 1002, 1003, 1004];

// // ✅ Expected Output:
// ['INV-1001', 'INV-1002', 'INV-1003', 'INV-1004']


let invoices= [1001, 1002, 1003, 1004];
const result = invoices.map((invoice) => {
    return 'INV-' + invoice;
})
console.log(result);