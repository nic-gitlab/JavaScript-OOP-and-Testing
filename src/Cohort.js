class Cohort {
  constructor(title, startDate, endDate) {
    this.title = title
    this.startDate = startDate
    this.endDate = endDate
    this.students = []
    this.systemChecks = []
  }

  enroll(student) {
    // adds a student to the student array
    // if they aren't already in cohort.students
    if(!this.students.includes(student)){
        return this.students.push(student)
    } 
  }

  assign(systemCheck) {
      return this.systemChecks.push(systemCheck)
  }

  roster() {
    let titleString = ''
     titleString += `${this.title}` 
     //  returns a string containing each students name and email seperated by a new line
     let nameEmailString = ''
    this.students.forEach(student => {
      
    
    nameEmailString += `${student.name} ${student.email}\n`

    })
    
     return titleString+nameEmailString 
  }



}

export default Cohort
