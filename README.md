[yarnWorkspacesLink]: https://classic.yarnpkg.com/en/docs/workspaces/

# Example Monorepo Approach

This setup uses [Yarn Workspace](yarnWorkspacesLink) to connect packages together from a root source.


## Adding New Projects

### Dependencies

Yarn Workspaces creates references to node modules in the root folder, rather than creating a `node_modules` folder full of other folders with code inside:



This lets packages share dependencies which might lead to faster start up times.


### Referencing One Project in Another

When adding a new project, it's imporant to understand how it will be referenced by other packages or projects within the monorepo. From the [Yarn Workspaces](yarnWorkspacesLink) docs:

"You also need to know that the `/[child-package]/package.json#name` field is used and not the folder name. "

Consider a setup like this:

```js
// Folder Structure:

projects
|-- proj-one
    |--package.json
|-- proj-two
    |--package.json

// ./projects/proj-one/package.json

{
  "name": "project-1", // <-- the package's name value
  "version": "1.0.0",
  // ...
}

```

If we wanted to add Project One as a dependancy to Project Two, we would add the following to `./projects/proj-two/package.json`:

```json
// ./projects/proj-one/package.json

{
  "name": "project-2",
  "version": "1.0.0",
  "dependencies": {
    "project-1": "1.0.0",
    // ...
  }
}

```

Notice how the `name` value and not the project's folder name is used.

### Adding a New Project

1. Create a new folder in `projects`, either manually or via an automated process like `npx create-next-app`
1. If an automated process is used, once the project is set up you should delete that project's `node_modules` at this time. 
1. Add any dependencies to this new project with `yarn add package-name -W` . The `-W` will signal that the dependency should be limited to the current project/workspace, and not the global/root one.
1. Add the `cross-env` package to your new project.
1. Reference the `name` values of any monorepo projects you want to include as dependencies in the `dependencies` object in your project's `package.json` file.
1. Go to the root folder and run `yarn install` to hook everything up.
1. If you used an automated process to generate your new project, it might have added git tracking to that project in its folder. You will also want to clear this out so that the root project can take care of tracking changes. To do so run `git rm --cached projects/[project folder]` from root.