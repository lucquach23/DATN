//hàm căn vị trí ra giữa màn hình
function setPosition(element) {
    var elementOffset = document.getElementsByClassName(element)[0];
    var height = elementOffset.offsetHeight;
    var width = elementOffset.offsetWidth;
    elementOffset.style.top = `calc(50% - ${height/2}px)`;
    elementOffset.style.left = `calc(50% - ${width/2}px)`;
}

//hiện và căn dialog
function showDialog() {
    document.getElementById('dialog-add').style.display = 'block';
    setPosition('dialog-content');


}
//hiện và căn alert thông báo xóa
function showAlertDelete() {
    document.getElementById('alert-delete').style.display = 'block';
    setPosition('alert-content');
}