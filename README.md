
# Styleguide for KK.dk site

[Demo page](http://66.228.54.41/kkdk/)

====================

### Install nodejs

See page [Nodejs offical page](https://nodejs.org/)

====================

### Build project

Open command prompt node js (window) or terminal (ubuntu, osx ... )

{code}npm install{code}

====================

### Run project
Open command prompt (window) or terminal (ubuntu, osx... )

{code}gulp{code}

====================

### Create new component
* In folder component , create subfolder has name same name component (no space , special symbol)
* In folder yet created , create `[name-folder].html` and `[name-folder].css`
* File html save markup component
* File css save style component
* Open `[dir project]/components.twig` , find row `{% set list_components = [`
* Add structure to last row
{code}
  {

    'id':'[name-folder]',

    'name': '[Description of component]'

  }
{code}
**Run 'gulp' command again after create new component**

====================

## FFW team!

