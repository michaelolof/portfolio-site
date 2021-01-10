# Source code for Portfolio Page

## For Development
Prefer VSCode dev containers for development as all dependencies have been defined there.
- Use `npm run start:server` to start development server in the container.
- Use `npm run start:webpack` to build your js files
- Use `npm run start:sass` to build your scss files
- Or just use `npm run start` to run all the 3 above commands concurrently. 

## For Deployment
To deploy:
- Build files into a distribution folder with `npm run build`
- Run `npm run deploy` to Copy `dist` files to production repo.

The way deployment works is that the distrubution folder from this project is hosted in a seperate project which is connected to the deployment pipeline.