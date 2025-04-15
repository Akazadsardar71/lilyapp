// ভর্তি ফর্ম সাবমিশন হ্যান্ডেল
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".admission form");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("ধন্যবাদ! আপনার তথ্য সফলভাবে জমা হয়েছে।");
      form.reset();
    });
  }

  // নোটিশ ডেমো (চাইলে ভবিষ্যতে API দিয়ে যুক্ত করা যাবে)
  const noticeList = document.querySelector(".notice ul");
  const newNotice = document.createElement("li");
  newNotice.textContent = "ইফতারের সময়সূচি ওয়েবসাইটে আপলোড করা হয়েছে।";
  noticeList.appendChild(newNotice);
});
