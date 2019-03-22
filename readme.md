# BuzzingPixel Fabricator Project Starter

This Fabricator project starter provides and example and/or starting point for using the Fabricator front-end build process.

## Using Fabricator

To get started with this project, copy the following files and directories from this repository to your project:

- `assetsSource`
- `.editorconfig`
- `.gitattributes` (may require merging with an existing .gitattributes)
- `.gitignore` (may require merging with your existing .gitignore)
- `.eslintrc` (can be edited to match your prefered code style)
- `fab.js`
- `fabCritical.js`
- `package.json`
- `project.json`
- `projectOverrides.json.sample` (Anyone working on the project can remove `.sample` and override things locally in their environment)

Now:

1. Run `yarn` in your project directory
2. Edit the `project.json` with your local settings if you desire.
    1. Set the proxy to the local development site URL for your project (or set to false if you do not wish to use live reload)
    2. Update the watch array to watch files and directories applicable to your project (if any, or remove if none)
    3. If your public directory is named something other than `public` add an `assets` key and update accordingly. The default is `"public/assets"`. If your public directory is `public_html` for instance, you would set the `assets` key to `"public_html/assets"`
        - See [baseProjectFile.json](https://github.com/BuzzingPixelFabricator/fab-build-next/blob/master/src/baseProjectFile.json) for other key/values you can add and override
3. You can now run `yarn run fab` on the command line to build your project and watch for changes to continuously build
    - To run the build only and not watch for changes, use `yarn run fab --build-only`

## License

Copyright 2019 TJ Draper, BuzzingPixel, LLC

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at [http://www.apache.org/licenses/LICENSE-2.0](http://www.apache.org/licenses/LICENSE-2.0)

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
