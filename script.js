function showSection(sectionId) {
            // Sembunyikan semua section
            const sections = document.querySelectorAll('.section');
            sections.forEach(section => section.classList.remove('active'));
            // Tampilkan section yang dipilih
            document.getElementById(sectionId).classList.add('active');
        }

        // Script untuk smooth scroll pada timeline
        document.addEventListener('DOMContentLoaded', function() {
            const timeline = document.querySelector('.timeline');
            if (timeline) {
                timeline.addEventListener('wheel', function(e) {
                    e.preventDefault();
                    timeline.scrollLeft += e.deltaY;
                });
            }
        });

        // Simulasi submit form
        document.querySelector('form').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Pesan terkirim! (Ini simulasi - gunakan layanan seperti Formspree untuk email asli)');
        });

    // Fungsi untuk menampilkan section tertentu
    function showSection(sectionId) {

        // Sembunyikan semua section
        const sections = document.querySelectorAll('.section');
        sections.forEach(section => {
            section.classList.remove('active');
            section.style.opacity = '0'; // Efek fade-out
        });

        // Tampilkan section yang dipilih
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.classList.add('active');
            setTimeout(() => {
                targetSection.style.opacity = '1'; // Efek fade-in
            }, 100); // Delay kecil untuk transisi
        }
    }

    // Saat halaman load, tampilkan Home
    window.onload = function() {
        showSection('home');
    };
// Fungsi untuk membuka modal
function openModal(content) {
    const modal = document.getElementById('myModal');
    const modalContent = document.getElementById('modalContent');
    modalContent.innerHTML = content;
    modal.style.display = 'flex';
}

// Fungsi untuk menutup modal
function closeModal() {
    document.getElementById('myModal').style.display = 'none';
}

