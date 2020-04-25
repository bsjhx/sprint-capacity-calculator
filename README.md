# sprint-capacity-calculator

## Deployment

1. Merge all changes to _master_ branch
1. Switch branch to _gh_pages_
1. Merge changes from _master_ branch but don't commit or push them
1. Run command _npm run build_
1. Run command _git add dist_
1. Run command _git commit -m "<Release info>"_
1. Run command _git subtree push --prefix dist origin gh-pages_
1. Check on https://bsjhx.github.io/sprint-capacity-calculator/ 
Check if changes are released (it can take a moment)

## Project setup
```
npm install
```

## Tests
```
vue-cli-service test:unit
npm run test
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
