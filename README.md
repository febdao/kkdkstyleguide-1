# kkdkstyleguide
Styleguide for KK.dk site
------
# Install nodejs
## In window , see page https://nodejs.org/download/
## In linux (ubuntu...)
sudo apt-get update
sudo apt-get install nodejs
sudo apt-get install npm

# Build project
## Open command prompt node js (window) or terminal (ubuntu ... )
npm install

# Run project
## Open command prompt (window) or terminal (ubuntu ... )
gulp

# Create new component
## In folder component , create subfolder has name same name component (no space , special symbol)
## In folder yet created , create [name-folder].html and [name-folder].css
## File html save markup component
## File css save style component
## Open [dir project]/components.twig , find {% set list_components = [
## Add structure to last row
  {
    'id':'[name-folder]',
    'name': '[Description of component]'
  }

## Run again 'gulp' command if after create new component
