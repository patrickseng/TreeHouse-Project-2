

const ul = document.querySelector('.student-list');
const studentsItem = document.getElementsByClassName('student-item');
const studentsPerPage = 10;
const pageClass = document.querySelector('.page');


const showPage = (list, page) => {
  for ( i = 0; i < list.length ; i += 1){
    if ( i >= ((page * (studentsPerPage)) - (studentsPerPage)) && i <= (page * studentsPerPage - 1))
      { list[i].style.display = "block" }
    else
      { list[i].style.display = "none"  }
  }
}

const appendPageLinks = (list) => {
      let maxNumPages = Math.ceil(list.length / studentsPerPage);
      var div = document.createElement("div");
        div.classList.add('pagination');
        pageClass.appendChild(div);
      const ul = document.createElement("ul");
        pageClass.appendChild(ul);
      };

      for ( i = 0; i < maxNumPages; i += 1) {
          let button = document.createElement('button');
          let pageNumberText = document.createElement('pageNumberText');
          button.appendChild('pageNumberText');
          pageClass.appendChild('button');
        };
    }
    appendPageLinks(studentsItem);


/*
1. Determine how many pages are needed for the list by dividing the
total number of list items by the max number of items per page
2. Create a div, give it the “pagination” class, and append it to the .page div
3. Add a ul to the “pagination” div to store the pagination links
4. for every page, add li and a tags with the page number text
5. Add an event listener to each a tag. When they are clicked
call the showPage function to display the appropriate page
6. Loop over pagination links to remove active class from all links
7. Add the active class to the link that was just clicked. You can identify that
clicked link using event.target
*/
}
