[yarnWorkspacesLink]: https://classic.yarnpkg.com/en/docs/workspaces/
[nextGithub]: https://github.com/vercel/next.js
[materialUISite]: https://material-ui.com/

# Multi-App Monorepo

You can think of a monorepo like an office building for a company: different floors for different departments doing specialized work, but they may sometimes need to interact with each other to get a job done. They also all individually share various utilities and areas like elevators, a mail room, and maybe a cafeteria.

The monorepo approach can be a good fit for organizations that have several small applications that need to leverage the same components or utilities. Just like any approach, [there are pros and cons involved](https://www.happycoders.eu/java/monorepos-advantages-disadvantages/), so it's a good idea to have a solid familiarity with what those are before settling on a monorepo as a solution for your work. 

The following documentation uses the following language to describe the different moving parts in play:

* **Project**: An independent application's code, essentially a package
* **Shared Code**: Components or utilities that can be used by any and all applications


## Tooling 

This setup uses:

* [Yarn Workspace](yarnWorkspacesLink) to connect packages together from a root source
* [Next.js](nextGithub) for the example projects (though any React project would work)
* [Material UI](materialUISite) for well-documented UI patterns to build off of


## Adding New Projects

### Dependencies

Yarn Workspaces creates references to node modules in the root folder, rather than creating a `node_modules` folder full of other folders with code inside:

![GLP-monorepo-screenshot-004](https://user-images.githubusercontent.com/2972688/95025567-4a61b600-0650-11eb-8d20-7c221a0ed755.png)

This lets packages share dependencies, but also lets one local package reference code in another without the need for creating individual external NPM packages, etc.


### Referencing One Project in Another

When adding a new project, it's imporant to understand how it will be referenced by other projects within the monorepo. From the [Yarn Workspaces](yarnWorkspacesLink) docs:

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

```js
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
