# Tech stack

The tech stack consists of:
- React.js
- React Redux / Persist
- JavaScript / ES6
- Next.js
- Linting:
  - ESLint
  - StyleLint
  - Prettier

## How to run app

- `yarn` to install all dependencies
- `next build`
- `yarn dev`

## Practices to follow
- Always try to reuse code the best you can
- Extract helper functions into `helpers/utils`
- Extract constants into `helpers/constants`
- Extract custom hooks into `helpers/hooks`
- Don't use classes, use functional components
- Try to use Redux/Persist over state in components
- Make sure to use linters on `.ts`, `.tsx`, and `.scss` files to preserve code cleanness
- Use the Atomic UI design principles, by creating components which can be categories as either `Atoms`, `Molecules`, `Organisms`, `Pages`, or `Widgets`
- With Next.js, any new pages you make must be added to the `/pages` directory, where the file name will be the route name, e.g. `spot-trading` will become `localhost:8080/spot-trading`
- Make sure to use `Sass Modules` format instead of regular Sass, as Next.js does not support that
- Make sure components are responsive on every form factor, including `iPhone 5/SE`
- Any global styles should be included in `src/styles/globals.scss`
- Make sure to commit and push code on feature branches regularly, and do PRs to merge into dev, to acquire feedback, and to prevent data loss