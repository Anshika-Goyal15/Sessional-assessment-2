const submit = document.getElementById('hitme');
function getPerson() {
    console.log("hi");
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        const data = JSON.parse(this.responseText);
        console.log(data.length);
        document.getElementById("usersData").innerHTML = data.map(person => `
            <div class="card" style="width: 18rem;">
                <img src="..." class="card-img-top" alt="...">
                <div class="card-body">
                    <p>${person.name}</p>
                </div>
                <div class="card-body">
                    <p>${person.email}</p>
                </div>
            </div>
        `
        )
        .join('');
        
        // console.log(name);
        // document.getElementById("demo").innerHTML = person.name;
    }
  };
  xhttp.open("GET", "https://jsonplaceholder.typicode.com/users?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09", true);
  xhttp.send();
}
submit.addEventListener('click',getPerson);