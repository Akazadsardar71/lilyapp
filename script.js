// পপ-আপ মেসেজ ফাংশন
function showAdmissionForm() {
  alert(function submitForm(event) {
  event.preventDefault(); // রিফ্রেশ বন্ধ রাখে
  alert("আপনার ভর্তি ফর্ম সফলভাবে জমা হয়েছে! ইনশাআল্লাহ কর্তৃপক্ষ শীঘ্রই যোগাযোগ করবে।");
}");
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
