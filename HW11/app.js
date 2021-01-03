const data = [
  {
    'folder': true,
    'title': 'Pictures',
    'children': [
      {
        'title': 'logo.png'
      },
      {
        'folder': true,
        'title': 'Vacations',
        'children': [
          {
            'title': 'spain.jpeg'
          }
        ]
      }
    ]
  },
  {
    'folder': true,
    'title': 'Desktop',
    'children': [
      {
        'folder': true,
        'title': 'screenshots',
        'children': null
      }
    ]
  },
  {
    'folder': true,
    'title': 'Downloads',
    'children': [
      {
        'folder': true,
        'title': 'JS',
        'children': null
      },
      {
        'title': 'nvm-setup.exe'
      },
      {
        'title': 'node.exe'
      }
    ]
  },
  {
    'title': 'credentials.txt'
  }
];

const contextMenu = [{'title': 'Rename'}, {'title': 'Delete item'}];

const rootNode = document.getElementById('root');

function addFolderListener(div, icon) {
    div.classList.toggle('folder');
    div.addEventListener('click', function() {
        div.classList.toggle('open');

        if(div.classList.contains('open')) {
            icon.innerHTML = 'folder_open';
        } else {
            icon.innerHTML = 'folder';
        }
  });
}

function createTree(structure, node) {
    const ul = document.createElement('ul');

    for (let element of structure) {
        const li = document.createElement('li');
        const icon = document.createElement('i');
        const div = document.createElement('div');

        node.appendChild(ul);

        const textLi = document.createTextNode(element.title);
        let newLi = ul.appendChild(li);
        div.appendChild(icon);
        div.appendChild(textLi);
        newLi.appendChild(div);

        icon.classList.add('material-icons');

        if (element.folder) {
            const textIcon = document.createTextNode('folder');
            icon.appendChild(textIcon);
            addFolderListener(div, icon);

            if (element.children) {
                createTree(element.children, li);
            } else {
                const i = document.createElement('i');
                i.innerHTML = 'Folder is empty'
                li.appendChild(i);
                i.classList.add('empty');
            }
        } else {
            const textIcon = document.createTextNode('insert_drive_file');
            icon.appendChild(textIcon);
            icon.classList.add('file');
        }   
    }
}

createTree(data, rootNode);

function createContextMenu(structure, node) {
    const ulMenu = document.createElement('ul');
    ulMenu.classList.add('context');
    
    for (let element of structure) {
        const liMenu = document.createElement('li');
        liMenu.classList.add('context-menu');
        liMenu.innerHTML = element.title;
        ulMenu.appendChild(liMenu);
    }
    node.append(ulMenu);
}

createContextMenu(contextMenu, rootNode);

const menu = document.querySelector('.context');
rootNode.addEventListener('contextmenu', event => {
    event.preventDefault();
    menu.style.top = `${event.clientY}px`;
    menu.style.left = `${event.clientX}px`;
    menu.classList.add('active');
});

document.addEventListener('click', event => {
    const keyCode = 2;
    if (event.button !== keyCode) {
        menu.classList.remove('active');
    }
}, false);

menu.addEventListener('click', event => {
    event.stopPropagation();
}, false);
