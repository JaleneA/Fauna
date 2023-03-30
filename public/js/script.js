// JS script specific to the homepage
function importGlobalStylesheet () {
    const webroot_dir = path.resolve(__dirname);
    
    let globalStylesheetLink = document.getElementById("global-stylesheet");
    globalStylesheetLink.setAttribute.href("webroot_dir/main.css");
}

importGlobalStylesheet();
