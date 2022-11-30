function staffList(user, fullName, email, passWord, date, basicSalary, position, workTime) {
  this.user = user;
  this.fullName = fullName;
  this.email = email;
  this.passWord = passWord;
  this.date = date;
  this.basicSalary = basicSalary;
  this.position = position;
  this.workTime = workTime;
  this.sumSalary = function(position){
    if(position.includes("Sếp")){
      return this.basicSalary * 3;
    }
    else if(position.includes("Trưởng phòng")){
      return this.basicSalary * 2;
    }
    else if(position.includes("Nhân viên")){
      return this.basicSalary;
    }
  }
  this.classification = function(workTime){
    if(workTime >=192){
      return "Xuất sắc";
    }
    else if(workTime >=176){
      return "Giỏi";
    }
    else if(workTime >=160){
      return "Khá"
    }
    else{
      return "Trung bình"
    }
  }
}
