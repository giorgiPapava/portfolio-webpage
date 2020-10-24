const projectModal = (projectName) => {
  let project = {};
  switch (projectName) {
    case 'todo':
      project.name = 'Todo App';
      project.description =
        'Project that I built to sharpen my React skills and to track my future projects. I used React JS as front-end and Firebase as back-end, Redux for state management and ReachRouter for routing. Project has user authentication using Firebase Authentication and usesFirestore for data management as well. Website is fully responsive.';
      project.client = 'Self Project';
      project.industry = 'Fullstack';
      project.technologies = ['HTML5', 'CSS3', 'ReactJS', 'Redux', 'Firebase'];
      project.date = 'Aug 2020';
      project.url = 'https://todo-app-fa6eb.web.app/';
      break;

    case 'avicii':
      project.name = 'Avicii Tribute Page';
      project.description =
        'Final project of front end course taken at my university. Inspiration was Avicii, my favorite musicartist. I used semantic HTML5, Sass CSS3 and Vanilla JavaScript. Project is built with responsivedesign. I also used Audio API and basic REST API to get information about artist.';
      project.client = 'Self Project';
      project.industry = 'Front End';
      project.technologies = ['HTML5', 'CSS3', 'JavaScript'];
      project.date = 'July 2020';
      project.url = 'https://giorgipapava.github.io/cs50-project0-avicii/';
      break;

    case 'netflix':
      project.name = 'Netflix Clone';
      project.description =
        'Netflix Clone that I built for react learning purposes.';
      project.client = 'Self Project';
      project.industry = 'Front End';
      project.technologies = ['HTML5', 'CSS3', 'ReactJS'];
      project.date = 'Aug 2020';
      project.url = 'https://netflix-clone-5966a.web.app/';
      break;

    case 'twitter':
      project.name = 'Twitter Clone';
      project.description =
        'Twitter Clone that I built for react learning purposes.';
      project.client = 'Self Project';
      project.industry = 'Front End';
      project.technologies = ['HTML5', 'CSS3', 'ReactJS'];
      project.date = 'Aug 2020';
      project.url = 'https://tiwt-f45d2.web.app/';
      break;

    case 'amazon':
      project.name = 'Amazon Clone';
      project.description =
        'Amazon Clone that I built for react learning purposes.';
      project.client = 'Self Project';
      project.industry = 'Front End';
      project.technologies = ['HTML5', 'CSS3', 'ReactJS'];
      project.date = 'Aug 2020';
      project.url = 'https://clone-e1771.web.app/';
      break;

    case 'covid':
      project.name = 'Covid-19 Tracker';
      project.description =
        'Covid-19 tracker that I built for react learning purposes.';
      project.client = 'Self Project';
      project.industry = 'Front End';
      project.technologies = ['HTML5', 'CSS3', 'ReactJS'];
      project.date = 'Aug 2020';
      project.url = 'https://cov-tracker.netlify.app/';
      break;

    default:
      project.name = '';
      project.description = '';
      project.client = '';
      project.industry = '';
      project.technologies = [];
      project.date = '';
      project.url = '';
      break;
  }

  return project;
};

export default projectModal;
