let customers = [];

// ক্রেতা যোগ করার ফাংশন
document.getElementById("customerForm").addEventListener("submit", function(e) {
    e.preventDefault();

    // ক্রেতার ইনফরমেশন সংগ্রহ
    let name = document.getElementById("customerName").value;
    let phone = document.getElementById("customerPhone").value;
    let email = document.getElementById("customerEmail").value;

    let customer = { name, phone, email };
    customers.push(customer);

    // ফর্ম রিসেট
    document.getElementById("customerForm").reset();

    // ক্রেতা তালিকা আপডেট
    displayCustomers();
});

// ক্রেতা তালিকা প্রদর্শন
function displayCustomers() {
    const customerTable = document.getElementById("customerTable");
    customerTable.innerHTML = "";

    customers.forEach((customer, index) => {
        let row = `<tr>
            <td>${customer.name}</td>
            <td>${customer.phone}</td>
            <td>${customer.email}</td>
            <td><button onclick="deleteCustomer(${index})">মুছুন</button></td>
        </tr>`;
        customerTable.innerHTML += row;
    });
}

// ক্রেতা মুছানোর ফাংশন
function deleteCustomer(index) {
    customers.splice(index, 1); // ক্রেতা মুছে ফেলা
    displayCustomers(); // পুনরায় ক্রেতা তালিকা প্রদর্শন
}

document.getElementById("dailyReportBtn").addEventListener("click", function() {
    let today = new Date().toLocaleDateString();
    let dailySales = sales.filter(sale => new Date(sale.date).toLocaleDateString() === today);
    
    displayReport(dailySales, "দৈনিক রিপোর্ট");
});

document.getElementById("monthlyReportBtn").addEventListener("click", function() {
    let currentMonth = new Date().getMonth();
    let monthlySales = sales.filter(sale => new Date(sale.date).getMonth() === currentMonth);
    
    displayReport(monthlySales, "মাসিক রিপোর্ট");
});

function displayReport(salesData, reportType) {
    let reportDiv = document.getElementById("reportResult");
    reportDiv.innerHTML = `<h3>${reportType}:</h3><ul>`;

    salesData.forEach(sale => {
        let saleDate = new Date(sale.date).toLocaleDateString();
        reportDiv.innerHTML += `<li>${sale.productName} - ${sale.quantitySold} পণ্য বিক্রি, মোট মূল্য: ৳${sale.saleAmount} (তারিখ: ${saleDate})</li>`;
    });

    reportDiv.innerHTML += "</ul>";
}
