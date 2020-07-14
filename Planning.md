## Project Walkthrough

## Step 1 - Identify Each View

We need to determine the each view that is required for our app.
Views of our app

### Dashboard View

- is located at the home route (/)
- shows tweets sorted from most recently added at the top, to oldest at the bottom
- each tweet will show:
  - the author
  - the time stamp
  - who the author is replying to
  - the text of the tweet
  - a reply button - with the number of replies (if higher than 0)
  - a like button - with the number of likes (if higher than 0)

### Tweet View

- is located at `/tweet/:id`
- shows an individual tweet
  - the author
  - the time stamp
  - a reply button - with the number of replies (if higher than 0)
- a like button - with the number of likes (if higher than 0)
- has a reply form
- shows all replies

### Create Tweet View

- is located at `/new`
- has a textbox for adding a new tweet

## Step 2: Break Each View Into a Hierarchy of Components

In this step we'll break each view's elements into components and group them all

### Components for the Dashboard View

- **App** - the overall container for the project
- **Navigation** - displays the navigation
- **Tweets List** - responsible for the entire list of tweets
- **Tweet** - in charge of display the content for a single tweet

### Components for the Tweet View

- **App** - the overall container for the project
- **Navigation** - displays the navigation
- **Tweet Container** - displays a list of tweets
- **Tweet** - displays the content for a single tweet
- **New Tweet** - display the form to create a new tweet (reply)

### Components for the New Tweet View

- **App** - the overall container for the project
- **Navigation** - displays the navigation
- **New Tweet** - display the form to create a new tweet

### All Components

After identifying all the components from multiple pages/views these are the components we need for our app.

- App
- Navigation
- Tweets List
- Tweet Container
- Tweet
- New Tweet

## Step 2: Determine What Events Happen in the App

We need to take a look at what is happening in each component. Let's determine what actions the app or the user is performing on the data. Is the data being set, modified, or deleted?...then we'll need an action to keep track of that event!

Let's italicize the action and bold the data.

### Tweets List Component

For the Tweets List component, the only information that we see is that we'll have to get a list of all of the tweets. So for this component, we just need to:

- _get_ the **tweets**

So the action type for event this will probably be something like `GET_LIST_OF_TWEETS` or `GET_DATA`.

### Tweet Component

- We _get_ a particular tweet from a list of **tweets**.
- We _get_ the **authedUser** (user that is currently logged in) so the user can toggle the likes on each tweet.
- We _get_ the **authedUser** so the user can _reply_ to a **tweet**.

### Tweet Container Component

- We _get_ a specific tweet from a list of **tweets**.
- We _get_ the replies to a specific tweet from a list of **tweets**.

### New Tweet Component

- We _get_ the **authedUser** so the user can create a **new tweet**.
- We _set_ the **text of the new tweet**.
