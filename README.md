# twitter journal (Learning Graphql)
this app  will use a journalling system that user can post using twitter-like post and add functionality to post the twitter.

## How To Run and test the query
assuming you are already install mongodb in your localhost.
```bash
#clone the repo
$ git clone https://github.com/hanipcode/twit-journal-server.git
#cd
$ cd twit-journal-server
#installing packages
$ npm install
#run the server
$ node index.js
```
now open up your browser and go to http://localhost:8080/graphiql

## Data Schema (For Graphql)
we will use GraphQl in this project to learn and for proof of concept


```graphql
scalar Date

type User  {
	id: String
	twitterId: String
	journal: [Journal]
	story: [Story]
}
type Story {
	id: String
	createdAt: String
  journal: [Journal]
  user: User
}
type Journal {
	id: String
	createdAt: Date
	content: String
	isPosted: Boolean
	isLoved: Boolean
	user: User
	story: Story
}
type Query {
	user(twitterId: String): User
}
type Mutation {
  createUser(twitterId: String!): User
  createJournal(userId: String!, content: String!): Journal
  assignToStory(storyId: String, userId: String!, journalIds: [String]!): Story
  loveJournal(journalId: String!): Journal
  postJournal(journalId: String!): Journal
}
type schema {
  query: Query
  mutation: Mutation
}
```

### Components
the component will be :
- Graphql
- Apollo
- Express
- mongodb
