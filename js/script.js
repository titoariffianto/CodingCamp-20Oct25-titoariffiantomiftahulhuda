welcomeSpeech();

function welcomeSpeech() {
        /// Show prompt to ask for user's name
        let name = prompt("Enter your name:");
    
        // Cek jika nama kosong atau null (dibatalkan)
        if (name === "" || name === null) {
            name = "Guest"; // Beri nama default
        }
    
        // Greet the user with their name
        document.getElementById('greet-name').innerHTML = `Hi ${name}, `;
    }

/// Function to validate form inputs
function validateForm() {
    /// Get form input values
    const name = document.getElementById('name-input').value;
    const email = document.getElementById('email-input').value;
    const message = document.getElementById('message-input').value;

    /// Get the status element we just created in HTML
    const statusElement = document.getElementById('form-status');

    /// Check if any field is empty
    if (name === "" || email === "" || message === "") {
        /// Show error message IN HTML (using Tailwind classes for red color)
        statusElement.innerHTML = '<span class="text-red-500 font-bold">All fields are required!</span>';
    } else {
        /// Show success message IN HTML (using Tailwind classes for green color)
        statusElement.innerHTML = `<span class="text-green-500 font-bold">Thank you ${name}, your message has been submitted successfully!</span>`;

        // (Opsional, tapi praktik yang baik) Kosongkan form setelah berhasil
        document.getElementById('name-input').value = "";
        document.getElementById('email-input').value = "";
        document.getElementById('message-input').value = "";
    }
}

// menjalankan kode ini setelah semua HTML selesai dimuat
document.addEventListener('DOMContentLoaded', function() {
    
    // 1. tombol hamburger berdasarkan ID-nya
    const menuButton = document.getElementById('menu-toggle-btn');
    
    // 2. menu navigasi berdasarkan ID-nya
    const navMenu = document.getElementById('nav-menu');

    // 3. Pastikan kedua elemen itu ada
    if (menuButton && navMenu) {
        
        // 4. menambahkan 'event listener' pada tombol
        menuButton.addEventListener('click', function() {
            
            // 5. Saat tombol diklik, 'toggle' (pasang/lepas) class 'hidden' pada menu
            // Jika menu sedang 'hidden', class 'hidden' akan dihapus (menu tampil).
            // Jika menu sedang tampil, class 'hidden' akan dipasang (menu sembunyi).
            navMenu.classList.toggle('hidden');
        });
    }
});