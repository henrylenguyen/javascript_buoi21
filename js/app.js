// khởi tạo danh sách nhân viên
let staffListArr = [];
let mode = "create";
function submitForm(){
  if(mode==="create"){
    createStaff();
  }
  if(mode==="update"){
    updateStaff();
  }
}
// validate form user
var format = /^[~`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/;
function validateUser(){
  let user = document.getElementById("tknv");
  let noti = document.getElementById("tbTKNV");
  user.addEventListener("input",()=>{
    if(user.value.includes(" ")){
      // user.style.border = "1px solid red";
      user.style.boxShadow = "0 0 0 0.2rem rgb(251 10 43 / 79%)";
      noti.innerHTML = "Tài khoản không được có khoảng trắng";
    }else{
      if(user.value.length < 1){
        // user.style.border = "1px solid red";
        user.style.boxShadow = "0 0 0 0.2rem rgb(251 10 43 / 79%)";
        noti.innerHTML = "Tài khoản không được bỏ trống";
      }
      else{
        noti.innerHTML = "";
        if(user.value.match(format)){
          user.style.boxShadow = "0 0 0 0.2rem rgb(251 10 43 / 79%)";
          noti.innerHTML = "Tài khoản không được chứa ký tự đặc biệt";
        }
        else{
          if(user.value.length<4 || user.value.length>6){
            noti.innerHTML = "Tài khoản tối đa 4-6 ký tự";
            user.style.boxShadow = "0 0 0 0.2rem rgb(251 10 43 / 79%)";
          }
          else{
            user.style.boxShadow = "0 0 0 0.2rem rgb(0 123 255 / 25%)";
  
          }
        }
      }
    }
    
    // console.log("Tài khoản không được bỏ trống")
  })
}
function validateFullName(){
   let user = document.getElementById("name");
   let noti = document.getElementById("tbTen");
   user.addEventListener("input", () => {
     if (user.value.includes(" ")) {
       // user.style.border = "1px solid red";
       user.style.boxShadow = "0 0 0 0.2rem rgb(251 10 43 / 79%)";
       noti.innerHTML = "Tài khoản không được có khoảng trắng";
     } else {
       if (user.value.length < 1) {
         // user.style.border = "1px solid red";
         user.style.boxShadow = "0 0 0 0.2rem rgb(251 10 43 / 79%)";
         noti.innerHTML = "Tài khoản không được bỏ trống";
       } else {
         noti.innerHTML = "";
         if (user.value.match(format)) {
           user.style.boxShadow = "0 0 0 0.2rem rgb(251 10 43 / 79%)";
           noti.innerHTML = "Tài khoản không được chứa ký tự đặc biệt";
         } else {
           if (user.value.length < 4 || user.value.length > 6) {
             noti.innerHTML = "Tài khoản tối đa 4-6 ký tự";
             user.style.boxShadow = "0 0 0 0.2rem rgb(251 10 43 / 79%)";
           } else {
             user.style.boxShadow = "0 0 0 0.2rem rgb(0 123 255 / 25%)";

           }
         }
       }
     }

     // console.log("Tài khoản không được bỏ trống")
   })
}
function createStaff(){
  document.getElementById("header-title").textContent = "Thêm nhân viên";
  validateUser();
}
function updateStaff(){
  document.getElementById("header-title").textContent = "Cập nhật nhân viên"
}
function deleteStaff(){

  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success',
      cancelButton: 'btn btn-danger'
    },
    buttonsStyling: false
  })

  swalWithBootstrapButtons.fire({
    title: 'Bạn có chắc muốn xóa?',
    text: "Bạn sẽ không thể hoàn tác khi đã xóa",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Vâng!',
    cancelButtonText: 'Hủy',
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {
      swalWithBootstrapButtons.fire(
        'Xóa thành công!',
        'Đã xóa',
        'success'
      )
    } else if (
      /* Read more about handling dismissals below */
      result.dismiss === Swal.DismissReason.cancel
    ) {
      swalWithBootstrapButtons.fire(
        'Đã hủy',
        'Đã hủy tác vụ, bạn cứ yên tâm',
        'error'
      )
    }
  })
}