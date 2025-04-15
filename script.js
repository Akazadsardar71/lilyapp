// DOM এলিমেন্টস
const loginForm = document.getElementById('login-form');
const loginSection = document.getElementById('login-section');
const dashboard = document.getElementById('dashboard');
const logoutBtn = document.getElementById('logout-btn');
const menuItems = document.querySelectorAll('.menu-item');
const contentAreas = document.querySelectorAll('.content');
const addStudentBtn = document.getElementById('add-student-btn');
const addStudentModal = document.getElementById('add-student-modal');
const closeModal = document.querySelector('.close-modal');
const cancelAddStudent = document.getElementById('cancel-add-student');
const addStudentForm = document.getElementById('add-student-form');

// লগইন সিস্টেম
loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // এখানে সার্ভারে লগইন রিকোয়েস্ট পাঠানোর কোড যোগ করুন
    // এখন সাধারণ চেক করছি
    if (username === 'admin' && password === 'admin123') {
        loginSection.classList.add('hidden');
        dashboard.classList.remove('hidden');
        logoutBtn.classList.remove('hidden');
    } else {
        alert('ইউজারনেম বা পাসওয়ার্ড ভুল!');
    }
});

// লগআউট সিস্টেম
logoutBtn.addEventListener('click', function() {
    loginSection.classList.remove('hidden');
    dashboard.classList.add('hidden');
    logoutBtn.classList.add('hidden');
    loginForm.reset();
});

// সাইডবার মেনু
menuItems.forEach(item => {
    item.addEventListener('click', function() {
        // একটিভ মেনু আইটেম আপডেট করুন
        menuItems.forEach(i => i.classList.remove('active'));
        this.classList.add('active');
        
        // কনটেন্ট দেখানো
        const target = this.getAttribute('data-target');
        contentAreas.forEach(content => {
            if (content.id === target) {
                content.classList.add('active');
            } else {
                content.classList.remove('active');
            }
        });
    });
});

// ছাত্র যোগ করার মডাল
addStudentBtn?.addEventListener('click', function() {
    addStudentModal.style.display = 'block';
});

// মডাল বন্ধ করা
closeModal?.addEventListener('click', function() {
    addStudentModal.style.display = 'none';
});

cancelAddStudent?.addEventListener('click', function() {
    addStudentModal.style.display = 'none';
});

// বাইরে ক্লিক করলে মডাল বন্ধ
window.addEventListener('click', function(e) {
    if (e.target === addStudentModal) {
        addStudentModal.style.display = 'none';
    }
});

// ছাত্র যোগ করার ফর্ম
addStudentForm?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // ফর্ম ডাটা
    const studentData = {
        studentId: document.getElementById('student-id').value,
        name: document.getElementById('student-name').value,
        fatherName: document.getElementById('father-name').value,
        motherName: document.getElementById('mother-name').value,
        className: document.getElementById('class-name').value,
        rollNumber: document.getElementById('roll-number').value,
        dob: document.getElementById('dob').value,
        address: document.getElementById('address').value,
        mobile: document.getElementById('student-mobile').value,
        guardianMobile: document.getElementById('guardian-mobile').value,
        admissionDate: document.getElementById('admission-date').value,
        status: document.getElementById('status').value
    };
    
    // এখানে সার্ভারে ডাটা পাঠানোর কোড যোগ করুন
    console.log('নতুন ছাত্র যোগ করা হচ্ছে:', studentData);
    
    // টেবিলে ছাত্র যোগ করুন (ডেমো)
    const studentsTable = document.getElementById('students-table').getElementsByTagName('tbody')[0];
    const newRow = studentsTable.insertRow();
    
    newRow.innerHTML = `
        <td>${studentData.studentId}</td>
        <td>${studentData.name}</td>
        <td>${studentData.fatherName}</td>
        <td>${studentData.className}</td>
        <td>${studentData.rollNumber}</td>
        <td>${studentData.mobile}</td>
        <td><span class="status active">${studentData.status}</span></td>
        <td>
            <button class="action-btn edit-btn"><i class="fas fa-edit"></i></button>
            <button class="action-btn delete-btn"><i class="fas fa-trash"></i></button>
        </td>
    `;
    
    // মডাল বন্ধ করা এবং ফর্ম রিসেট করা
    addStudentModal.style.display = 'none';
    addStudentForm.reset();
    
    // নতুন বাটনগুলিতে ইভেন্ট লিসেনার যোগ করুন
    attachActionButtonListeners();
});

// অ্যাকশন বাটন ইভেন্ট লিসেনার
function attachActionButtonListeners() {
    // এডিট বাটন
    document.querySelectorAll('.edit-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const row = this.closest('tr');
            const studentId = row.cells[0].textContent;
            alert(${studentId} এডিট করা হবে);
            // এখানে এডিট ফাংশন কল করুন
        });
    });
    
    // ডিলিট বাটন
    document.querySelectorAll('.delete-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const row = this.closest('tr');
            const studentId = row.cells[0].textContent;
            
            if (confirm(আপনি কি নিশ্চিত যে ${studentId} মুছে ফেলতে চান?)) {
                row.remove();
                // এখানে সার্ভার থেকে ডিলিট করার কোড যোগ করুন
            }
        });
    });
}

// প্রারম্ভিক বাটন লিসেনার অ্যাটাচ করুন
document.addEventListener('DOMContentLoaded', function() {
    attachActionButtonListeners();
});

// ছাত্র খোঁজার ফাংশন
document.getElementById('student-search')?.addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    const rows = document.getElementById('students-table').getElementsByTagName('tbody')[0].rows;
    
    for (let i = 0; i < rows.length; i++) {
        const id = rows[i].cells[0].textContent.toLowerCase();
        const name = rows[i].cells[1].textContent.toLowerCase();
        const father = rows[i].cells[2].textContent.toLowerCase();
        const className = rows[i].cells[3].textContent.toLowerCase();
        
        if (id.includes(searchTerm) || name.includes(searchTerm) || 
            father.includes(searchTerm) || className.includes(searchTerm)) {
            rows[i].style.display = '';
        } else {
            rows[i].style.display = 'none';
        }
    }
});

// সাম্পল ছাত্র ডাটা লোড করুন (ডেমো)
function loadSampleStudentData() {
    const studentsData = [
        { 
            id: "ST-২০২৩-০০১", 
            name: "মাহমুদুল হাসান", 
            father: "আবদুর রহিম", 
            class: "৮ম শ্রেণী", 
            roll: "১০১", 
            mobile: "০১৭১২৩৪৫৬৭৮", 
            status: "সক্রিয়" 
        },
        { 
            id: "ST-২০২৩-০০২", 
            name: "সাদিয়া আহমেদ", 
            father: "জাহিদ হোসেন", 
            class: "৫ম শ্রেণী", 
            roll: "২০৫", 
            mobile: "০১৮১২৩৪৫৬৭৮", 
            status: "সক্রিয়" 
        }
    ];
    
    // ড্যাশবোর্ডের পরিসংখ্যান আপডেট করা
    document.getElementById('student-count').textContent = studentsData.length;
}

// পৃষ্ঠা লোড হওয়ার সময় ফাংশন কল করুন
loadSampleStudentData();