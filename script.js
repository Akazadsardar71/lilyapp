import { getDatabase, ref, push } from "firebase/database";

const donationForm = document.getElementById('donationForm');

donationForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const mobile = document.getElementById('mobile').value;
    const paymentMethod = document.getElementById('paymentMethod').value;
    const transactionId = document.getElementById('transactionId').value;
    const amount = document.getElementById('amount').value;

    const database = getDatabase();
    const donationsRef = ref(database, 'donations');

    const newDonation = {
        name: name,
        mobile: mobile,
        paymentMethod: paymentMethod,
        transactionId: transactionId,
        amount: amount,
        timestamp: new Date().toISOString()
    };

    push(donationsRef, newDonation)
        .then(() => {
            alert('আপনার দান সফলভাবে জমা হয়েছে।');
            donationForm.reset();
        })
        .catch((error) => {
            console.error("Error saving donation:", error);
            alert('দান তথ্য জমা দিতে সমস্যা হয়েছে। অনুগ্রহ করে আবার চেষ্টা করুন।');
        });
});
