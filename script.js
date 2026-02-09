function loadHTML(id, file) {
  fetch(file)
    .then((res) => res.text())
    .then((data) => {
      document.getElementById(id).innerHTML = data;
    });
}

/* EVENT DELEGATION — INI KUNCI 🔑 */
document.addEventListener("click", function (e) {
  if (e.target.classList.contains("gallery-img")) {
    const modalImg = document.getElementById("modalImage");
    modalImg.src = e.target.src;
    modalImg.alt = e.target.alt;
  }
});

/* LOAD SECTION */
loadHTML("navbar", "layout/navbar.html");
loadHTML("footer", "layout/footer.html");

loadHTML("about", "section/about.html");
loadHTML("pendidikan", "section/pendidikan.html");
loadHTML("skill", "section/skill.html");
loadHTML("pengalaman", "section/pengalaman.html");
loadHTML("prestasi", "section/prestasi.html");
loadHTML("gallery", "section/gallery.html");

loadHTML("modal-foto", "section/modal-foto.html");
loadHTML("silat", "section/sertifikat/silat.html");
loadHTML("olimpiade", "section/sertifikat/olimpiade.html");
