# webPush-token


## Table of Contents

 * [Introduction](#introduction)
 * [Run](#Run)
 * [Sample Code](#Sample-Code)
 * [License](#license)


## Introduction

This sample code is used to demonstrate how to get the browser's token. Integrate the configuration information 
we obtained from the webpush proxy page into the sample code.Among them, our webpush sdk is introduced to register 
the browser's ServiceWork, and call the interface to get and delete the browser's token.

## Run

First, ensure that the node environment has been installed.

Start locally(Listening on port: 5050.):

```bash
npm install
npm run build
```

## Sample Code

The following table lists methods in index.html.
| Method | Description |
| ---- | ---- |
| deleteToken | Delete token. |
| getToken | Get token. |
| onMessage | Directs push messages to your web page's,if the user currently has it open. |

## License

Node.js Sample Code is licensed under the
[Apache License, version 2.0](http://www.apache.org/licenses/LICENSE-2.0).
