# MD2FTML

***⚠️🚧 Note that this project is still in progress.***

JavaScript toolkits that lets you convert Markdown to FTML.

## Introduction

### What is FTML?

**Foundation Text Markup Language** (FTML) is a term used in SCP Wiki community
and other wikidot sites influenced by it. FTML is the same thing as
what's called Wikidot Syntax, a markup language similar to markdown
but only used on wikidot sites.

### Why MD2FTML?

Markdown is the world's most popular markup language with excellent
readability and portability. People love markdown, but wikidot users
cannot use it when writing wiki pages. So I create a tool that lets
me and other markdown lovers write in our favorite languages
and make our works portable, no need to re-format them when posting to
other platforms.

## Development

MD2FTML is based on Modern.js and its monorepo toolkit. 
The repository use pnpm as its package manager, 
so make sure you have pnpm installed on your machine.

Run these commands to clone repository and install dependencies.

```
git clone https://github.com/BigCoke233/md2ftml.git
cd md2ftml
pnpm install
```

MD2FTML consists of one Single-Page App and two packages.

```
# in project root
cd apps/md2ftml-spa         # the web app
cd packages/md2ftml-parser  # parser library
cd packages/md2ftml-editor  # editor component
```

`cd` into each package's direcotry and run this command 
to watch file changes and build packages real-time.

```
pnpm run build:watch
```

`cd` into app directory and run this command to start developing

```
pnpm run dev
```

Now you are good to go.