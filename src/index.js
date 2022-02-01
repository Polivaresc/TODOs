import './style.css';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';
import { projectListeners, todoListeners } from './handler';
import { displayMenu, displayPage, showProjectPage } from './views';

projectListeners();
todoListeners();
showProjectPage();
displayMenu();
displayPage();
