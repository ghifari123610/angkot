// Array untuk menampung nama penumpang
var penumpang = [];

// Fungsi untuk menambahkan penumpang ke dalam angkot
var tambahPenumpang = function(namaPenumpang) {
    if (penumpang.length === 0) {
        penumpang.push(namaPenumpang);
        return true;
    } else {
        for (var i = 0; i < penumpang.length; i++) {
            if (penumpang[i] === undefined) {
                penumpang[i] = namaPenumpang;
                return true;
            } else if (penumpang[i] === namaPenumpang) {
                return false; // Penumpang sudah ada
            } else if (i === penumpang.length - 1) {
                penumpang.push(namaPenumpang);
                return true;
            }
        }
    }
}

// Fungsi untuk menghapus penumpang dari angkot
var hapusPenumpang = function(namaPenumpang) {
    for (var i = 0; i < penumpang.length; i++) {
        if (penumpang[i] === namaPenumpang) {
            penumpang[i] = undefined;
            return true; // Penumpang berhasil dihapus
        }
    }
    return false; // Penumpang tidak ditemukan
}

// Update UI: Menampilkan daftar penumpang
function updatePenumpangList() {
    const listPenumpangElement = document.getElementById('listPenumpang');
    listPenumpangElement.innerHTML = ''; // Clear the list

    penumpang.forEach(function(penumpang) {
        if (penumpang !== undefined) {
            const li = document.createElement('li');
            li.textContent = penumpang;
            listPenumpangElement.appendChild(li);
        }
    });
}

// Fungsi untuk menambah penumpang melalui UI
function tambahPenumpangUI() {
    const namaPenumpangInput = document.getElementById('namaPenumpang');
    const namaPenumpang = namaPenumpangInput.value.trim();

    if (namaPenumpang !== '') {
        const berhasil = tambahPenumpang(namaPenumpang);
        if (berhasil) {
            showMessage(namaPenumpang + " berhasil ditambahkan!");
        } else {
            showMessage(namaPenumpang + " sudah ada dalam angkot!", 'error');
        }
    } else {
        showMessage('Nama penumpang tidak boleh kosong!', 'error');
    }

    namaPenumpangInput.value = ''; // Clear input field
    updatePenumpangList(); // Update the list
}

// Fungsi untuk menghapus penumpang melalui UI
function hapusPenumpangUI() {
    const namaPenumpangInput = document.getElementById('namaPenumpang');
    const namaPenumpang = namaPenumpangInput.value.trim();

    if (namaPenumpang !== '') {
        const berhasil = hapusPenumpang(namaPenumpang);
        if (berhasil) {
            showMessage(namaPenumpang + " berhasil dikeluarkan dari angkot!");
        } else {
            showMessage(namaPenumpang + " tidak ditemukan dalam angkot!", 'error');
        }
    } else {
        showMessage('Nama penumpang tidak boleh kosong!', 'error');
    }

    namaPenumpangInput.value = ''; // Clear input field
    updatePenumpangList(); // Update the list
}

// Fungsi untuk menampilkan pesan
function showMessage(message, type = 'success') {
    const messageElement = document.createElement('div');
    messageElement.textContent = message;
    messageElement.classList.add('message');

    if (type === 'error') {
        messageElement.style.backgroundColor = '#f44336';
    }

    document.body.appendChild(messageElement);

    // Remove message after 3 seconds
    setTimeout(() => {
        messageElement.remove();
    }, 3000);
}
