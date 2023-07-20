function toggleSubmenu(submenuId) {
    const submenu = document.getElementById(`submenu${submenuId}`);
    if (submenu.style.display === "none") {
        submenu.style.display = "block";
    } else {
        submenu.style.display = "none";
    }
}