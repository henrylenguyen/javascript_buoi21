// --------------------------------khởi tạo danh sách nhân viên------------------------
let staffListArr = [];
// ------------------------------------------DOM INPUT ---------------------------------
let search = document.querySelector("#searchName");
let span = document.querySelectorAll(".sp-thongbao");
let input = document.querySelectorAll("input");
let modal = document.getElementById("myModal")
let user = document.getElementById("tknv");
let fullName = document.getElementById("name");
let email = document.getElementById("email");
let pass = document.getElementById("password");
let position = document.getElementById("chucvu");
let luongCB = document.getElementById("luongCB");
let gioLam = document.getElementById("gioLam");
let date = document.getElementById("datepicker");

  let notiUser = document.getElementById("tbTKNV");
  let notiFullName = document.getElementById("tbTen");
  let notiEmail = document.getElementById("tbEmail");
  let notiPass = document.getElementById("tbMatKhau");
  let notiDate = document.getElementById("tbNgay");
  let notiSalary = document.getElementById("tbLuongCB");
  let notiPosition = document.getElementById("tbChucVu");
  let notiWorkTime = document.getElementById("tbGiolam");

//---------------------------------------------regex--------------------------------------
var format = /[~`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
var regNumber = /[0-9]/;
var regChar  = /[a-zA-Z]/;
var regEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var regPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,11}$/;

//dd/mm/yyyy
var regDmy = /^(((0[1-9]|[12]\d|3[01])\/(0[13578]|1[02])\/((19|[2-9]\d)\d{2}))|((0[1-9]|[12]\d|30)\/(0[13456789]|1[012])\/((19|[2-9]\d)\d{2}))|((0[1-9]|1\d|2[0-8])\/02\/((19|[2-9]\d)\d{2}))|(29\/02\/((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))))$/

//------------------------------------ validate form user---------------------------------
function validateUser() {
  user.addEventListener("input", () => {
    if (user.value.includes(" ")) {
      // user.style.border = "1px solid red";
      user.style.boxShadow = "0 0 0 0.2rem rgb(251 10 43 / 79%)";
      notiUser.innerHTML = "Tài khoản không được có khoảng trắng";
    } else {
      if (user.value.length < 1) {
        // user.style.border = "1px solid red";
        user.style.boxShadow = "0 0 0 0.2rem rgb(251 10 43 / 79%)";
        notiUser.innerHTML = "Tài khoản không được bỏ trống";
      } else {
        notiUser.innerHTML = "";
        if (user.value.match(format)) {
          user.style.boxShadow = "0 0 0 0.2rem rgb(251 10 43 / 79%)";
          notiUser.innerHTML = "Tài khoản không được chứa ký tự đặc biệt";
        } else {
          if (user.value.length < 4 || user.value.length > 6) {
            notiUser.innerHTML = "Tài khoản tối đa 4-6 ký tự";
            user.style.boxShadow = "0 0 0 0.2rem rgb(251 10 43 / 79%)";
          }
          user.style.boxShadow = "0 0 0 0.2rem rgb(0 123 255 / 25%)";
        }
      }
    }

    // console.log("Tài khoản không được bỏ trống")
  })
  
}
function validateUserBtn(){
  if (user.value.length < 1) {
    // user.style.border = "1px solid red";
    user.style.boxShadow = "0 0 0 0.2rem rgb(251 10 43 / 79%)";
    notiUser.innerHTML = "Tài khoản không được có khoảng trắng";
    return false;
  }
  return true;
}
// ----------------------------------validate Họ và tên----------------------------------
function validateFullName() {
  fullName.addEventListener("input", () => {
    if (fullName.value.length < 1) {
      // fullName.style.border = "1px solid red";
      fullName.style.boxShadow = "0 0 0 0.2rem rgb(251 10 43 / 79%)";
      notiFullName.innerHTML = "Họ và tên không được bỏ trống";
    } else {
      if ((regNumber.test(fullName.value))) {
        notiFullName.innerHTML = "Họ và tên không được chứa  số";
        fullName.style.boxShadow = "0 0 0 0.2rem rgb(251 10 43 / 79%)";
      } else {
        notiFullName.innerHTML = "";
        if (fullName.value.match(format)) {
          fullName.style.boxShadow = "0 0 0 0.2rem rgb(251 10 43 / 79%)";
          notiFullName.innerHTML = "Họ và tên không được chứa ký tự đặc biệt";
        } else {
          fullName.style.boxShadow = "0 0 0 0.2rem rgb(0 123 255 / 25%)";
        }
      }
    }
  })
 
}
function validateFullNameBtn(){
 if (fullName.value.length < 1) {
   // fullName.style.border = "1px solid red";
   fullName.style.boxShadow = "0 0 0 0.2rem rgb(251 10 43 / 79%)";
   notiFullName.innerHTML = "Họ và tên không được bỏ trống";
   return false;
 }
 return true;
}
// --------------------------------------------validate email-----------------------------
function validateEmail() {
  email.addEventListener("input", () => {
    if (email.value.length < 1) {
      // user.style.border = "1px solid red";
      email.style.boxShadow = "0 0 0 0.2rem rgb(251 10 43 / 79%)";
      notiEmail.innerHTML = "Email không được bỏ trống";
    } else {
      if (!(email.value.match(regEmail))) {
        notiEmail.innerHTML = "Email không hợp lệ";
        email.style.boxShadow = "0 0 0 0.2rem rgb(251 10 43 / 79%)";
      } else {
        notiEmail.innerHTML = "";
        email.style.boxShadow = "0 0 0 0.2rem rgb(0 123 255 / 25%)";

      }
    }
  })
 
}
function validateEmailBtn(){
 if (email.value.length < 1) {
   // user.style.border = "1px solid red";
   email.style.boxShadow = "0 0 0 0.2rem rgb(251 10 43 / 79%)";
   notiEmail.innerHTML = "Email không được bỏ trống";
   return false;
 }
 return true;
}
//----------------------------------------------show hide password------------------------
let showBtn = document.querySelector(".showHide");
showBtn.onclick = function () {
  // if(show.hasChildNodes()){
  //   // console.log(this.childNodes[1])
  //   show.childNodes[1].setAttribute("src", "./img/hide.png")
  // }
  let pass = document.getElementById("password");
  let active = showBtn.classList.toggle("active");
  let show = pass.classList.toggle("show");
  if(show){
    showBtn.childNodes[1].setAttribute("src", "./img/hide.png");
  }
  else{
    showBtn.childNodes[1].setAttribute("src", "./img/show.png")

  }
  if(active){
    pass.setAttribute("type","text");
  }
  else{
    pass.setAttribute("type","password");
  }
}

// --------------------------------------validate password-------------------------------
function validatePassword() {
  pass.addEventListener("input", () => {
    if (pass.value.length < 1) {
      // user.style.border = "1px solid red";
      pass.style.boxShadow = "0 0 0 0.2rem rgb(251 10 43 / 79%)";
      notiPass.innerHTML = "Password không được bỏ trống";
    } else {
      if (!(pass.value.match(regPassword))) {
        notiPass.innerHTML = "Mật khẩu không hợp lệ";
        pass.style.boxShadow = "0 0 0 0.2rem rgb(251 10 43 / 79%)";
      } else {
        notiPass.innerHTML = "";
        pass.style.boxShadow = "0 0 0 0.2rem rgb(0 123 255 / 25%)";

      }
    }
  })
  
}
function validatePasswordBtn(){
 if (pass.value.length < 1) {
   // user.style.border = "1px solid red";
   pass.style.boxShadow = "0 0 0 0.2rem rgb(251 10 43 / 79%)";
   notiPass.innerHTML = "Password không được bỏ trống";
   return false;
 }
 return true;
}
//------------------------------------validate ngày làm việc-----------------------------
function validateDate(){
   datepicker.addEventListener("input", () => {
     if (datepicker.value.length < 1) {
       // user.style.border = "1px solid red";
       datepicker.style.boxShadow = "0 0 0 0.2rem rgb(251 10 43 / 79%)";
       notiDate.innerHTML = "Ngày làm không được bỏ trống";
     } else {
       notiDate.innerHTML = "";
       if (!datepicker.value.match(regDmy)) {
         datepicker.style.boxShadow = "0 0 0 0.2rem rgb(251 10 43 / 79%)";
         notiDate.innerHTML = "Ngày không đúng định dạng";
       }
       datepicker.style.boxShadow = "0 0 0 0.2rem rgb(0 123 255 / 25%)";
     }
   })
  
}
function validateDateBtn(){
 if (datepicker.value.length < 1) {
   // user.style.border = "1px solid red";
   datepicker.style.boxShadow = "0 0 0 0.2rem rgb(251 10 43 / 79%)";
   notiDate.innerHTML = "Ngày làm không được bỏ trống";
   return false;
 }
 if (!datepicker.value.match(regDmy)) {
   datepicker.style.boxShadow = "0 0 0 0.2rem rgb(251 10 43 / 79%)";
   notiDate.innerHTML = "Ngày không đúng định dạng";
 }
 return true;
}
//------------------------------------------validate Lương--------------------------------
function validateSalary(){
   luongCB.addEventListener("input", () => {
     if (luongCB.value.length < 1) {
       // user.style.border = "1px solid red";
       luongCB.style.boxShadow = "0 0 0 0.2rem rgb(251 10 43 / 79%)";
       notiSalary.innerHTML = "Lương cơ bản không được bỏ trống";
     } else {
         notiSalary.innerHTML = "";
         if (luongCB.value.match(regChar) || luongCB.value.match(format)) {
          luongCB.style.boxShadow = "0 0 0 0.2rem rgb(251 10 43 / 79%)";
          notiSalary.innerHTML = "Lương cơ bản phải là số";
         }
         else{
          if (parseInt(luongCB.value) < 1000000 || parseInt(luongCB.value) > 200000000) {
            luongCB.style.boxShadow = "0 0 0 0.2rem rgb(251 10 43 / 79%)";
            notiSalary.innerHTML = "Giờ làm phải lớn 1.000.000  và bé hơn 20.000.000";
          }
         }
         luongCB.style.boxShadow = "0 0 0 0.2rem rgb(0 123 255 / 25%)";     
     }
   })
  
}
function validateSalaryBtn(){
 if (luongCB.value.length < 1) {
   // user.style.border = "1px solid red";
   luongCB.style.boxShadow = "0 0 0 0.2rem rgb(251 10 43 / 79%)";
   notiSalary.innerHTML = "Lương cơ bản không được bỏ trống";
   return false;
 }
 return true;
}
//----------------------------validate chức vụ-----------------------
function validatePosition(){
  if (position.value === "Chọn chức vụ"){
    position.style.boxShadow = "0 0 0 0.2rem rgb(251 10 43 / 79%)";
    notiPosition.innerHTML = "Vui lòng chọn chức vụ";
    return false;
  }
  notiPosition.innerHTML = "";
  position.style.boxShadow = "0 0 0 0.2rem rgb(0 123 255 / 25%)";
  return true;
}
// ------------------------------------------validate giờ làm việc-----------------------
function validateWorkTime() {
   gioLam.addEventListener("input", () => {
     if (gioLam.value.length < 1) {
       // user.style.border = "1px solid red";
       gioLam.style.boxShadow = "0 0 0 0.2rem rgb(251 10 43 / 79%)";
       notiWorkTime.innerHTML = "Giờ làm không được bỏ trống";
     } else {
         notiWorkTime.innerHTML = "";
         if (gioLam.value.match(regChar) || gioLam.value.match(format)) {
          gioLam.style.boxShadow = "0 0 0 0.2rem rgb(251 10 43 / 79%)";
          notiWorkTime.innerHTML = "Giờ làm phải là số";
         }
         else{
          if (parseInt(gioLam.value) < 80 ||parseInt(gioLam.value)>200){
            gioLam.style.boxShadow = "0 0 0 0.2rem rgb(251 10 43 / 79%)";
            notiWorkTime.innerHTML = "Giờ làm phải lớn 80 giờ và bé hơn 200 giờ";
          }
         }
         gioLam.style.boxShadow = "0 0 0 0.2rem rgb(0 123 255 / 25%)";     
     }
   })
  
}
function validateWorkTimeBtn(){
 if (gioLam.value.length < 1) {
   // user.style.border = "1px solid red";
   gioLam.style.boxShadow = "0 0 0 0.2rem rgb(251 10 43 / 79%)";
   notiWorkTime.innerHTML = "Giờ làm không được bỏ trống";
   return false;
 }
 return true;
}
// ----------------------------------------Hàm gọi các validate--------------------------
function validate() {
 validateUser() ;
    validateFullName() ;
    validateEmail() ;
    validatePassword() ;
    validateSalary() ;
    validateDate();
   validateWorkTime();
}
//----------------------Hàm gọi các validate khi bấm nút submit--------------------------

function checkValidate(){
   if (validateUserBtn() &&
     validateFullNameBtn() &&
     validateEmailBtn() &&
     validatePasswordBtn() &&
     validateDateBtn() &&
     validateSalaryBtn() &&
     validatePosition() &&
     validateWorkTimeBtn()) {
     return true;
   }
   return false;
}
// ----------------------------------------- Hàm khi window load -------------------------
window.onload = function(){
  var staffListFromLocal = getStaffList(); // => [{}, {}, {}]
  staffListArr = mapStaffList(staffListFromLocal);
  renderStaff();
}
// ----------------------------------------nút thêm mới nhân viên ------------------------

function createClick(){
  document.getElementById("btnCapNhatNV").style.display = "none";
document.getElementById("header-title").textContent = "Thêm nhân viên";
validate();

}
// ----------------------------------------- Hàm tạo nhân viên mới ----------------------

function createStaff() {
  if (!checkValidate()) return;
  let userInput = document.getElementById("tknv").value;
  let fullNameInput = document.getElementById("name").value;
  let emailInput = document.getElementById("email").value;
  let passInput = document.getElementById("password").value;
  let positionInput = document.getElementById("chucvu").value;
  let luongCBInput = document.getElementById("luongCB").value;
  let gioLamInput = document.getElementById("gioLam").value;
  let dateInput = document.getElementById("datepicker").value;
  // tạo đối tượng nhân viên
  const staff = new staffList(
    userInput,
    fullNameInput,
    emailInput,
    passInput,
    dateInput,
    luongCBInput,
    positionInput,
    gioLamInput
  )
  // thêm nhân viên vào danh sách
  staffListArr.push(staff);
  Swal.fire(
    'Thêm nhân viên thành công!',
    'Chúc mừng bạn!',
    'success'
  )
  //Xóa rỗng form
  input.forEach(item =>{
    item.value ="";
  })
  closeFrm();
  // Hiện danh sách ra màn hình
  renderStaff();
  // lưu danh sách nhân viên xuống local
  saveStaff();


}
// ------------------------------Hàm đóng form--------------------------------------------
function closeFrm(){
   // Đóng form
   modal.classList.remove("show");
   modal.setAttribute("aria-hidden", true);
   modal.style.display = "none";
   modal.style.paddingRight = "0px";
   document.body.classList.remove("modal-open");
   document.body.style.paddingRight = '0px';
   document.querySelector(".modal-backdrop").classList.remove = "modal-backdrop", "fade", "show";
   document.querySelector(".modal-backdrop").style.display = "none";
}
// ----------------------------- Hàm hiển thị nhân viên ra màn hình ----------------------
 function renderStaff(data) {
  data = data || staffListArr;
//  let result = new Intl.NumberFormat('it-IT', {
//    style: 'currency',
//    currency: 'VND'
//  }).format(result);
  var html = "";
  for (var i = 0; i < data.length; i++) {
    html += `<tr>
                <td>${data[i].user}</td>
                <td>${data[i].fullName}</td>
                <td>${data[i].email}</td>
                <td>${data[i].date}</td>
                <td>${data[i].position}</td>
                <td>
                ${ new Intl.NumberFormat('it-IT', {
                  style: 'currency',
                  currency: 'VND'
                }).format(data[i].sumSalary(this.position))
                }
                </td>
                <td>${data[i].classification(this.workTime)}</td>
                <td>
                <i class = "fa-solid fa-trash btnDelete"
                onclick = "deleteStaff('${data[i].user}');" > </i>
                 <i class = "fa-solid fa-pen-to-square btnUpdate" data-toggle = "modal" data-target = "#myModal" onclick = "updateStaffBtn('${data[i].user}');" > </i>
                </td>
            </tr>`;
  }
  document.getElementById("tableDanhSach").innerHTML = html;
 }

// ---------------------------Lưu Nhân viên vào localStorage -----------------------------
function saveStaff() {
  let staffJson = JSON.stringify(staffListArr);
  localStorage.setItem("Staff", staffJson);
}
// ---------------------------Lấy Nhân viên từ localStorage-------------------------------
function getStaffList() {
  let staffListJson = localStorage.getItem("Staff");
  if (!staffListJson) return [];
  return JSON.parse(staffListJson);
}
// --------------------------- Map dữ liệu -----------------------------------------------
function mapStaffList(local) {
  let result = [];

  for (let i = 0; i < local.length; i++) {
    let oldStaff = local[i];
    let newStaff = new staffList(
      oldStaff.user,
      oldStaff.fullName,
      oldStaff.email,
      oldStaff.passWord,
      oldStaff.date,
      oldStaff.basicSalary,
      oldStaff.position,
      oldStaff.workTime,
    );
    result.push(newStaff);
  }

  return result;
}


// ------------------- Hàm lấy dữ liệu nhân viên hiển thị lên form ----------------------
let userStaff = "";
function updateStaffBtn(userName) {
   document.getElementById("header-title").innerHTML = "Cập nhật nhân viên";
  userStaff = userName;
  var index = findByUser(userName);
  if (index === -1) return Swal.fire(
    'Lỗi',
    'Tài khoản không tồn tại',
    'error'
  );
   validate();
  let staffListUpdate = staffListArr[index];
    user.value = staffListUpdate.user;
    fullName.value = staffListUpdate.fullName;
    email.value = staffListUpdate.email;
    pass.value = staffListUpdate.passWord;
    position.value = staffListUpdate.position;
    luongCB.value = staffListUpdate.basicSalary;
    gioLam.value = staffListUpdate.workTime;
    date.value = staffListUpdate.date;
  // disable input Tài khoản
  user.disabled = true;

  // Ẩn nút thêm 
  
  document.getElementById("btnThemNV").style.display = "none";
}
function findByUser(user){
    for (let i = 0; i < staffListArr.length; i++) {
      if (staffListArr[i].user === user) {
        return i;
      }
    }

    return -1;

}
//--------------------------------------------- reset form-------------------------------
function resetFrm(){
  document.querySelector("form").reset();
  user.disabled = false;
  // Xóa hết boxShadow báo đỏ
  input.forEach(index =>{
    index.style.boxShadow ="none";
  })
  // Xóa hết các dòng cảnh báo
  span.forEach(index =>{
    index.innerHTML =" ";
  })
}
function updateStaff(){
  let index = findByUser(userStaff);
  let staff = staffListArr[index];
  if(!checkValidate()) return;
  staff.user = user.value,
  staff.fullName = fullName.value,
  staff.email = email.value,
  staff.passWord = pass.value,
  staff.date = date.value,
  staff.basicSalary = luongCB.value,
  staff.position = position.value,
  staff.workTime = gioLam.value;
  Swal.fire(
    'Thành công!',
    'Đã cập nhật dữ liệu thành công',
    'success'
  );
  // hiển thị ra bảng
  renderStaff();
  // Lưu nhân viên lại
  saveStaff();
  // xóa form
  resetFrm();
  // đóng form
  closeFrm();
}

// ---------------------------------------- Hàm xóa nhân viên ----------------------------
function deleteStaff(user) {
  
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
      let index = findByUser(user);
      if (index === -1) return alert("Tài khoản không tồn tại");
      // xóa nhân viên ra khỏi mảng
        staffListArr.splice(index, 1);
      // cập nhật lại bảng
        renderStaff();
      // Lưu danh sách
        saveStaff();
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
// Duyệt hết danh sách của nhân viên
// function rank(){
//   staffListArr.forEach(item => {
//     resultRank.push(item.classification(this.WorkTime));
//   })
// }


// Tìm kiếm nhân viên theo Enter

search.addEventListener("keypress", (event) => {
 
  if(search.value ==" ") return;
   if (event.key == "Enter") {
     searchStaff()
   }
  searchStaff()
})
// Tìm kiếm nhân viên theo nút bấm

function searchStaff() {
  let keyword = document.getElementById("searchName").value.toLowerCase().trim();
  let result = [];
  // let resultRank = [];

  for (let i = 0; i < staffListArr.length; i++) {
    // let staffXepLoai = staffListArr[i].classification;
    let staffuserName = staffListArr[i].fullName.toLowerCase();
    let rankStaff = staffListArr[i].classification(this.WorkTime).toLowerCase();
    let emailStaff = staffListArr[i].email.toLowerCase()
    if (rankStaff.includes(keyword) || staffuserName.includes(keyword) || emailStaff.includes(keyword)) {
      result.push(staffListArr[i]);
    }
  }
  renderStaff(result);
}
