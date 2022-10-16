# Unofficial fastText API

<div style="display:flex; flex-direction:column;"><img src="https://github.com/FrederickRoman/fasttextAPI/blob/main/docs/branding/logo.png" alt="Unofficial fastText API logo" height="320"/>
</div>

## Fastext API is an unnoficial API for Facebook's fastText word embedding used under a public license

Resources

POST /api/word/ >130,000 words Note: Due budget/memory constraints this version is a subset of fastText.

Routes

POST /api/word/ body:{words:['list', 'of', 'words']}

<img src="https://github.com/FrederickRoman/fasttextAPI/blob/main/docs/screenshots/home_demo_iPad.png" alt="fastText API iPad screenshot" /> 
 
## Live website

See [fastTextApi](https://www.fasttextapi.com).

## Main libraries used for this project

+ Next.js (TS)
+ MUI


## Project setup

```
npm install
```

### Compiles and hot-reloads

```
npm run dev
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

## Attributions

The data was taken from  [fastText public repository](https://github.com/facebookresearch/fastText)  where they are licensed under  [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/). 

The size of the data was reduced. Only the most common word embeddings were extracted. Then the embeddings were reduced with PCA.
