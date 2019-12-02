'use strict'
var gProjects = ''

function creatProjects() {
    gProjects = [];
    gProjects.push(createproject("MineSweeper", "The good old MineSweeper", "MineSweeper", "Minesweeper is a single-player puzzle computer game. The objective of the game is to clear a rectangular board containing hidden mines or bombs without detonating any of them, with help from clues about the number of neighboring mines in each field.", "https://royammar.github.io/sprint1/", '02/12/2019', ["Matrixes", " keyboard events"], '1.jpg', '1.jpg'))
    gProjects.push(createproject("PACMAN", "The 80's are officialy back!", "PACMAN", "There's nothing like a little old school Pacman game right? The great arcade game Pac Man has been redone in flash and you can play it right here. Never played before?! What?! Eat all the pellets to complete a stage while trying to score as many points as possible by eating fruit and ghosts along the way! But there's more! Ever wonder how Pacman got started? Check out our history link and see how it all began.", "https://royammar.github.io/Pacman/", '02/12/2019', ["Matrixes", "keyboard events"], '2.jpg', '2.jpg'))
    gProjects.push(createproject("asasfasd", "zasfxzxv", "yessasdfdsas push those boxes", " lorem ipsum lorem ipsum", "projs/df", '02/12/2019', ["Matrixes", "keyboard events"], '03-thumbnail.jpg', '03-full.jpg'))

}


function createproject(id, name, title, desc, url, publishedAt, labels, img, modalImg) {
    return {
        id,
        name,
        title,
        desc,
        url,
        publishedAt,
        labels,
        img,
        modalImg,
    }

}

function getProjectsToRender() {

    return gProjects

}

function getProjectById(projectId) {

    return gProjects.find(function (project) {
        return project.id === projectId
    })
}

function sendMail(subject,message) {
window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=royammar030783@gmail.com&su=${subject}&body=${message}`)
}