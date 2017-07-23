# twitter journal (Learning Graphql)
this app  will use a journalling system that user can post using twitter-like post and add functionality to post the twitter.

## Flow
- first on the mobile apps user will be prompted a screen to login if they're not currently logged in
- then after being logged in, the user can post a journal. the view would consist of input box with an option to directly share to twitter
- the front page also consist of "Your Tweets Today", this will make the user can navigate easily what they' just tweeted and also not misdirected by too much data if we opt to display all their tweet in the front page
- the tweet item will be consisted of the text and also two buttons, love (favorite) button and "post to twitter" button so the user have an option to not directly post to twitter after posting and can post to twitter old journal
- the tweet item have a checkbox beside of content, they can select multiple tweet to mark them as favorite or to insert them to a story
- _second page_ is the timeline page, this will be all of the user journal. 
- _third page_ is loved/favourite page, this will be the journal that they tagged as favourite
- _insert to story_ modal. consist of name of the story and confirm button (only support creating new story) (at the later version might add the capabilites to assign the selected journal to existing story)

## Login Flow
there might be two option of how to login the user to twitter, authorize natively inside the app or authorize in the backend. but because i don't have any iOS device to test and this will be just proof of concept and fun coding it might be best to authorize in the apps using 'react-native-twitter module'. as it lessen the task (to code authorization in the backend)

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
## Server
server will be setup using node js

### Components
the component will be :
- Graphql
- Apollo
- Express
