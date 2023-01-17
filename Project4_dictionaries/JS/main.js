function my_Dictionary(){
    var Student={
    Name: "Trisha",
    Age: "16",
    Subject: "Math",
    Average_GPA: "3.36",
 };
    delete Student.Average_GPA; //this removes the Genre KVP from the Dictionary before it is displayed
    document.getElementById("Dictionary").innerHTML = Student.Average_GPA;
}
