# contentful-metalsmith-example

An example to showcase the integration of [Metalsmith](http://www.metalsmith.io/) and [Contentful](www.contentful.com) by using a metalsmith plugin: [contentful-metalsmith](https://github.com/contentful/contentful-metalsmith).

# About

The goal of this project is to show how easily you can create static sites using the content (text, images, links, etc.) stored on [Contentful](www.contentful.com). This project
is configured to fetch data from a public [space](https://www.contentful.com/developers/documentation/content-delivery-api/http/#spaces) using [Contentful's Content Delivery API](https://www.contentful.com/developers/documentation/content-delivery-api/http/#spaces).

# Usage

1. Clone and install the project dependencies

  ```shell
    $ git clone git@github.com:contentful/contentful-metalsmith-example.git
    $ cd contentful-metalsmith
    $ npm install
  ```

2. Run metalsmith

  ```shell
    $ ./node_modules/metalsmith/bin/metalsmith

    Metalsmith · successfully built to /Users/farruco/Repos/Work/contentful-metalsmith-example/build
  ```

After running metalsmith you will have several files into the ```build``` dir. Each of this files demonstrate a capability of the [contentful-metalsmith plugin](https://github.com/contentful/contentful-metalsmith):

  * ```entries.html```, shows a list of [entries](https://www.contentful.com/developers/documentation/content-delivery-api/http/#entries) on the space giving some info about each of them.
  * ```albums.html```, shows only entries with [contentType](https://www.contentful.com/developers/documentation/content-delivery-api/http/#content-types) 'album'.
  * ```venues.html```, shows only entries with [contentType](https://www.contentful.com/developers/documentation/content-delivery-api/http/#content-types) 'venue' and also applies other [filter](https://www.contentful.com/developers/documentation/content-delivery-api/http/#search-filter) to show only those venues located in the United States or in the United Kingdom.

For more info on the capabalities of the plugin visit [its repo](https://github.com/contentful/contentful-metalsmith).

