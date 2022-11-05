![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![GraphQL](https://img.shields.io/badge/Apollo%20GraphQL-311C87?&style=for-the-badge&logo=Apollo%20GraphQL&logoColor=white)

<h1>Class with Roles REST API</h1>

<h3>Create your own Database and use GraphQL Playground to fetch it !</h3>
<h3>Perfect for those who are starting using GraphQL projects</h3>

<h3>Tecnologies and Frameworks</h3>
<img src="https://nodejs.org/static/images/logo.svg#vitrinedev" alt="Node.js">
<ul>
<li><a href="https://nodejs.org/" target="_blank">Node.js</a></li>
<li>Express</li>
<li>GraphQL</li>
<li>Express</li>
<li><a href="https://www.postgresql.org/" target="_blank">PostgreSQL</a></li>
</ul>

<h3>How To Use It ?</h3>
<p> First of all ! Make sure you have Node installed and updated it as PostgreSQL ! After that:

```shell
npm install
npm run api
```
<p>It'll install all the dependencies from the projects and run the server in <a>http://localhost:3000</a>

<h3>PostgreSQL</h3>
<p>The routes are made, you just need to prepare the data !</p>
<strong style="color: red">Make sure you prepare your environment (DB Name, Password and Type) in "api/config/config.json"</strong>

<h1>Role Methods</h1>
<ul>
  <li>GET - Return Info</li>
  <li>POST - Insert Info</li>
  <li>PUT - Update Info</li>
  <li>DELETE - Delete Info</li>
</ul>

<h1>Endpoints</h1>

<h2>/roles [POST]</h2>
<p>Create your Role</p>

<b> Request example: </b>

```json
[
  {
    "type": "CEO"
  }
]
  ```

<b> 201 Return: </b>

```json
[
  {
	"id": 1,
	"type": "CEO",
	"updatedAt": "XXXX-XX-XXT00:00:00.000Z",
	"createdAt": "XXXX-XX-XXT00:00:00.000Z",
  }
]

```
<b> 400 Return (Bad Request): </b>

```json
[
  {
    "detail": "Error sending the data"
  }
]
```

<h2>/roles [GET]</h2>
<p>GET your Roles</p>

<b> 200 Return: </b>

```json
[
  {
	"id": 1,
	"type": "CEO",
	"updatedAt": "XXXX-XX-XXT00:00:00.000Z",
	"createdAt": "XXXX-XX-XXT00:00:00.000Z",
  },
  {
	"id": 2,
	"type": "STUDENT",
	"updatedAt": "XXXX-XX-XXT00:00:00.000Z",
	"createdAt": "XXXX-XX-XXT00:00:00.000Z",
  }
]

```
<b> 404 Return (Page not Found): </b>

```json
[
  {
    "detail": "No Roles Found !"
  }
]
```

<h2>/roles/:id [GET]</h2>
<p>GET your ID Role</p>

<b> 200 Return: </b>

```json
[
  {
	"id": 1,
	"type": "CEO",
	"updatedAt": "XXXX-XX-XXT00:00:00.000Z",
	"createdAt": "XXXX-XX-XXT00:00:00.000Z",
  }
]

```
<b> 404 Return (Page not Found): </b>

```json
[
  {
    "detail": "No Roles Found !"
  }
]
```

<h2>/roles/:id [PUT]</h2>
<p>Update your Role</p>

<b> Request example: </b>

```json
[
  {
    "type": "STUDENT"
  }
]
  ```


<b> 200 Return: </b>

```json
[
  {
	"id": 1,
	"type": "STUDENT",
	"updatedAt": "XXXX-XX-XXT00:00:00.000Z",
	"createdAt": "XXXX-XX-XXT00:00:00.000Z",
  }
]

```
<b> 404 Return (Page not Found): </b>

```json
[
  {
    "detail": "No Roles Found !"
  }
]
```

<h2>/roles/:id [DELETE]</h2>
<p>Delete your ID Role</p>

<b> 200 Return: </b>

```json
[
  {
	  "message": "Role 1 deleted !"
  }
]

```
<b> 404 Return (Page not Found): </b>

```json
[
  {
    "detail": "No Roles Found !"
  }
]
```

<h1>User Methods</h1>
<strong>You need to Create some Roles before Users !</strong>
<ul>
  <li>GET - Return Info</li>
  <li>POST - Insert Info</li>
  <li>PUT - Update Info</li>
  <li>DELETE - Delete Info</li>
</ul>

<h1>Endpoints</h1>

<h2>/users [POST]</h2>
<p>Create your User</p>

<b> Request example: </b>

```json
[
  {
    "name": "Lorem Ipsun",
	"active": true,
	"email": "lorem@ipsun.com",
	"role": 1
  }
]
  ```

<b> 201 Return: </b>

```json
[
  {
  "name": "Lorem Ipsun",
	"active": true,
	"email": "lorem@ipsun.com",
	"createdAt": "XXXX-XX-XXT00:00:00.000Z",
	"updatedAt": "XXXX-XX-XXT00:00:00.000Z",
	"role": 1
  }
]

```
<b> 400 Return (Bad Request): </b>

```json
[
  {
    "detail": "Error sending the data"
  }
]
```

<h2>/users [GET]</h2>
<p>GET your Users</p>

<b> 200 Return: </b>

```json
[
  {
    "id": 1,
    "name": "Lorem Ipsun",
	"active": true,
	"email": "lorem@ipsun.com",
	"createdAt": "XXXX-XX-XXT00:00:00.000Z",
	"updatedAt": "XXXX-XX-XXT00:00:00.000Z",
	"role": 1
  },
  {
    "id": 2,
    "name": "John Doe",
	"active": true,
	"email": "john@doe.com",
	"createdAt": "XXXX-XX-XXT00:00:00.000Z",
	"updatedAt": "XXXX-XX-XXT00:00:00.000Z",
	"role": 1
  }
]

```
<b> 404 Return (Page not Found): </b>

```json
[
  {
    "detail": "No Users Found !"
  }
]
```

<h2>/roles/:id [GET]</h2>
<p>GET your ID Role</p>

<b> 200 Return: </b>

```json
[
  {
  "id": 2,
  "name": "John Doe",
	"active": true,
	"email": "john@doe.com",
	"createdAt": "XXXX-XX-XXT00:00:00.000Z",
	"updatedAt": "XXXX-XX-XXT00:00:00.000Z",
	"role": 1
  }
]

```
<b> 404 Return (Page not Found): </b>

```json
[
  {
    "detail": "No Users Found !"
  }
]
```

<h2>/roles/:id [PUT]</h2>
<p>Update your Role</p>

<b> Request example: </b>

```json
[
  {
    "role": 3
  }
]
  ```


<b> 200 Return: </b>

```json
[
  {
  "id": 2,
  "name": "John Doe",
	"active": true,
	"email": "john@doe.com",
	"createdAt": "XXXX-XX-XXT00:00:00.000Z",
	"updatedAt": "XXXX-XX-XXT00:00:00.000Z",
	"role": 3
  }
]

```
<b> 404 Return (Page not Found): </b>

```json
[
  {
    "detail": "No Users Found !"
  }
]
```

<h2>/roles/:id [DELETE]</h2>
<p>Delete your ID Role</p>

<b> 200 Return: </b>

```json
[
  {
	  "message": "User 2 deleted !"
  }
]

```
<b> 404 Return (Page not Found): </b>

```json
[
  {
    "detail": "No User Found !"
  }
]
```

<h3>GraphQL</h3>
```shell
npm run graphql
```
Then GraphQL'll be running in <a>http://localhost:4000</a>

<h2>Be welcome to change anything in your code !</h2>
