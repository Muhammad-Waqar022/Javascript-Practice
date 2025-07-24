let totalStudents=Number(prompt("How many Students are present today? "));

let attendanceList=[];
for(let i=1;i<=totalStudents;i++){
    let studentName=prompt(`Enter name of the Student ${i}: `);
    if(studentName === ""){
        continue;
    }
    else if(studentName.toLowerCase()=== "exit"){
        break;
    }
    else{
        attendanceList.push(studentName)
    }
}
for(let student of attendanceList){
    console.log(`Welcome, ${student} You're marked present.`)
}