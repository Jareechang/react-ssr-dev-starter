## Basic react SSR dev server starter

A client with `create-react-app` and a minimal server ssr starter.

⚠️  **This is not meant for production use**


#### Sections

1. [Motivation](#motivation)
2. [What is included](#what-is-included)
3. [Technologies](#technologies)


#### Motivation

This repo is mainly to create a playground for experimenting with react related things with SSR included.

A lot of existing frameworks have a lot of batteries included and are quite opinionated.

**They offer the following:**

- State sync between client / server
- Data fetching / loading
- Router
- Builds
- Templating 
- and More...

Most of the time, these functionalities built-in, and typically are quite difficult to swap out or deviate away from the approach offered by the framework.

So, it forces you to build apps in a certain way. For a good reason, which is optimized for production in a specific case.

However, this make it difficult to experiment / try out ideas with different techniques or optimize for edge cases.

### What is included

1. Client - `create-react-app`
2. Server - minimal server   
    - Includes SSR (serving the app shell)  
    - Auto refresh on server restart  
    - Proxy requests from `/assets/*` to `create-react-app` webpack dev-server

### Technologies

#### Client

- create-react-app 
- react / react-dom 

#### Server 
- express
- http-proxy
- webpack
- react / react-dom 
- nodemon
