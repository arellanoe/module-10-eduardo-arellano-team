const generate_html = function (team_string) {
    return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<title>Team Portfolio</title>
<link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" rel="stylesheet">
<link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
<style>
</style>
</head>
<body>
<div class="header">
<div class="jumbotron bg-warning">
   <h1 class="display-4 text-white text-center">The Best Team!</h1>
</div>
</div>
<div class="container-body container-fluid">
   <div class="row">
        ${team_string} 
    </div>
</div>
<script src="https://kit.fontawesome.com/257de25400.js" crossorigin="anonymous"></script>  
</body>
</html>`

}


const generate_card= function (arr) {

    let position_icon;
    let role_info;


    if (arr.title==='Manager') {
        position_icon =`<i class="fas fa-mug-hot"></i>`
        role_info =`Office Number: ${arr.office_number}`
    }
    else if (arr.title==='Engineer') {
        position_icon =`<i class="fas fa-glasses"></i>`
        role_info =`GitHub Username: <a href="https://github.com/${arr.github}" target="_blank">${arr.github}</a>`
    }
    else if (arr.title==='Intern') {
        position_icon =`<i class="fas fa-user-graduate"></i>`
        role_info =`School: ${arr.school}`
    }

    return `
    
<div class="col-md-4 col-sm-6 col-12 col-lg-3">
    <div class="card shadow-lg mb-5 bg-white rounded">
        <div class="card-header bg-primary">
            <h4 class="text-white text-center">${arr.name}</h4>
            <h4 class="text-white text-center">${position_icon}</i> ${arr.title}</h4>
        </div>
        <div class="card-body">
            <ul class="list-unstyled">
                <li>Employee ID: ${arr.id}</li>
                <li>Email: <a href="mailto:${arr.email}">${arr.email}</a></li>
                <li>${role_info}</i>
            </u>
        </div>
    </div>
  </div>
`
    

}


exports.generate_html = generate_html;
exports.generate_card = generate_card;