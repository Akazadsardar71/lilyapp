const form = document.getElementById('donationForm');
const table = document.getElementById('donationTable');

let donations = JSON.parse(localStorage.getItem('masjidDonations')) || [];

function saveDonations() {
  localStorage.setItem('masjidDonations', JSON.stringify(donations));
}

function renderDonations() {
  table.innerHTML = '';
  donations.forEach(d => {
    const row = table.insertRow();
    row.innerHTML = `
      <td>${d.name}</td>
      <td>${d.phone}</td>
      <td>৳${d.amount}</td>
      <td>${d.method}</td>
    `;
  });
}

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const amount = parseFloat(document.getElementById('amount').value);
  const method = document.getElementById('method').value;

  const donation = { name, phone, amount, method };
  donations.push(donation);
  saveDonations();
  renderDonations();
  form.reset();
});

// Initial render
renderDonations();
