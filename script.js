document.getElementById("paymentForm").addEventListener("submit", function(e){
  e.preventDefault();
  
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const amount = document.getElementById("amount").value;

  // এখানে আপনি আপনার পেমেন্ট গেটওয়ের API ব্যবহার করবেন (Bkash, Nagad, SSLCommerz ইত্যাদি)
  alert(${name}, অনুগ্রহ করে ${amount} টাকা পেমেন্ট সম্পন্ন করুন!);
  
  // উদাহরণস্বরূপ: bkash link এ রিডাইরেক্ট
  window.location.href = https://www.bkash.com/payment-link-example; // আপনার আসল লিংক বসান
});
