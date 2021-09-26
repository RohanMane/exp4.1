//Validating Form
function validateForm(){
    var tagline = document.forms["myForm"]["tagline"].value;
    var color = document.forms["myForm"]["color"].value;
    var size = document.forms["myForm"]["size"].value;
    var quantity = document.forms["myForm"]["quantity"].value;
    var cost = document.forms["myForm"]["cost"].value;

    //ORDER DATE
    var odate = new Date();
    var day = odate.getDate();
    var month = odate.getMonth();
    var year = odate.getFullYear();

    var date = document.forms["myForm"]["date"].value;
    var name = document.forms["myForm"]["name"].value;
    var phone = document.forms["myForm"]["phone"].value;

    //EMAIL-ID
    var email = document.forms["myForm"]["email"].value;
    var atposition=email.indexOf("@");  
    var dotposition=email.lastIndexOf(".");  

    var address = document.forms["myForm"]["address"].value;


    //ANY DETAILS ARENT FILLED
    if(tagline == ""){
        alert("TAGLINE MUST BE FILLED");
        window.location.href = "http://localhost:52330/index.html";
    }

    if(color == ""){
        alert("COLOR MUST BE FILLED");
        window.location.href = "http://localhost:52330/index.html";
    }

    if(size == ""){
        alert("SIZE MUST BE FILLED");
        window.location.href = "http://localhost:52330/index.html";
    }

    if(quantity == ""){
        alert("QUANTITY MUST BE FILLED");
        window.location.href = "http://localhost:52330/index.html";
    }

    if(cost == ""){
        alert("COST MUST BE FILLED");
        window.location.href = "http://localhost:52330/index.html";
    }

    if(date == ""){
        alert("DATE OF DELIVERY MUST BE FILLED");
        window.location.href = "http://localhost:52330/index.html";
    }

    if(name == ""){
        alert("NAME MUST BE FILLED");
        window.location.href = "http://localhost:52330/index.html";
    }

    if(phone == ""){
        alert("PHONE NO. MUST BE FILLED");
        window.location.href = "http://localhost:52330/index.html";
    }

    if(email == ""){
        alert("EMAIL-ID MUST BE FILLED");
        window.location.href = "http://localhost:52330/index.html";
    }

    if(address == ""){
        alert("ADDRESS OF DELIVERY MUST BE FILLED");
        window.location.href = "http://localhost:52330/index.html";
    }

    
    //ALL DETAILS ARE FILLED
    else{

        //EMAIL VALIDATION
        if (atposition<1 || dotposition<atposition+2 || dotposition+2>=email.length) {
            alert("PLEASE ENTER CORRECT EMAIL-ID");  
            return false;  
            
        } else {
            document.write("THANK YOU FOR YOUR ORDER "+name+"<br><br>");
            document.write("BELOW IS YOUR RECEIPT<br><br><br>");
            document.write("TAGLINE ON T-SHIRT: "+tagline+"<br><br>");
            document.write("COLOR OF T-SHIRT: "+color+"<br><br>");
            document.write("SIZE OF T-SHIRT: "+size+"<br><br>");
            document.write("QUANTITY OF T-SHIRT: "+quantity+"<br><br>");
            document.write("COST OF T-SHIRT: "+cost+"<br><br>");
            document.write("DATE OF ORDER: "+year+"-"+month+"-"+day+"<br><br>");
            document.write("DATE OF DELIVERY: "+date+"<br><br>");
            document.write("NAME OF CUSTOMER: "+name+"<br><br>");
            document.write("PHONE NO. OF CUSTOMER: "+phone+"<br><br>");
            document.write("EMAIL-ID OF CUSTOMER: "+email+"<br><br>");
            document.write("ADDRESS OF DELIVERY: "+address+"<br><br>");       
        }
        
    }
}