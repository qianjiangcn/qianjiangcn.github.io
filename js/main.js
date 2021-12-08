/**
 * Show the content, giving the content_id. 
 *
 * The `innerHTML` of the selected content will replace the `innerHTML` of the
 * `content_placeholder`.
 *
 * @param {string} content_id  ID of the content to swap to.
 * @param {string} btn_id      ID of the selected button.
 */
function switchContent(content_id, btn_id) {
    // Retrieve the content placeholder
    var placeholder = document.getElementById("content_placeholder");

    // Put the selected content to the placeholder
    var content = document.getElementById(content_id);
    placeholder.innerHTML = content.innerHTML;

    // Set all buttons as inactive
    var avail_btns = ["homebtn", "publicationsbtn", "newsbtn", "resumebtn", "cvbtn"];
    for (btn of avail_btns) {
        document.getElementById(btn).classList.remove("active");
    }

    // Set the selected button as active
    document.getElementById(btn_id).classList.add('active');
}
