let formEl = document.getElementById("addUserForm");
let nameEl = document.getElementById("name");
let emailEl = document.getElementById("email");
let statusEl = document.getElementById("status");
let genderMaleEl = document.getElementById("genderMale");
let genderFemaleEl = document.getElementById("genderFemale");

let nameErrMsgEl = document.getElementById("nameErrMsg");
let emailErrMsgEl = document.getElementById("emailErrMsg");

formEl.addEventListener("submit", function(event) {
    event.preventDefault();
    submitFormData(formData);
});

nameEl.addEventListener("blur",function(event){
    if (event.target.value === ""){
        nameErrMsgEl.textContent = "Required!";
    }
    else{
        nameErrMsgEl.textContent = "";
    }
});

emailEl.addEventListener("blur",function(event){
    if (event.target.value === ""){
        emailErrMsgEl.textContent = "Required!";
    }
    else{
        emailErrMsgEl.textContent = "";
    }
});

function submitFormData(formData) {
    let options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer 3626981a4141a6770c30b23043c34e889154bd61f4de7d150b6c4e69057613dc"
        },
        body: JSON.stringify(formData)
    };
    let url = "https://gorest.co.in/public/v2/users";
    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            if (jsonData.length === 1) {
                emailErrMsgEl.textContent = "email has already taken";
            }
        })
}


let formData = {
    name: "",
    email: "",
    status: "Active",
    gender: "Male"
};

statusEl.addEventListener("change", function(event) {
    formData.status = event.target.value;
});


nameEl.addEventListener("change", function(event) {
    if (event.target.value === "") {
        nameErrMsgEl.textContent = "Required*";
    } else {
        nameErrMsgEl.textContent = "";
    }
    formData.name = event.target.value;
});

emailEl.addEventListener("change", function(event) {
    if (event.target.value === "") {
        emailErrMsgEl.textContent = "Required*";
    } else {
        emailErrMsgEl.textContent = "";
    }
    formData.email = event.target.value;
});



genderMaleEl.addEventListener("change", function(event) {
    formData.gender = event.target.value;
});

genderFemaleEl.addEventListener("change", function(event) {
    formData.gender = event.target.value;
});