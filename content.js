const icons = {
   "icon": {
      'php': 'icons/php.svg',
      'js': 'icons/javascript.svg',
      'css': 'icons/css.svg',
      'svg': 'icons/svg.svg',
      'png': 'icons/image.svg',
      'jpg': 'icons/image.svg',
      'jpeg': 'icons/image.svg',
      'sql': 'icons/database.svg',
      'sqlite': 'icons/database.svg',
      'pdb': 'icons/database.svg',
      'json': 'icons/json.svg',
      'html': 'icons/html.svg',
      'mp4': 'icons/video.svg',
      'md': 'icons/markdown.svg',
      'py': 'icons/python.svg',
      'gitignore': 'icons/git.svg',
      'gitattributes': 'icons/git.svg',
      'keep': 'icons/git.svg',
      'github': 'icons/git.svg',
      'sln': 'icons/visualstudio.svg',
      'vb': 'icons/visualstudio.svg',
      'csproj': 'icons/visualstudio.svg',
      'settings': 'icons/settings.svg',
      'config': 'icons/settings.svg',
      'txt': 'icons/document.svg',
      'vbproj': 'icons/xml.svg',
      'resx': 'icons/xml.svg',
      'cs': 'icons/csharp.svg',
      'exe': 'icons/exe.svg',
   },
   "folder": {
      'folder': 'icons/folder.svg',
      'controller': 'icons/folder-controller.svg',
      'controllers': 'icons/folder-controller.svg',
      'css': 'icons/folder-css.svg',
      'style': 'icons/folder-css.svg',
      'svg': 'icons/folder-svg.svg',
      'src': 'icons/folder-src.svg',
      'images': 'icons/folder-images.svg',
      'img': 'icons/folder-images.svg',
      'db': 'icons/folder-database.svg',
      'database': 'icons/folder-database.svg',
      'include': 'icons/folder-include.svg',
      'includes': 'icons/folder-include.svg',
      'javascript': 'icons/folder-javascript.svg',
      'js': 'icons/folder-javascript.svg',
      'mobile': 'icons/folder-mobile.svg',
      'mob': 'icons/folder-mobile.svg',
      'app': 'icons/folder-app.svg',
      'video': 'icons/folder-video.svg',
      '.github': 'icons/folder-github.svg',
      'github': 'icons/folder-github.svg',
      'project': 'icons/folder-project.svg',
      'myproject': 'icons/folder-project.svg',
      'debug': 'icons/folder-debug.svg',
      'release': 'icons/folder-dist.svg',
      'bin': 'icons/folder-dist.svg',
   }
};

function applyIcon(row, iconClass){
   const iconElement = row.querySelector('td.react-directory-row-name-cell-large-screen svg');
   if (iconElement) {
      const iconWrapper = document.createElement('span');
      iconWrapper.className = `icon ${iconClass}`;
      iconWrapper.style.height = '20px';
      iconWrapper.style.width = '20px';

      iconElement.parentNode.replaceChild(iconWrapper, iconElement);
   }
}

function changeFileIcons() {
   const processeRows = new Set();

   document.querySelectorAll('tr.react-directory-row').forEach(row => {

      const fileName = row.querySelector('td.react-directory-row-name-cell-large-screen').textContent.trim();

      if (!processeRows.has(fileName)) {
         processeRows.add(fileName);

         const fileExtension = fileName.includes('.') ? fileName.split('.').pop() : '';
         let iconClass = '';

         if (fileExtension && icons.icon[fileExtension]) {
            iconClass = `icon-${fileExtension}`;
         } else {
            const folderName = fileName.toLowerCase();
            if (icons.folder[folderName]) {
               iconClass = `folder-${folderName}`;
            }
         }

         if (iconClass) {
            applyIcon(row, iconClass);
         }
      }
   });
}

const observer = new MutationObserver(changeFileIcons);
observer.observe(document, { childList : true, subtree : true });

window.addEventListener('load', changeFileIcons);