// পপ-আপ মেসেজ ফাংশন
function showAdmissionForm() {
  alert("ভর্তি ফর্ম শীঘ্রই যুক্ত হবে ইনশাআল্লাহ!");
}

// ভবিষ্যতের জন্য একটা সিম্পল টাইম গ্রীট
window.onload = function () {
  const now = new Date();
  const hour = now.getHours();
  let message = "";

  if (hour < 12) {
    message = "সুপ্রভাত!";
  } else if (hour < 18) {
    message = "শুভ অপরাহ্ন!";
  } else {
    message = "শুভ সন্ধ্যা!";
  }

  console.log("স্বাগতম: " + message);
};
