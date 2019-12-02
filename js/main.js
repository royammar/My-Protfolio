console.log('Starting up');


function init() {

    creatProjects();
    renderProjects();
}


function renderProjects() {

    var projects = getProjectsToRender();

    var divs = projects.map(function (project) {
        return `<div class="col-md-4 col-sm-6 portfolio-item">
          <a class="portfolio-link" onclick="updateModalHTML('${project.id}')" data-toggle="modal" href="#portfolioModal">
            <div class="portfolio-hover">
              <div class="portfolio-hover-content">
                <i class="fa fa-plus fa-3x"></i>
              </div>
            </div>
            <img class="img-fluid"  src="img/portfolio/${project.img}" alt="">
          </a>
          <div class="portfolio-caption">
            <h4>${project.title}</h4>
            <p class="text-muted">${project.name}</p>
           
          </div>
        </div>`
    })

    document.querySelector('.container .protfolios').innerHTML = divs.join('');
}




function updateModalHTML(projectId) {

    var project = getProjectById(projectId)
    var divs = `<h2>${project.title}</h2>
    <p class="item-intro text-muted">${project.name}</p>
    <img class="img-fluid d-block mx-auto" src="img/portfolio/${project.modalImg}" alt="">
    <p>${project.desc}</p>
    <ul class="list-inline">
      <li>Date: ${project.publishedAt}</li>
      <li>Labels: ${project.labels}</li>
      <a href="${project.url}" target="_blank">Check it out</a>
    </ul>
    
    <button class="btn btn-primary" data-dismiss="modal" type="button">
        <i class="fa fa-times"></i>
        Close Project</button>`
    document.querySelector('#modalBody').innerHTML = divs

}


function onSubmitClick() {

    
    var subject = document.querySelector('#subject').value
    var message = document.querySelector('#message').value

    sendMail(subject, message)
}