const questions = [
    {
        question: "Siapa nama asli Tan Malaka?",
        answers: [
            { text: "Kusno Sosrodihardjo", correct: false },
            { text: "Sutan Ibrahim", correct: true },
            { text: "Mohammad Athar", correct: false },
            { text: "Sutan Sjahrir", correct: false }
        ]
    },
    {
        question: "Di kota manakah Sukarno dilahirkan?",
        answers: [
            { text: "Blitar", correct: false },
            { text: "Surabaya", correct: true },
            { text: "Bandung", correct: false },
            { text: "Jakarta", correct: false }
        ]
    },
    {
        question: "Salah satu ciri pertanyaan revolusioner adalah kemampuannya untuk...",
        answers: [
            { text: "Meruntuhkan asumsi lama dan membuka ruang bagi kemungkinan baru.", correct: true },
            { text: "Menghasilkan jawaban yang bisa ditemukan di buku teks sekolah.", correct: false },
            { text: "Memberikan jawaban pasti yang tidak bisa didebat lagi.", correct: false },
            { text: "Membuat orang berhenti berpikir karena terlalu rumit.", correct: false }
        ]
    },
    {
        question:"Siapa tokoh yang menuluis buku 'MADILOG' dan dikenal sebagai Bapak republik Indonesia?",
        answers: [
            { text: "Sukarono", correct: false},
            { text: "Muhamad Hatta", correct: false},
            { text: "Sutan Sjahrir", correct: false},
            { text: "Tan Malaka", correct: true}
        ]
    },
    {
        question: "Apa nama organisasi pemuda yang didirikan Sukarno di Bandung pada tahun1927",
        answers: [ 
            { text: "Budi Utomo", correct: false},
            { text: "Jong java", correct: false},
            { text: "Partai Nasional Indonesia", correct: true},
            { text: "Serkat Islam", correct: false}
        ]
    },
    {
        question: "Siapakah Perdana Menteri pertama Indonesia yang dikenal sebagai 'Si Kancil' karena kecerdikan diplomasinya?",
        answers: [
            { text: "Sutan Sjahrir", correct: true},
            { text: "Agus Salim", correct: false},
            { text: "Tan Malaka", correct: false},
            { text: "Amir Sjarifuddin", correct: false}
        ]
    },
    {
        question: "Di kota manakah teks Proklamasi Kemerdekaan Indonesia dibacakan pada 17 Agustus 1945?",
        answers: [
            { text: "Jl. Pegangsaan Timur No. 56", correct: true},
            { text: "Jl. Imam Bonjol No. 1, Jakarta", correct: false},
            { text: "Istana Merdeka", correct: false},
            { text: "IKN", correct: false}
        ]
    },
    {
        question: "Siapa yang merancang nama 'REPUBLIK' ",
        answers: [
            { text: "Sukarno", correct: false},
            { text: "Tan Malaka", correct: true},
            { text: "D.N Aidit", correct: false},
            { text: "Jendarl Sudirman", correct: false}
        ]
    },
    {
        question: "Siapakah nama lengkap dari tokoh pemimpin PKI pada masa Orde Lama yang dikenal dengan inisial D.N. Aidit?",
        answers: [
           { text: "Dipa Nusantara Aidit", correct: true },
            { text: "Darma Nusantara Aidit", correct: false },
            { text: "Daud Nuruddin Aidit", correct: false },
            { text: "Dedi Natasapoetra Aidit", correct: false }
        ]
    },
    {
        question: "Apa nama strategi politik yang diusung Aidit untuk memperkuat basis massa PKI di kalangan petani dan buruh",
        answers: [
            { text: "Nasakom", correct: false},
            { text: "Aksi Sepihak", correct: false},
            { text: "Metode Turun ke Bawah (Turba)",correct: true},
            { text: "Front Pnacsila",correct: false}
        ]
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById('question-text');
const answerButtonsElement = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.classList.add('hide');
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn-quiz');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

function resetState() {
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add('correct');
        score++;
    } else {
        selectedBtn.classList.add('wrong');
    }
    
    Array.from(answerButtonsElement.children).forEach(button => {
        button.disabled = true; // Kunci tombol setelah memilih
        if(button.dataset.correct === "true") button.classList.add('correct');
    });

    if (questions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide');
    } else {
        // Tampilkan hasil akhir
        document.getElementById('quiz-container').classList.add('hide');
        const resultContainer = document.getElementById('result-container');
        resultContainer.classList.remove('hide');
        document.getElementById('score-text').innerText = `Skor kamu: ${score} dari ${questions.length}`;
    }
}

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    showQuestion();
    nextButton.classList.add('hide');
});

function restartQuiz() {
    // 1. Sembunyikan container hasil
    document.getElementById('result-container').classList.add('hide');
    
    // 2. Tampilkan kembali container kuis
    document.getElementById('quiz-container').classList.remove('hide');
    
    // 3. Reset index pertanyaan dan skor ke nol
    currentQuestionIndex = 0;
    score = 0;
    
    // 4. Jalankan ulang fungsi startQuiz
    startQuiz();
}

function restartQuiz() {
    location.reload();
}

startQuiz();

// Klik di luar modal untuk tutup
window.onclick = function(event) {
    const modal = document.getElementById('myModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};

// Fungsi untuk klik foto di Galeri
function viewImage(src, alt) {
    openModal(`<img src="${src}" alt="${alt}" style="max-width: 100%; max-height: 100%;">`);
}

// Fungsi untuk klik buku di Perpustakaan
function viewBook(title, description) {
    openModal(`<h3>${title}</h3><p>${description}</p>`);
}

document.getElementById('contactForm').addEventListener('submit', function(event) {
    // Mencegah halaman refresh otomatis
    event.preventDefault();

    // Mengambil data dari input
    const nama = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // Menampilkan output ke user
    const responseDiv = document.getElementById('responseMessage');
    responseDiv.innerHTML = `Halo ${nama}, pesan Anda telah terkirim! Kami akan menghubungi Anda melalui ${email}.`;

    // Opsional: Membersihkan form setelah kirim
    this.reset();
});

