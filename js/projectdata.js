$(document).ready(function () {
    $('#downloadresume').click(function (e) {
        window.open('resume/Man_Mohan_Rathore_Resume.pdf');
    });
});


const projects = [
    {
      name: 'Rolling Dice Game',
      type: 'javascript',
      image:'images/portfolio/img10.jpg',
      gitlink: 'https://github.com/rathoremanmohan/rolling-dice-game',
      url: "https://rathoremanmohan.github.io/rolling-dice-game/"
    },
    {
        name: 'Board Game',
        type: 'react',
        image:'images/portfolio/img2.jpg',
        gitlink: 'https://github.com/rathoremanmohan/board-game',
        url: "https://rathoremanmohan.github.io/board-game/"
    },
    {
        name: 'Upgrade TAGG Website',
        type: 'phplaravel',
        image:'images/portfolio/img4.jpg',
        gitlink: 'https://github.com/macmohan26/TaggProject',
        url: "http://tagg-uno.herokuapp.com/"
    },
    {
        name: 'Coming Soon',
        type: 'pythondjango',
        image:'images/portfolio/img8.jpg',
        gitlink: 'https://github.com/macmohan26/TaggProject',
        url: "http://tagg-uno.herokuapp.com/"
    },
    {
        name: 'Registration Form using Formik',
        type: 'react',
        image:'images/portfolio/img3.jpg',
        gitlink: 'https://github.com/rathoremanmohan/registration-form-formik-app',
        url: "https://rathoremanmohan.github.io/registration-form-formik-app/"
    },

    {
        name: 'Coming Soon',
        type: 'react',
        image:'images/portfolio/img5.jpg',
        gitlink: 'https://github.com/macmohan26/TaggProject',
        url: "http://tagg-uno.herokuapp.com/"
    },
    {
        name: 'Expanding Images',
        type: 'javascript',
        image:'images/portfolio/img6.jpg',
        gitlink: 'https://github.com/rathoremanmohan/expandingimages',
        url: "https://rathoremanmohan.github.io/expandingimages/"
    },
    {
        name: 'Omni Food Website',
        type: 'phplaravel',
        image:'images/portfolio/img7.jpg',
        gitlink: 'https://github.com/macmohan26/Omnifood',
        url: "https://athifood.herokuapp.com"
    },

    {
        name: 'Coming Soon',
        type: 'phplaravel',
        image:'images/portfolio/img8.jpg',
        gitlink: 'https://github.com/macmohan26/TaggProject',
        url: "http://tagg-uno.herokuapp.com/"
    },
    {
        name: 'Coming Soon',
        type: 'pythondjango',
        image:'images/portfolio/img8.jpg',
        gitlink: 'https://github.com/macmohan26/TaggProject',
        url: "http://tagg-uno.herokuapp.com/"
    },
    {
        name: 'Coming Soon',
        type: 'pythondjango',
        image:'images/portfolio/img8.jpg',
        gitlink: 'https://github.com/macmohan26/TaggProject',
        url: "http://tagg-uno.herokuapp.com/"
    },
    {
        name: 'Coming Soon',
        type: 'pythondjango',
        image:'images/portfolio/img8.jpg',
        gitlink: 'https://github.com/macmohan26/TaggProject',
        url: "http://tagg-uno.herokuapp.com/"
    },
    {
        name: 'My Bank App',
        type: 'javascript',
        image:'images/portfolio/img10.jpg',
        gitlink: 'https://github.com/rathoremanmohan/my-bank-app',
        url: "https://rathoremanmohan.github.io/my-bank-app/"
    },
    {
        name: 'Rolling Dice Game',
        type: 'javascript',
        image:'images/portfolio/img10.jpg',
        gitlink: 'https://github.com/rathoremanmohan/rolling-dice-game',
        url: "https://rathoremanmohan.github.io/rolling-dice-game/"
    }
]

const portfoliohtml = function () {

    const articles = projects.map(function (project){
        const projectMovements = document.querySelector('.portfolio-items');
        const html = `
                <article class="col-sm-4 isotopeItem ${project.type}">
                    <div class="portfolio-item">
                        <img src=${project.image} alt="" />
                        <div class="portfolio-desc align-center">
                            <div class="folio-info">
                                <h5>${project.name}</h5>
                                <a href="${project.gitlink}" target="_blank"><i class="fa fa-github-square fa-2x"></i></a>
                                <a class="btn-theme btn-small" href="${project.url}" target="_blank" role="button">Live</a>
                            </div>
                        </div>
                    </div>
                </article>
                `;
        projectMovements.insertAdjacentHTML('afterbegin', html);
    });
};
// portfoliohtml();


